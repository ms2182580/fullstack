import { useCallback, useEffect, useRef, useState } from "react"
import { XDesktopSvg } from "../../../../assets/Icons/index"
import { useOutsideHide } from "../../../../utils/useOutsideHide"
import { ButtonSmall } from "../../../ui/buttons/general"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_Filters_D_RangeWrapper } from "./styles/ORG_Filters_D_RangeWrapper.js"

export const ORG_Filters_D_Range = ({
  addCharacter = "" /* toLeft, toRight, weigth */,
  buttonName = "noNameOnThisButton",
  clearAll,
  labelName = "" /* name to display on the card  */,
  max = 999,
  min = 0,
  // mustShowFiltersDesktop,
  // setTempState,
  shouldClear,
  // toUpdateFilters,
  whichMeasure = "" /* weight or any other character */
}) => {
  const [mustShowFilter, setMustShowFilter] = useState(false)
  const handleShowFilter = (e) => {
    if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
      setMustShowFilter((prevState) => !prevState)
    }
  }
  const refContainer = useRef(null)
  useOutsideHide(refContainer, setMustShowFilter)

  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [minValUI, setMinValUI] = useState(min)
  const [maxValUI, setMaxValUI] = useState(max)
  // const [updateFilterData, setUpdateFilterData] = useState(categoriesToDisplay.slice(minVal, maxVal + 1))

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

    // setUpdateFilterData(categoriesToDisplay.slice(minVal, maxVal + 1))
  }, [minVal, getPercent])

  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  const handleMinValue = (event) => {
    const value = Math.min(Number(event.target.value), maxVal)
    setMinVal(value)

    if (whichMeasure !== "weight") {
      setMinValUI(new Intl.NumberFormat().format(value))
    } else {
      const inLbs = `${new Intl.NumberFormat().format(value)} lbs`
      const inKgs = `${Math.round(new Intl.NumberFormat().format(value * 0.45359237))} kg`

      setMinValUI(`${inLbs} · ${inKgs}`)
    }

    minValRef.current = value
  }

  const handleMaxValue = (event) => {
    const value = Math.max(Number(event.target.value), minVal)
    setMaxVal(value)

    if (whichMeasure !== "weight") {
      setMaxValUI(new Intl.NumberFormat().format(value))
    } else {
      const addPlus = value === Number(max)

      const inLbs = `${addPlus ? "+" : ""}${new Intl.NumberFormat().format(value)} lbs`

      const inKgs = `${Math.round(new Intl.NumberFormat().format(value * 0.45359237))} kg`

      setMaxValUI(`${inLbs} · ${inKgs}`)
    }

    maxValRef.current = value
  }

  const [shouldClearAllOptions, setShouldClearAllOptions] = useState(false)
  const handleShouldClearAllOptions = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClearAllOptions((prevState) => !prevState)
    }
  }

  const updateToInitialValues = () => {
    setMinVal(min)
    minValRef.current = min
    if (whichMeasure !== "weight") {
      setMinValUI(new Intl.NumberFormat().format(min))
    } else {
      const inLbs = `${new Intl.NumberFormat().format(min)} lbs`

      const inKgs = `${Math.round(new Intl.NumberFormat().format(min * 0.45359237))} kg`

      setMinValUI(`${inLbs} · ${inKgs}`)
    }

    setMaxVal(max)
    maxValRef.current = max
    if (whichMeasure !== "weight") {
      setMaxValUI(new Intl.NumberFormat().format(max))
    } else {
      const inLbs = `+${new Intl.NumberFormat().format(max)} lbs`

      const inKgs = `${Math.round(new Intl.NumberFormat().format(max * 0.45359237))} kg`

      setMaxValUI(`${inLbs} · ${inKgs}`)
    }
  }

  useEffect(() => {
    updateToInitialValues()
  }, [shouldClearAllOptions])

  // useEffect(() => {
  //   setTempState((prevState) => {
  //     return {
  //       ...prevState,
  //       [toUpdateFilters]: updateFilterData
  //     }
  //   })
  // }, [updateFilterData, mustShowFiltersDesktop])

  return (
    <ORG_Filters_D_RangeWrapper
      minVal={minVal}
      maxVal={maxVal}
      mustShowFilter={mustShowFilter}>
      <span onClick={handleShowFilter}>
        {!mustShowFilter ? <ButtonSmall secondary>{buttonName}</ButtonSmall> : <ButtonSmall>{buttonName}</ButtonSmall>}
      </span>

      <div
        className="container"
        ref={refContainer}>
        <span
          onClick={handleShowFilter}
          tabIndex={0}
          onKeyDown={handleShowFilter}>
          <XDesktopSvg />
        </span>

        {labelName !== "" && <label htmlFor="min">Minimum {labelName}</label>}

        <P semibold>{labelName}</P>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={handleMinValue}
          className="thumb thumb--left"
          style={{ zIndex: minVal > max - 100 && "5" }}
        />

        {labelName !== "" && <label htmlFor="max">Maximum {labelName}</label>}
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
            {addCharacter === "toLeft" && whichMeasure !== "" ? (
              <>
                {whichMeasure} {minValUI}
              </>
            ) : addCharacter === "toRight" && whichMeasure !== "weight" ? (
              <>
                {minValUI} {whichMeasure}
              </>
            ) : addCharacter === "toRight" && whichMeasure === "weight" ? (
              <>{minValUI}</>
            ) : (
              <>{minValUI}</>
            )}
          </div>
          <span></span>
          <div>
            {addCharacter === "toLeft" && whichMeasure !== "" ? (
              <>
                {whichMeasure} {maxValUI}
              </>
            ) : addCharacter === "toRight" && whichMeasure !== "weight" ? (
              <>
                {maxValUI} {whichMeasure}
              </>
            ) : addCharacter === "toRight" && whichMeasure === "weight" ? (
              <>{maxValUI}</>
            ) : (
              <>{maxValUI}</>
            )}
          </div>
        </div>
        <div>
          <span
            onClick={handleShouldClearAllOptions}
            onKeyDown={handleShouldClearAllOptions}>
            <ButtonSmall secondary>Clear all</ButtonSmall>
          </span>
          <span>
            <ButtonSmall>Apply</ButtonSmall>
          </span>
        </div>
      </div>
    </ORG_Filters_D_RangeWrapper>
  )
}
