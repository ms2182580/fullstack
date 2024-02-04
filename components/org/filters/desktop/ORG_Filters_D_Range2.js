import { useCallback, useEffect, useRef, useState } from "react"
import { XDesktopSvg } from "../../../../assets/icons/index"
import { useShowFilters } from "../../../../utils/org/useShowFilters"
import { ButtonSmall } from "../../../ui/buttons/general"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_Filters_D_RangeWrapper2 } from "./styles/ORG_Filters_D_RangeWrapper2"

const calculateKGOnWeight = ({ valueToEvaluate }) => {
  return `${Math.round(
    new Intl.NumberFormat()
      .format(valueToEvaluate * 0.45359237)
      .replace(",", ".")
  )} kg`
}

export const ORG_Filters_D_Range2 = ({
  // addCharacter = "" /* toLeft, toRight, weigth */,
  // buttonName = "noNameOnThisButton",
  // clearAll,
  // labelName = "" /* name to display on the card  */,
  // max = 999,
  // min = 0,
  // minSpecialCharacter,
  // maxSpecialCharacter,
  // addCharacterMinSpecialCharacter /* toLeft, toRight*/,
  // addCharacterMaxSpecialCharacter /* toLeft, toRight*/,
  // mustShowFiltersDesktop,
  // setTempState,
  // shouldClear,
  // toUpdateFilters,
  // whichMeasure = "" /* weight or any other character */,
  ...props
}) => {
  const {
    addCharacter = "" /* toLeft, toRight, weigth */,
    buttonName = "noNameOnThisButton",
    clearAll,
    labelName = "" /* name to display on the card  */,
    max = 999,
    min = 0,
    minSpecialCharacter,
    maxSpecialCharacter,
    addCharacterMinSpecialCharacter /* toLeft, toRight*/,
    addCharacterMaxSpecialCharacter /* toLeft, toRight*/,
    shouldClear,
    whichMeasure = "" /* weight or any other character */,
  } = props.props

  const { className } = props?.shouldAddClassName || "noClassName"

  const { mustShowFilter, handleShowFilter, refContainer } = useShowFilters()

  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const [minValUI, setMinValUI] = useState(min)
  const [maxValUI, setMaxValUI] = useState(max)
  // const [updateFilterData, setUpdateFilterData] = useState(categoriesToDisplay.slice(minVal, maxVal + 1))

  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

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

    const formatedValue = new Intl.NumberFormat("en-US").format(value)

    if (whichMeasure !== "weight" && minSpecialCharacter === undefined) {
      setMinValUI(formatedValue)

      if (addCharacter === "toLeft") {
        setMinValUI(`${whichMeasure} ${formatedValue}`)
      }

      if (addCharacter === "toRight") {
        setMinValUI(`${formatedValue} ${whichMeasure}`)
      }
    }

    if (whichMeasure !== "weight" && minSpecialCharacter !== undefined) {
      const shouldAddSpecialCharacter = value === Number(min)

      if (addCharacter === "toLeft") {
        let toUpdateInState = shouldAddSpecialCharacter
          ? `${minSpecialCharacter} ${whichMeasure} ${formatedValue}`
          : `${whichMeasure} ${formatedValue}`

        setMinValUI(toUpdateInState)
      }

      if (addCharacter === "toRight") {
        if (addCharacterMinSpecialCharacter === "toLeft") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${minSpecialCharacter} ${formatedValue} ${whichMeasure}`
            : `${formatedValue} ${whichMeasure} `

          setMinValUI(toUpdateInState)
        }

        if (addCharacterMinSpecialCharacter === "toRight") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${whichMeasure} ${formatedValue} ${minSpecialCharacter}`
            : `${whichMeasure} ${formatedValue}`

          setMinValUI(toUpdateInState)
        }
      }

      // let finalSpecialCharacter = shouldAddSpecialCharacter && addCharacterMinSpecialCharacter ? `${whichMeasure} ${minSpecialCharacter}` : `${minSpecialCharacter}`

      // setMinValUI(shouldAddSpecialCharacter ? finalSpecialCharacter : ` ${whichMeasure} ${formatedValue}`)
    }

    // if (whichMeasure !== "weight" && addCharacter === "toRight") {
    //   setMinValUI(`${formatedValue} ${whichMeasure}`)
    // }

    if (whichMeasure === "weight") {
      const inLbs = `${formatedValue} lbs`

      const inKgs = calculateKGOnWeight({ valueToEvaluate: value })

      setMinValUI(`${inLbs} · ${inKgs}`)
    }

    // if (whichMeasure !== "weight") {
    //   setMinValUI(formatValue)
    // } else {
    //   const inLbs = `${formatValue} lbs`

    //   const valueInKg = new Intl.NumberFormat("en-US").format(Math.round(value * 0.45359237))

    //   const inKgs = `${valueInKg} kg`

    //   setMinValUI(`${inLbs} · ${inKgs}`)
    // }

    minValRef.current = value
  }

  const handleMaxValue = (event) => {
    const value = Math.max(Number(event.target.value), minVal)
    setMaxVal(value)

    const formatedValue = new Intl.NumberFormat("en-US").format(value)

    if (whichMeasure !== "weight" && maxSpecialCharacter === undefined) {
      if (addCharacter === "toLeft") {
        setMaxValUI(`${whichMeasure} ${formatedValue}`)
      }

      if (addCharacter === "toRight") {
        setMaxValUI(`${formatedValue} ${whichMeasure}`)
      }
    }

    if (whichMeasure !== "weight" && maxSpecialCharacter !== undefined) {
      const shouldAddSpecialCharacter = value === Number(max)

      if (addCharacter === "toLeft") {
        let toUpdateInState = shouldAddSpecialCharacter
          ? `${maxSpecialCharacter} ${whichMeasure} ${formatedValue}`
          : `${whichMeasure} ${formatedValue}`

        setMaxValUI(toUpdateInState)
      }

      if (addCharacter === "toRight") {
        if (addCharacterMaxSpecialCharacter === "toLeft") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${maxSpecialCharacter} ${formatedValue} ${whichMeasure}`
            : `${formatedValue} ${whichMeasure} `

          setMaxValUI(toUpdateInState)
        }

        if (addCharacterMaxSpecialCharacter === "toRight") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${whichMeasure} ${formatedValue} ${maxSpecialCharacter}`
            : `${whichMeasure} ${formatedValue}`

          setMaxValUI(toUpdateInState)
        }

        // let toUpdateInState = addSpecialCharacter ? `${whichMeasure} ${formatedValue} ${maxSpecialCharacter} ` : `${formatedValue} ${whichMeasure}`

        // setMaxValUI(toUpdateInState)
      }
    }

    if (whichMeasure === "weight") {
      const inLbs = `+${formatedValue} lbs`

      const inKgs = calculateKGOnWeight({ valueToEvaluate: value })

      setMaxValUI(`${inLbs} · ${inKgs}`)
    }

    // if (whichMeasure !== "weight") {
    //   setMaxValUI(formatValue)
    // } else {
    //   const addPlus = value === Number(max)

    //   const inLbs = `${addPlus ? "+" : ""}${formatValue} lbs`

    //   const valueInKg = new Intl.NumberFormat("en-US").format(Math.round(value * 0.45359237))

    //   const inKgs = `${valueInKg} kg`

    //   setMaxValUI(`${inLbs} · ${inKgs}`)
    // }

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
    const formatedValueMin = new Intl.NumberFormat("en-US").format(min)

    if (whichMeasure !== "weight" && minSpecialCharacter === undefined) {
      if (addCharacter === "toLeft") {
        setMinValUI(`${whichMeasure} ${formatedValueMin}`)
      }

      if (addCharacter === "toRight") {
        setMinValUI(`${formatedValueMin} ${whichMeasure}`)
      }
    }

    if (whichMeasure !== "weight" && minSpecialCharacter !== undefined) {
      // setMinValUI(minSpecialCharacter)

      if (addCharacter === "toLeft") {
        let toUpdateInState = `${minSpecialCharacter} ${whichMeasure} ${formatedValueMin}`

        setMinValUI(toUpdateInState)
      }

      if (addCharacter === "toRight") {
        if (addCharacterMinSpecialCharacter === "toLeft") {
          let toUpdateInState = `${minSpecialCharacter} ${formatedValueMin} ${whichMeasure}`

          setMinValUI(toUpdateInState)
        }

        if (addCharacterMinSpecialCharacter === "toRight") {
          let toUpdateInState = `${whichMeasure} ${formatedValueMin} ${minSpecialCharacter}`

          setMinValUI(toUpdateInState)
        }
      }
    }

    if (whichMeasure === "weight") {
      const inLbs = `${formatedValueMin} lbs`

      const inKgs = calculateKGOnWeight({ valueToEvaluate: min })

      setMinValUI(`${inLbs} · ${inKgs}`)
    }

    // if (whichMeasure !== "weight") {
    //   setMinValUI(formatValueMin)
    // } else {
    //   const inLbs = `${formatValueMin} lbs`

    //   const valueInKg = new Intl.NumberFormat("en-US").format(Math.round(min * 0.45359237))

    //   const inKgs = `${valueInKg} kg`

    //   setMinValUI(`${inLbs} · ${inKgs}`)
    // }

    setMaxVal(max)
    maxValRef.current = max
    const formatedValueMax = new Intl.NumberFormat("en-US").format(max)

    if (whichMeasure !== "weight" && maxSpecialCharacter === undefined) {
      if (addCharacter === "toLeft") {
        setMaxValUI(`${whichMeasure} ${formatedValueMax}`)
      }

      if (addCharacter === "toRight") {
        setMaxValUI(`${formatedValueMax} ${whichMeasure}`)
      }
    }

    // if (whichMeasure !== "weight" && maxSpecialCharacter !== undefined) {
    //   setMaxValUI(maxSpecialCharacter)
    // }
    if (whichMeasure !== "weight" && maxSpecialCharacter !== undefined) {
      const value = Math.max(maxValRef.current, maxVal)
      const shouldAddSpecialCharacter = value === Number(max)
      if (addCharacter === "toLeft") {
        let toUpdateInState = shouldAddSpecialCharacter
          ? `${maxSpecialCharacter} ${whichMeasure} ${formatedValueMax}`
          : `${whichMeasure} ${formatedValueMax}`

        setMaxValUI(toUpdateInState)
      }

      if (addCharacter === "toRight") {
        if (addCharacterMaxSpecialCharacter === "toLeft") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${maxSpecialCharacter} ${formatedValueMax} ${whichMeasure}`
            : `${formatedValueMax} ${whichMeasure} `

          setMaxValUI(toUpdateInState)
        }

        if (addCharacterMaxSpecialCharacter === "toRight") {
          let toUpdateInState = shouldAddSpecialCharacter
            ? `${whichMeasure} ${formatedValueMax} ${maxSpecialCharacter}`
            : `${whichMeasure} ${formatedValueMax}`

          setMaxValUI(toUpdateInState)
        }

        // let toUpdateInState = shouldAddSpecialCharacter ? `${whichMeasure} ${formatedValueMax} ${maxSpecialCharacter} ` : `${formatedValueMax} ${whichMeasure}`

        // setMaxValUI(toUpdateInState)
      }
    }

    if (whichMeasure === "weight") {
      const inLbs = `+${formatedValueMax} lbs`

      const inKgs = calculateKGOnWeight({ valueToEvaluate: max })

      setMaxValUI(`${inLbs} · ${inKgs}`)
    }

    // if (whichMeasure !== "weight") {
    //   setMaxValUI(formatValueMax)
    // } else {
    //   const inLbs = `+${formatValueMax} lbs`

    //   const valueInKg = new Intl.NumberFormat("en-US").format(Math.round(max * 0.45359237))

    //   const inKgs = `${valueInKg} kg`

    //   setMaxValUI(`${inLbs} · ${inKgs}`)
    // }
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
    <ORG_Filters_D_RangeWrapper2
      minVal={minVal}
      maxVal={maxVal}
      mustShowFilter={mustShowFilter}
      className={className && className}
    >
      <span onClick={handleShowFilter}>
        {!mustShowFilter ? (
          <ButtonSmall secondary>{buttonName}</ButtonSmall>
        ) : (
          <ButtonSmall>{buttonName}</ButtonSmall>
        )}
      </span>

      <div className="container" ref={refContainer}>
        <span
          onClick={handleShowFilter}
          tabIndex={0}
          onKeyDown={handleShowFilter}
        >
          <XDesktopSvg />
        </span>

        {labelName !== "" && <label htmlFor="min">Minimum {labelName}</label>}

        <P semibold>{labelName || buttonName}</P>
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
          <div ref={range} className="slider__range" />
        </div>

        <div className="valuesToShow">
          <div>
            {minValUI}

            {/* {addCharacter === "toLeft" && whichMeasure !== "" ? (
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
            )} */}
          </div>
          <span />
          <div>
            {maxValUI}

            {/* {addCharacter === "toLeft" && whichMeasure !== "" ? (
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
            )} */}
          </div>
        </div>
        <div>
          <span
            onClick={handleShouldClearAllOptions}
            onKeyDown={handleShouldClearAllOptions}
          >
            <ButtonSmall secondary>Clear all</ButtonSmall>
          </span>
          <span>
            <ButtonSmall>Apply</ButtonSmall>
          </span>
        </div>
      </div>
    </ORG_Filters_D_RangeWrapper2>
  )
}
