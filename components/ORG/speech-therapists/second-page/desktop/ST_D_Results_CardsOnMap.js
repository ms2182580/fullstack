import { useCallback, useEffect, useRef, useState } from "react"
import { PinSvgDefault, PinSvgHover } from "../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApplyDesktop } from "../../../../../context/ORG_Ctx_FiltersApplyDesktop"
import { ORG_MapDefaultValue, ORG_MapFullValue } from "../../../../../utils/ORG_MapValuesToShow"
import { formatNamesFunction, getAllReviews } from "../../../../../utils/ORG_ST_Review"
import { ST_D_Results_CardsOnMapCard } from "./ST_D_Results_CardsOnMapCard"
import { ST_D_Results_CardsOnMapWrapper } from "./styles/ST_D_Results_CardsOnMapWrapper"
ST_D_Results_CardsOnMapCard
export const ST_D_Results_CardsOnMap = ({ handleShowMap }) => {
  const { filterAreApply } = useORG_Ctx_FiltersApplyDesktop()

  const { ORGshowFullMapButton, setORGShowFullMapButton, ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { userFetched, filtersST, pagination: paginationNoFilter } = useORG_Ctx_FetchNoFilters()
  const {
    dataF,
    filtersF,
    pagination: paginationFilter,
    shouldFetchDesktopFilters,
    setShouldFetchDesktopFilters
  } = useORG_Ctx_FetchWithFilters()

  const updateAllReviews = useCallback((dataFetched, setReviews) => {
    const allReviews = getAllReviews(dataFetched.length - 1).map((x) => (typeof x === "string" ? x : x.review))

    const newAllReviewsWithFetch = dataFetched.map((data, index) => {
      const name = data.name.first
      const lastName = data.name.last

      return formatNamesFunction(allReviews[index], name, lastName)
    })

    setReviews(newAllReviewsWithFetch)
  }, [])

  const [allReviewsNoFetch, setAllReviewsNoFetch] = useState([])
  useEffect(() => {
    if (!filterAreApply) {
      if (allReviewsNoFetch.length === 0) {
        updateAllReviews(userFetched.allData, setAllReviewsNoFetch)
      } else if (paginationNoFilter !== 1) {
        setAllReviewsNoFetch([])
        updateAllReviews(userFetched.allData, setAllReviewsNoFetch)
      }
    }
  }, [userFetched, filterAreApply])

  const [allReviewsWithFetch, setAllReviewsWithFetch] = useState([])
  useEffect(() => {
    if (filterAreApply && shouldFetchDesktopFilters) {
      if (allReviewsWithFetch.length === 0) {
        updateAllReviews(dataF.allData, setAllReviewsWithFetch)
      } else if (paginationFilter !== 1) {
        setAllReviewsWithFetch([])
        updateAllReviews(dataF.allData, setAllReviewsWithFetch)
      }
    }
  }, [dataF, filterAreApply, shouldFetchDesktopFilters, paginationFilter])

  const [reviewsToUse, setReviewsToUse] = useState(filterAreApply ? allReviewsWithFetch : allReviewsNoFetch)

  useEffect(() => {
    setReviewsToUse(filterAreApply ? allReviewsWithFetch : allReviewsNoFetch)
  }, [allReviewsNoFetch, allReviewsWithFetch, filterAreApply])

  const myRef = useRef(null)

  const [heightAndWidthShrinked, setHeightAndWidthShrinked] = useState()
  const [heightAndWidthFull, setHeightAndWidthFull] = useState()

  useEffect(() => {
    if (myRef.current && !ORGshowFullMapButton && heightAndWidthShrinked === undefined) {
      setHeightAndWidthShrinked({ width: myRef.current.clientWidth, height: myRef.current.clientHeight })
    }

    if (myRef.current && ORGshowFullMapButton && heightAndWidthFull === undefined) {
      setHeightAndWidthFull({ width: myRef.current.clientWidth, height: myRef.current.clientHeight })
    }
  }, [myRef, ORGshowFullMapButton])

  useEffect(() => {
    if (heightAndWidthShrinked !== undefined && heightAndWidthShrinked.width !== myRef.current.clientWidth) {
      setHeightAndWidthShrinked({ width: myRef.current.clientWidth, height: myRef.current.clientHeight })
    }
  }, [myRef.current])

  const [positionsShrinked, setPositionsShrinked] = useState([
    {
      top: 0,
      left: 0
    }
  ])
  const [positionsFull, setPositionsFull] = useState([
    {
      top: 0,
      left: 0
    }
  ])

  useEffect(() => {
    if (heightAndWidthShrinked !== undefined) {
      const newPositions = []
      for (let i = 0; i < ORG_MapDefaultValue(); i++) {
        const calcLeft = Math.floor(Math.random() * heightAndWidthShrinked.width - PinSvgHover().props.width)
        const left = calcLeft < 0 ? 0 : calcLeft

        const calcTop = Math.floor(Math.random() * heightAndWidthShrinked.height - PinSvgHover().props.height)

        const top = calcTop < 0 ? 0 : calcTop

        newPositions.push({ top, left })
      }
      setPositionsShrinked(newPositions)
    }
  }, [userFetched, dataF])

  useEffect(() => {
    if (heightAndWidthShrinked !== undefined) {
      const newPositions = []
      for (let i = 0; i < ORG_MapDefaultValue(); i++) {
        const calcLeft = (positionsShrinked[i]?.left / windowSizeShrink.prevWidth) * windowSizeShrink.currWidth
        const left = calcLeft < 0 ? 0 : calcLeft

        const calcTop = (positionsShrinked[i]?.top / windowSizeShrink.prevHeight) * windowSizeShrink.currHeight

        const top = calcTop < 0 ? 0 : calcTop
        newPositions.push({ top, left })
      }
      setPositionsShrinked(newPositions)
    }
  }, [heightAndWidthShrinked])

  useEffect(() => {
    if (heightAndWidthFull !== undefined) {
      const newPositions = []
      for (let i = 0; i < ORG_MapFullValue(); i++) {
        const calcLeft = Math.floor(Math.random() * heightAndWidthFull.width - PinSvgHover().props.width)
        const left = calcLeft < 0 ? 0 : calcLeft

        const calcTop = Math.floor(Math.random() * heightAndWidthFull.height - PinSvgHover().props.height)
        const top = calcTop < 0 ? 0 : calcTop

        newPositions.push({ top, left })
      }
      setPositionsFull(newPositions)
    }
  }, [userFetched, dataF])


  useEffect(() => {
    if (heightAndWidthFull !== undefined) {
      const newPositions = []
      const maxLeft = windowSizeFull.currWidth - PinSvgHover().props.width
      const maxTop = windowSizeFull.currHeight - PinSvgHover().props.height

      for (let i = 0; i < ORG_MapFullValue(); i++) {
        const calcLeft = (positionsFull[i]?.left / windowSizeFull.prevWidth) * windowSizeFull.currWidth

        const left = calcLeft < 0 ? 0 : calcLeft > maxLeft ? maxLeft : calcLeft

        const calcTop = (positionsFull[i]?.top / windowSizeFull.prevHeight) * windowSizeFull.currHeight

        const top = calcTop < 0 ? 0 : calcTop > maxTop ? maxTop : calcTop

        newPositions.push({ top, left })
      }
      setPositionsFull(newPositions)
    }
  }, [heightAndWidthFull])


  const [windowSizeShrink, setWindowSizeShrink] = useState({
    // currHeight: window.innerHeight,
    currWidth: window.innerWidth,
    prevWidth: null
    // prevHeight: null
  })

  const [windowSizeFull, setWindowSizeFull] = useState({
    currWidth: window.innerWidth,
    prevWidth: null,
    currHeight: null,
    prevHeight: null
  })

  const [heightAndWidthToResizeShrink, setHeightAndWidthToResizeShrink] = useState()
  const [heightAndWidthToResizeFull, setHeightAndWidthToResizeFull] = useState()

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWindowSizeShrink((prevState) => ({
          prevHeight: prevState.currHeight,
          prevWidth: prevState.currWidth,
          currWidth: entry.contentRect.width,
          currHeight: entry.contentRect.height
        }))

        setWindowSizeFull((prevState) => ({
          prevHeight: prevState.currHeight,
          currHeight: entry.contentRect.height,
          prevWidth: prevState.currWidth,
          currWidth: entry.contentRect.width
        }))

        setHeightAndWidthShrinked({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        })
        setHeightAndWidthFull({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        })
      }
    })

    if (myRef.current) {
      resizeObserver.observe(myRef.current)
    }

    return () => {
      if (myRef.current) {
        resizeObserver.unobserve(myRef.current)
      }
    }
  }, [])

  const [shouldMoveShrink, setshouldMoveShrink] = useState({ x: 0 })
  const [shouldMoveFull, setShouldMoveFull] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const shouldMoveX = windowSizeShrink.currWidth - windowSizeShrink.prevWidth
    setshouldMoveShrink({ x: shouldMoveX })
  }, [windowSizeShrink])

  useEffect(() => {
    const shouldMoveX = windowSizeFull.currWidth - windowSizeFull.prevWidth
    const shouldMoveY = windowSizeFull.currHeight - windowSizeFull.prevHeight
    setShouldMoveFull({ x: shouldMoveX, y: shouldMoveY })
  }, [windowSizeFull])

  useEffect(() => {
    if (!ORGshowFullMapButton && heightAndWidthToResizeShrink !== undefined) {
      const maxRight = heightAndWidthToResizeShrink.width - PinSvgDefault().props.width
      setPositionsShrinked((prevState) => {
        let newArr = prevState.map((x) => {
          let toMoveX

          if (x.left + shouldMoveShrink.x < 0) {
            toMoveX = 0
          } else if (x.left + shouldMoveShrink.x >= maxRight) {
            toMoveX = maxRight
          } else {
            toMoveX = x.left + shouldMoveShrink.x
          }

          if (x.left < 0) {
            toMoveX = Math.floor(Math.random() * maxRight)
          }

          return { top: x.top, left: toMoveX }
        })
        return [...newArr]
      })
    }
  }, [shouldMoveShrink])

  useEffect(() => {
    if (ORGshowFullMapButton && heightAndWidthToResizeFull !== undefined) {
      const maxRight = heightAndWidthToResizeFull.width - PinSvgHover().props.width
      const maxTop = heightAndWidthToResizeFull.height - PinSvgHover().props.height

      setPositionsFull((prevState) => {
        let newArr = prevState.map((x) => {
          let toMoveX
          let toMoveY

          if (x.left + shouldMoveFull.x < 0) {
            toMoveX = 0
          } else if (x.left + shouldMoveFull.x > maxRight) {
            toMoveX = maxRight
          } else {
            toMoveX = x.left + shouldMoveFull.x
          }

          if (x.top + shouldMoveFull.y < 0) {
            toMoveY = 0
          } else if (x.top + shouldMoveFull.y >= maxTop) {
            toMoveY = maxTop
          } else {
            toMoveY = x.top + shouldMoveFull.y
          }

          if ((x.left === 0 && x.top === 0) || (x.left < 0 && x.top < 0)) {
            toMoveX = Math.floor(Math.random() * maxRight)
            toMoveY = Math.floor(Math.random() * maxTop)
          }

          return { top: toMoveY, left: toMoveX }
        })
        return [...newArr]
      })
    }
  }, [shouldMoveFull])

  return (
    <ST_D_Results_CardsOnMapWrapper ref={myRef}>
      {!filterAreApply
        ? !ORGshowFullMapButton && positionsShrinked.length > 0
          ? positionsShrinked.map(({ top, left }, i) => {
            return (
              <ST_D_Results_CardsOnMapCard
                top={top}
                left={left}
                key={`${top}-${left}-${i}`}
                ORGshowFullMapButton={ORGshowFullMapButton}
                handleShowMap={handleShowMap}
                personalData={userFetched.allData[i]}
                technicalData={filtersST[i]}
                review={reviewsToUse[i]}
              />
            )
          })
          : ORGshowFullMapButton && positionsFull.length > 0
            ? positionsFull.map(({ top, left }, i) => {
              return (
                <ST_D_Results_CardsOnMapCard
                  top={top}
                  left={left}
                  key={`${top}-${left}-${i}`}
                  ORGshowFullMapButton={ORGshowFullMapButton}
                  handleShowMap={handleShowMap}
                  personalData={userFetched.allData[i]}
                  technicalData={filtersST[i]}
                  review={reviewsToUse[i]}
                />
              )
            })
            : null
        : filterAreApply && !ORGshowFullMapButton && positionsShrinked.length > 0
          ? positionsShrinked.map(({ top, left }, i) => {
            return (
              <ST_D_Results_CardsOnMapCard
                top={top}
                left={left}
                key={`${top}-${left}-${i}`}
                ORGshowFullMapButton={ORGshowFullMapButton}
                handleShowMap={handleShowMap}
                personalData={dataF?.allData[i]}
                technicalData={filtersF[i]}
                review={reviewsToUse[i]}
              />
            )
          })
          : filterAreApply && ORGshowFullMapButton && positionsFull.length > 0
            ? positionsFull.map(({ top, left }, i) => {
              return (
                <ST_D_Results_CardsOnMapCard
                  top={top}
                  left={left}
                  key={`${top}-${left}-${i}`}
                  ORGshowFullMapButton={ORGshowFullMapButton}
                  handleShowMap={handleShowMap}
                  personalData={dataF?.allData[i]}
                  technicalData={filtersF[i]}
                  review={reviewsToUse[i]}
                />
              )
            })
            : null}
    </ST_D_Results_CardsOnMapWrapper>
  )
}
