import { ButtonSmall } from "@/components/ui/buttons/general/index"
import { useState } from "react"
import { XDesktopSvg } from "../../../../assets/icons/index"
import { useShowFilters } from "../../../../utils/org/useShowFilters.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_Filters_D_Checkbox_Input } from "./ORG_Filters_D_Checkbox_Input.js"
import { ORG_Filters_D_CheckboxWrapper2 } from "./styles/ORG_Filters_D_CheckboxWrapper2.js"

export const ORG_Filters_D_Checkbox2 = ({ ...props }) => {
  const {
    buttonName = "noNameOnThisButton",
    categoriesToDisplay = ["nothing here"],
    titleOnModal,
  } = props.props

  const className = props.shouldAddClassName

  const [showRemaining, setShowRemaining] = useState(
    categoriesToDisplay.length <= 3
  )
  const handleShowRemaining = () => {
    setShowRemaining(true)
  }

  // const { setModalShowedCtx } = useCtx_ShowModal()
  // const [mustShowFilter, setMustShowFilter] = useState(false)
  // const handleShowFilter = (e) => {
  //   if ((e.type === "keydown" && e.code === "Enter") || e.type === "click") {
  //     setMustShowFilter((prevState) => !prevState)
  //   }
  // }

  // useEffect(() => {
  //   setModalShowedCtx(prevState => !prevState)
  // }, [mustShowFilter])

  const { mustShowFilter, handleShowFilter, refContainer } = useShowFilters()

  const [shouldClearAllOptions, setShouldClearAllOptions] = useState(false)
  const handleShouldClearAllOptions = (e) => {
    if (e.type === "click" || e.key === "Enter" || e === "from useEffect") {
      setShouldClearAllOptions((prevState) => !prevState)
    }
  }

  // const [show, setShow] = useState(false)
  // const handleShow = (e) => {
  //   if (e.type === "click" || e.key === "Enter") {
  //     setShow(prevState => !prevState)
  //   }
  // }

  // useEffect(() => {
  //   setMustShowFilter(false)
  // }, [clearAll])

  // useEffect(() => {
  //   setClearAll(false)
  //   showStateChildren(show)
  // }, [show])

  const [shouldToggleAllOptions, setShouldToggleAllOptions] = useState(false)
  const handleToggleAll = (e) => {
    if (e.code === "Enter" || e.type === "dblclick") {
      setShouldToggleAllOptions((prevState) => !prevState)
      handleShowRemaining()
    }
  }

  const [allowSelection, setAllowSelection] = useState(true)

  const handleMouseDown = () => {
    setAllowSelection(false) // Allow selection on mouse down
  }

  const handleOnMouseLeave = () => {
    setAllowSelection(true)
  }

  return (
    <ORG_Filters_D_CheckboxWrapper2
      mustShowFilter={mustShowFilter}
      showRemaining={showRemaining}
      allowSelection={allowSelection}
      className={className && className}
    >
      <span onClick={handleShowFilter}>
        {!mustShowFilter ? (
          <ButtonSmall secondary>{buttonName}</ButtonSmall>
        ) : (
          <ButtonSmall>{buttonName}</ButtonSmall>
        )}
      </span>

      <div ref={refContainer}>
        <span
          onClick={handleShowFilter}
          onKeyDown={handleShowFilter}
          tabIndex={0}
          aria-label="Close"
        >
          <XDesktopSvg />
        </span>

        <P
          semibold
          onDoubleClick={handleToggleAll}
          onKeyDown={handleToggleAll}
          onMouseDown={handleMouseDown}
          onMouseUp={handleOnMouseLeave}
          tabIndex={0}
        >
          {titleOnModal || buttonName}
        </P>

        <ul>
          {categoriesToDisplay?.map((x, i) => {
            if (categoriesToDisplay.length > 4 && i < 3) {
              return (
                <li key={x}>
                  <label>
                    <P>{x}</P>
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                      shouldToggleAllOptions={shouldToggleAllOptions}

                      // dispatch={dispatch}
                      // tempState={tempState}
                      // setTempState={setTempState}
                      // setFilterData={setFilterData}
                      // toUpdateFilters={toUpdateFilters}
                      //   clearAll={clearAll}
                      //   shouldClearAllOptions={shouldClearAllOptions}
                    />
                    <span></span>
                  </label>
                </li>
              )
            }
            if (categoriesToDisplay.length > 4 && i >= 3) {
              return (
                <li
                  key={x}
                  className={showRemaining ? "showRemaining" : "notShowYet"}
                >
                  <label>
                    <P>{x}</P>
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                      shouldToggleAllOptions={shouldToggleAllOptions}
                      // dispatch={dispatch}
                      // tempState={tempState}
                      /* setTempState={setTempState} */
                      // setFilterData={setFilterData}
                      /* toUpdateFilters={toUpdateFilters}
clearAll={clearAll}
shouldClearAllOptions={shouldClearAllOptions} */
                    />
                    <span></span>
                  </label>
                </li>
              )
            }
            if (categoriesToDisplay.length <= 4) {
              return (
                <li key={x}>
                  <label>
                    <P>{x}</P>
                    <ORG_Filters_D_Checkbox_Input
                      type="checkbox"
                      name={x}
                      shouldClearAllOptions={shouldClearAllOptions}
                      shouldToggleAllOptions={shouldToggleAllOptions}
                      // dispatch={dispatch}
                      // tempState={tempState}
                      /* setTempState={setTempState} */
                      // setFilterData={setFilterData}
                      /* toUpdateFilters={toUpdateFilters}
clearAll={clearAll}
shouldClearAllOptions={shouldClearAllOptions} */
                    />
                    <span></span>
                  </label>
                </li>
              )
            }
          })}
          {categoriesToDisplay.length > 4 && showRemaining === false && (
            <span onClick={handleShowRemaining}>
              <P semibold hyperlink_normal>
                See All
              </P>
            </span>
          )}
        </ul>

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
    </ORG_Filters_D_CheckboxWrapper2>
  )
}
