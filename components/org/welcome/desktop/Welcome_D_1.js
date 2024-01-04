import {
  LeftArrowLongSvg,
  Welcome_1Svg,
  XDesktopSvg,
} from "@/assets/icons/index.js"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts.js"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts.js"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider.js"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { renderFiltersInUI_TypedFlow } from "@/utils/ORG/typed-flow/DATA_TypedFlow_D_Filters.js"
import { useEffect, useState } from "react"
import { Welcome_D_1_Dropdown } from "./Welcome_D_1_Dropdown.js"
import { Welcome_D_1Wrapper } from "./styles/Welcome_D_1Wrapper.js"

export const Welcome_D_1 = ({
  handleTaskCompleted,
  handlePreviousComponent,
}) => {
  const { setCancelWelcomePath, setDiagnosisChoosed, setInputTypesByUser } =
    useSessionStorage_typedFlow()
  const [diagnosisSearchedByUser, setDiagnosisSearchedByUser] = useState("")
  const [diagnosisCategory, setDiagnosisCategory] = useState("")
  const [haveAtLeastOneMatchState, setHaveAtLeastOneMatchState] =
    useState(false)
  const [showMessageToUserByEmptyInput, setShowMessageToUserByEmptyInput] =
    useState(false)

  let handleCloseWelcomePath = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setCancelWelcomePath(true)
    }
  }

  let handleSetDiagnosisInContext = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      setDiagnosisChoosed(diagnosisCategory)
    }
  }

  let handleUserTryToGoNextPageWithEmptyButton = (e) => {
    if (
      (e.type === "click" || e.key === "Enter") &&
      haveAtLeastOneMatchState === false &&
      diagnosisSearchedByUser === ""
    ) {
      setShowMessageToUserByEmptyInput(true)
    }

    if (e.key === "Tab") {
      setShowMessageToUserByEmptyInput(showMessageToUserByEmptyInput)
    }
  }

  useEffect(() => {
    if (haveAtLeastOneMatchState && diagnosisSearchedByUser !== "") {
      setShowMessageToUserByEmptyInput(false)
    }
  }, [haveAtLeastOneMatchState, diagnosisSearchedByUser, diagnosisCategory])

  let handleNothingSelected = () => {
    if (
      diagnosisCategory !== "" &&
      haveAtLeastOneMatchState === false &&
      diagnosisSearchedByUser !== ""
    ) {
      setShowMessageToUserByEmptyInput(true)
    }
  }

  const { setSecondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()

  return (
    <Welcome_D_1Wrapper
      showMessageToUserByEmptyInput={showMessageToUserByEmptyInput}
    >
      <Welcome_1Svg />
      <span
        onClick={handleCloseWelcomePath}
        onKeyDown={handleCloseWelcomePath}
        tabIndex={0}
      >
        <XDesktopSvg />
      </span>

      <H1>Let us help!</H1>

      <P>Just tell us the diagnosis.</P>
      <P>We&apos;ll do the rest.</P>

      <Welcome_D_1_Dropdown
        diagnosisSearchedByUser={diagnosisSearchedByUser}
        setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
        setInputTypesByUser={setInputTypesByUser}
        setDiagnosisCategory={setDiagnosisCategory}
        setHaveAtLeastOneMatchState={setHaveAtLeastOneMatchState}
        handleNothingSelected={handleNothingSelected}
      />

      <div>
        <p>Please, make the input match at least one suggestion</p>
        <button
          onClick={(e) => {
            handleTaskCompleted(
              e,
              haveAtLeastOneMatchState,
              diagnosisSearchedByUser
            )
            handleUserTryToGoNextPageWithEmptyButton(e)
            handleSetDiagnosisInContext(e)
            setSecondpageFiltersORG(renderFiltersInUI_TypedFlow)
          }}
          onKeyDown={(e) => {
            handleTaskCompleted(
              e,
              haveAtLeastOneMatchState,
              diagnosisSearchedByUser
            )
            handleUserTryToGoNextPageWithEmptyButton(e)
            handleSetDiagnosisInContext(e)
            setSecondpageFiltersORG(renderFiltersInUI_TypedFlow)
          }}
          tabIndex={0}
        >
          Show me my results!
        </button>
      </div>

      <div
        onClick={(e) => {
          handlePreviousComponent(e)
        }}
        onKeyDown={(e) => {
          handlePreviousComponent(e)
        }}
        tabIndex={0}
      >
        <LeftArrowLongSvg />
        <P>Go Back</P>
      </div>
    </Welcome_D_1Wrapper>
  )
}
