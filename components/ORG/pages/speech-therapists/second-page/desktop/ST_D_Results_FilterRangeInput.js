import { useCallback, useEffect, useRef, useState } from "react"
import { ORG_FILTERS_DATA_D } from "../../../../../../utils/ORG_FiltersCategories"
import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { ST_D_Results_FilterRangeInputWrapper } from "./styles/ST_D_Results_FilterRangeInputWrapper"


export const ST_D_Results_FilterRangeInput = ({
  setTempState,
  categoriesToDisplay = ["nothing here"],
  title,
  toUpdateFilters,
  clearAll,
  shouldClear,
  min = 0,
  max,
  showMiles = false,
  mustShowFiltersDesktop
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [updateFilterData, setUpdateFilterData] = useState(
    ORG_FILTERS_DATA_D[toUpdateFilters].slice(minVal, maxVal + 1)
  )
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

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

    // const updateFilterData = ORG_FILTERS_DATA_D[toUpdateFilters].slice(minVal, maxVal + 1)

    // setTempState((prevState) => {
    //   return {
    //     ...prevState,
    //     [toUpdateFilters]: [...prevState[toUpdateFilters], ...updateFilterData]
    //   }
    // })

    setUpdateFilterData(ORG_FILTERS_DATA_D[toUpdateFilters].slice(minVal, maxVal + 1))
  }, [minVal, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }

    // const updateFilterData = ORG_FILTERS_DATA_D[toUpdateFilters].slice(minVal, maxVal + 1)
    // console.log('updateFilterData:', updateFilterData)

    // setTempState((prevState) => {
    //   // const isEqual = prevState[toUpdateFilters]
    //   // console.log('✨isEqual:', isEqual, updateFilterData)

    //   // return {
    //   //   ...prevState
    //   // }

    //   return {
    //     ...prevState,
    //     [toUpdateFilters]: [...updateFilterData]
    //   }
    // })

    setUpdateFilterData(ORG_FILTERS_DATA_D[toUpdateFilters].slice(minVal, maxVal + 1))
  }, [maxVal, getPercent])

  const handleMinValue = (event) => {
    const value = Math.min(Number(event.target.value), maxVal)
    setMinVal(value)
    minValRef.current = value
  }

  const handleMaxValue = (event) => {
    const value = Math.max(Number(event.target.value), minVal)
    setMaxVal(value)
    maxValRef.current = value
  }

  useEffect(() => {
    setMinVal(min)
    minValRef.current = min

    setMaxVal(max)
    maxValRef.current = max
  }, [clearAll, shouldClear])

  useEffect(() => {
    setTempState((prevState) => {
      return {
        ...prevState,
        [toUpdateFilters]: updateFilterData
      }
    })
  }, [updateFilterData, mustShowFiltersDesktop])

  return (
    <ST_D_Results_FilterRangeInputWrapper
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
          onChange={handleMinValue}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />
        <label htmlFor="max">Maximum price</label>
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={handleMaxValue}
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
    </ST_D_Results_FilterRangeInputWrapper>
  )
}
