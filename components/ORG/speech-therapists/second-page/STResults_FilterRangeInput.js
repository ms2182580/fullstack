import { useCallback, useEffect, useRef, useState } from "react"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { STResults_FilterRangeInputWrapper } from "./styles/STResults_FilterRangeInputWrapper"

export const STResults_FilterRangeInput = ({
  dispatch,
  setFilterData,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdate = undefined,
  clearAll,
  setClearAll,
  showStateChildren,
  shouldClear,
  setShouldClear,
  isMobile = false,
  min = 0,
  max,
  showMiles = false
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)
  // console.log("range:", range)

  // Convert to percentage
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max])

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  useEffect(() => {
    // onChange({ min: minVal, max: maxVal });
    // console.log('minVal, maxVal:', minVal, maxVal)
    // console.log("min:", minVal, "max:", maxVal)
  }, [minVal, maxVal])

  return (
    <>
      {/* <STResults_FilterRangeInputWrapper>
        <div
          tabIndex={0}
          onKeyDown={(e) => handleShow(e)}>
          <P semibold>{title}</P>
        </div>

        {categoriesToDisplay.map((x) => (
          <p key={x}>{x}</p>
        ))}

        <p>Total: {max}</p>
      </STResults_FilterRangeInputWrapper> */}

      <STResults_FilterRangeInputWrapper
        minVal={minVal}
        maxVal={maxVal}>
        <div className="container">
          <label htmlFor="min">Minimum price</label>
          <P semibold>{title}</P>
          <input
            type="range"
            min={min}
            max={max}
            value={minVal}
            onChange={(event) => {
              const value = Math.min(Number(event.target.value), maxVal)
              setMinVal(value)
              minValRef.current = value
            }}
            className="thumb thumb--left"
            style={{ zIndex: minVal > max - 100 && "5" }}
          />
          <label htmlFor="max">Maximum price</label>
          <input
            type="range"
            min={min}
            max={max}
            value={maxVal}
            onChange={(event) => {
              const value = Math.max(Number(event.target.value), minVal)
              setMaxVal(value)
              maxValRef.current = value
            }}
            className="thumb thumb--right"
          />
          <div className="slider">
            <div className="slider__track" />
            <div
              ref={range}
              className="slider__range"
            />
          </div>

          <div className="valuesToShow">
            <div>
              {categoriesToDisplay[minVal]} {showMiles ? "miles" : ""}
            </div>
            <span></span>
            <div>
              {categoriesToDisplay[maxVal]} {showMiles ? "miles" : ""}
            </div>
          </div>
        </div>
      </STResults_FilterRangeInputWrapper>
    </>
  )
}
