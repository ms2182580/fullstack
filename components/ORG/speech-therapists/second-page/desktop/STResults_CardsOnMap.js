import { useCallback, useEffect, useRef, useState } from "react"
import { PinSvgDefault, PinSvgHover } from "../../../../../assets/Icons"
import { useORG_Ctx_FetchNoFilters } from "../../../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_FetchWithFilters } from "../../../../../context/ORG_CtxFetchWithFilters_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_FiltersApply } from "../../../../../context/ORG_Ctx_FiltersApply"
import { ORG_MapDefaultValue, ORG_MapFullValue } from "../../../../../utils/ORG_MapValuesToShow"
import { formatNamesFunction, getAllReviews } from "../../../../../utils/ORG_ST_Review"
import { STResults_CardsOnMapCard } from "./STResults_CardsOnMapCard"
import { STResults_CardsOnMapWrapper } from "./styles/STResults_CardsOnMapWrapper"

export const STResults_CardsOnMap = ({ handleShowMap }) => {
  const { filterAreApply } = useORG_Ctx_FiltersApply()

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

  const [positionsShrinked, setPositionsShrinked] = useState([])
  const [positionsFull, setPositionsFull] = useState([])
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
  }, [userFetched, dataF, heightAndWidthShrinked])

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
  }, [userFetched, dataF, heightAndWidthFull])

  useEffect(() => {
    // console.dir("positionsFull:", positionsFull)
  }, [positionsFull])

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

  useEffect(() => {
    // console.log("heightAndWidthFull:", heightAndWidthFull)
    if (heightAndWidthFull !== undefined) {
      setWindowSizeFull((prevState) => ({ ...prevState, currHeight: myRef.current.clientHeight }))
    }
    // console.log('heightAndWidthFull:', heightAndWidthFull)
  }, [heightAndWidthFull, ORGshowFullMapButton])

  const [heightAndWidthToResizeShrink, setHeightAndWidthToResizeShrink] = useState()
  const [heightAndWidthToResizeFull, setHeightAndWidthToResizeFull] = useState()

  useEffect(() => {
    const handleResize = () => {
      setWindowSizeShrink((prevState) => ({
        // prevHeight: prevState.currHeight,
        prevWidth: prevState.currWidth,
        currWidth: window.innerWidth
        // currHeight: window.innerHeight
      }))

      setWindowSizeFull((prevState) => ({
        prevHeight: prevState.currHeight,
        currHeight: myRef.current.clientHeight,
        prevWidth: prevState.currWidth,
        currWidth: window.innerWidth
      }))

      if (!ORGshowFullMapButton && heightAndWidthShrinked !== undefined) {
        setHeightAndWidthToResizeShrink({ width: myRef.current.clientWidth, height: myRef.current.clientHeight })
      }

      // console.log('ORGshowFullMapButton:', ORGshowFullMapButton)
      // console.log('heightAndWidthFull !== undefined:', heightAndWidthFull !== undefined)
      // console.log('ORGshowFullMapButton && heightAndWidthFull !== undefined:', ORGshowFullMapButton && heightAndWidthFull !== undefined)
      // console.log('windowSizeFull:', windowSizeFull)
      // console.log('myRef.current.clientWidth:', myRef.current.clientWidth)
      // console.log()
      if (ORGshowFullMapButton && heightAndWidthFull !== undefined) {
        setHeightAndWidthToResizeFull({ width: myRef.current.clientWidth, height: myRef.current.clientHeight })
      }

      // console.log("screen.availHeight:", screen.availHeight)
      // console.log("window.innerHeight:", window.innerHeight)
      // console.log("window.outerWidth:", window.outerWidth)
      // console.log("screen.availWidth:", window.screen.availWidth)
      // console.log("window.innerWidth:", window.innerWidth)
      // console.dir()
      // console.log("screen:", screen)
      // console.log('document.fullscreenElement:', document.fullscreenElement)
      // console.log('window:', window)
      // console.log('window.fullScreen:', window.fullScreen)
      // console.log('window.screen:', window.screen)}
    }


    // Add the event listener when the component mounts
    window.addEventListener("resize", handleResize)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [heightAndWidthShrinked, heightAndWidthFull, ORGshowFullMapButton, windowSizeFull])

  useEffect(() => {
    // console.log("heightAndWidthToResizeFull:", heightAndWidthToResizeFull)
    // console.log('windowSizeFull:', windowSizeFull)
  }, [heightAndWidthToResizeFull])

  // const [shouldMove, setShouldMove] = useState({ x: 0, y: 0 })
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
    <STResults_CardsOnMapWrapper ref={myRef}>
      {!filterAreApply
        ? !ORGshowFullMapButton && positionsShrinked.length > 0
          ? positionsShrinked.map(({ top, left }, i) => {
            return (
              <STResults_CardsOnMapCard
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
                <STResults_CardsOnMapCard
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
              <STResults_CardsOnMapCard
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
                <STResults_CardsOnMapCard
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
    </STResults_CardsOnMapWrapper>
  )
}
