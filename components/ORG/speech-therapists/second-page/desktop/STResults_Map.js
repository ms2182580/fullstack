import Image from "next/image.js"
import { LeftArrowTinySvg, RightArrowTinySvg } from "../../../../../assets/Icons"
import STResults_MapImage from "../../../../../assets/images/STResults_MapImage.png"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApply } from "../../../../../context/ORG_Ctx_FiltersApply.js"

import { useEffect, useState } from "react"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { formatNamesFunction, getAllReviews } from "../../../../../utils/ORG_ST_Review"
import { useShouldTab } from "../../../../../utils/ORG_shouldTab"
import { STResults_MapWrapper } from "./styles/STResults_MapWrapper.js"

export const STResults_Map = ({ refUserViewShowFullMapButton }) => {
  const { showFullMapButton, setShowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()

  const handleShowMap = () => {
    setShowFullMapButton((prevState) => !prevState)

    if (showFullMapButton === false) {
      const targetY = refUserViewShowFullMapButton.current.getBoundingClientRect().top + window.pageYOffset + 140

      window.scrollTo({ top: targetY })
    }
  }

  const shouldTab = useShouldTab()

  const { filterAreApply } = useORG_Ctx_FiltersApply()

  const updateAllReviews = (dataFetched, setReviews) => {
    const allReviews = getAllReviews(dataFetched.length - 1).map((x) => (typeof x === "string" ? x : x.review))

    const newAllReviewsWithFetch = dataFetched.map((data, index) => {
      const name = data.name.first
      const lastName = data.name.last

      return formatNamesFunction(allReviews[index], name, lastName)
    })

    setReviews(newAllReviewsWithFetch)
  }

  const { userFetched, filtersST, pagination: paginationNoFilter } = useORG_Ctx_FetchNoFilters()
  console.log("userFetched:", userFetched)

  const [allReviewsNoFetch, setAllReviewsNoFetch] = useState([])
  useEffect(() => {
    if (allReviewsNoFetch.length === 0) {
      // console.log('userFetched.allData:', userFetched.allData)
      updateAllReviews(userFetched.allData, setAllReviewsNoFetch)

      // const allReviews = getAllReviews(userFetched.allData.length - 1).map((x) =>
      //   typeof x === "string" ? x : x.review
      // )
      // console.log("💛allReviews:", allReviews)

      // const newAllReviewsNoFetch = userFetched.allData.map((data, index) => {
      //   const name = data.name.first
      //   const lastName = data.name.last

      //   return formatNamesFunction(allReviews[index], name, lastName)
      // })

      // console.log("💛newAllReviewsNoFetch:", newAllReviewsNoFetch)

      // setAllReviewsNoFetch(newAllReviewsNoFetch)
    } else if (paginationNoFilter !== 1) {
      setAllReviewsNoFetch([])

      updateAllReviews(userFetched.allData, setAllReviewsNoFetch)

      // const allReviews = getAllReviews(userFetched.allData.length - 1).map((x) =>
      //   typeof x === "string" ? x : x.review
      // )
      // console.log("💖allReviews:", allReviews)

      // const newAllReviewsNoFetch = userFetched.allData.map((data, index) => {
      //   const name = data.name.first
      //   const lastName = data.name.last

      //   return formatNamesFunction(allReviews[index], name, lastName)
      // })

      // console.log("💖newAllReviewsNoFetch:", newAllReviewsNoFetch)

      // setAllReviewsNoFetch(newAllReviewsNoFetch)
    }
  }, [userFetched])

  // console.log("allReviewsNoFetch:", allReviewsNoFetch)

  const [allReviewsWithFetch, setAllReviewsWithFetch] = useState([])
  const { dataF, filtersF, pagination: paginationFilter } = useORG_Ctx_FetchWithFilters()

  useEffect(() => {
    if (allReviewsWithFetch.length === 0 && filterAreApply) {
      updateAllReviews(dataF.allData, setAllReviewsWithFetch)
      // updateAllReviewsWithFetch()
    } else if (paginationFilter !== 1) {
      setAllReviewsWithFetch([])
      updateAllReviews(dataF.allData, setAllReviewsWithFetch)

      // updateAllReviewsWithFetch()
    }
  }, [dataF, filterAreApply, paginationFilter])

  // console.log("allReviewsWithFetch:", allReviewsWithFetch)

  return (
    <STResults_MapWrapper
      showFullMapButton={showFullMapButton}
      ORGShowFullMapFilter={ORGShowFullMapFilter}>
      <Image
        src={STResults_MapImage}
        layout={showFullMapButton ? "responsive" : ORGShowFullMapFilter ? "responsive" : "fill"}
        objectFit={showFullMapButton ? "fill" : ORGShowFullMapFilter ? "contain" : "cover"}
        alt="map"
      />

      <button
        onClick={handleShowMap}
        tabIndex={shouldTab}>
        {showFullMapButton || ORGShowFullMapFilter ? (
          <>
            <span>Collpase map</span>
            <RightArrowTinySvg />
          </>
        ) : (
          <>
            <LeftArrowTinySvg /> <span>Show map</span>
          </>
        )}
      </button>
    </STResults_MapWrapper>
  )
}
