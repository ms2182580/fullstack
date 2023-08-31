import { useEffect, useRef, useState } from "react"
import { PinResultsSvg } from "../../../../../../../assets/Icons/index.js"
import { ORG_MapDefaultValue } from "../../../../../../../utils/ORG_MapValuesToShow.js"
import { SLP_D_Results_CardsOnMapCard } from "./SLP_D_Results_CardsOnMapCard.js"
import { SLP_D_Results_CardsOnMapWrapper } from "./styles/SLP_D_Results_CardsOnMapWrapper.js"

export const SLP_D_Results_CardsOnMap = ({ bottomOfButton }) => {
  const myRef = useRef(null)

  const [actualWidthAndHeight, setActualWidthAndHeight] = useState()

  const [isRenderAt, setIsRenderAt] = useState(1)
  const [windowSizeShrink, setWindowSizeShrink] = useState({
    currWidth: window.innerWidth,
    prevWidth: null,
    currHeight: window.innerHeight,
    prevHeight: null
  })

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWindowSizeShrink((prevState) => ({
          prevHeight: prevState.currHeight,
          prevWidth: prevState.currWidth,
          currWidth: entry.contentRect.width,
          currHeight: entry.contentRect.height
        }))
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

  useEffect(() => {
    if (windowSizeShrink.prevWidth !== null) {
      const shouldMoveX = Math.round(windowSizeShrink.currWidth - windowSizeShrink.prevWidth)
      setshouldMoveShrink({ x: shouldMoveX })
    }

    if (windowSizeShrink.prevWidth !== null && windowSizeShrink.prevHeight !== null) {
      setActualWidthAndHeight({
        width: Math.round(windowSizeShrink.currWidth),
        height: windowSizeShrink.currHeight
      })

      setIsRenderAt((prevState) => {
        if (prevState < 2) {
          prevState + 1
          return "not ready"
        } else {
          return "ready"
        }
      })
    }
  }, [windowSizeShrink])

  const [positionsShrinked, setPositionsShrinked] = useState([
    {
      top: 0,
      left: 0
    }
  ])

  useEffect(() => {
    if (actualWidthAndHeight !== undefined && isRenderAt === "ready" && positionsShrinked.length === 1) {
      const newPositions = []
      for (let i = 0; i < ORG_MapDefaultValue(); i++) {
        const calcLeft = Math.floor(Math.random() * actualWidthAndHeight.width - PinResultsSvg().props.width)
        const left = calcLeft < 0 ? 0 : calcLeft
        const calcTop = Math.floor(Math.random() * actualWidthAndHeight.height - PinResultsSvg().props.height)
        const top = calcTop < 0 ? 0 : calcTop
        newPositions.push({ top, left })
      }
      setPositionsShrinked(newPositions)
    }
  }, [actualWidthAndHeight, isRenderAt])

  useEffect(() => {
    if (actualWidthAndHeight !== undefined && isRenderAt === "ready" && positionsShrinked.length !== 1) {
      const maxRight = actualWidthAndHeight.currWidth - PinResultsSvg().props.width

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
  }, [actualWidthAndHeight])

  return (
    <SLP_D_Results_CardsOnMapWrapper
      ref={myRef}
      bottomOfButton={bottomOfButton}>
      {isRenderAt === "ready" &&
        positionsShrinked.length !== 1 &&
        positionsShrinked.map(({ top, left }, i) => {
          return (
            <SLP_D_Results_CardsOnMapCard
              top={top}
              left={left}
              key={`${top}_${left}_${i}`}
            />
          )
        })}
    </SLP_D_Results_CardsOnMapWrapper>
  )
}
