import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { suggestionKeywords } from "@/utils/org/typed-flow/suggestionKeywords"
import Image from "next/legacy/image"
import { useEffect, useRef, useState } from "react"
import ORGDesktop_AgeIcon from "../../../assets/icons/ORGDesktop_AgeIcon.png"
import { useShouldTab } from "../../../utils/ORG_shouldTab"
import { NavBar_D_DropdownDiagnosesSuggestionComponent } from "./NavBar_D_DropdownDiagnosesOptions"
import { NavBar_D_DropdownSuggestionWrapper } from "./NavBar_D_DropdownSuggestionWrapper"

const suggestionsKeywords = [
  "Autism (ASD)",
  "ADHD",
  "Down Syndrome",
  "Cerebral Palsy",
  "Frafile X",
  "Other",
]

export const NavBar_D_InputDiagnosis = () => {
  const { setCancelWelcomePath, setDiagnosisChoosed, setInputTypesByUser } =
    useSessionStorage_typedFlow()
  const [isFocus, setIsFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const inputRef = useRef()
  const [keywordInput, setKeywordInput] = useState("")

  // const { setKeywordsContext, keywordsContext } = useORG_InputCtx()

  // useEffect(() => {
  //   setKeywordInput(keywordsContext)
  // }, [keywordsContext])

  const shouldTab = useShouldTab()
  const [diagnosisSearchedByUser, setDiagnosisSearchedByUser] = useState("")
  const [diagnosisCategory, setDiagnosisCategory] = useState("")
  const [haveAtLeastOneMatchState, setHaveAtLeastOneMatchState] =
    useState(false)
  const [showMessageToUserByEmptyInput, setShowMessageToUserByEmptyInput] =
    useState(false)
  let handleShowDropdown = () => {
    setIsFocus(true)
  }
  let handleCloseDropdown = () => {
    if (!isHovered) {
      setIsFocus(false)
    }
  }

  let handleSetDiagnosis = (e) => {
    setDiagnosisSearchedByUser(e.target.value)
    setInputTypesByUser(e.target.value)
  }
  let handleWhichMatch = (e) => {
    const userInputLower = e.target.value.toLowerCase()

    const finalObj = {
      diagnosis: [],
      symptoms: [],
    }

    suggestionKeywords.forEach((keywordObj) => {
      keywordObj.symptoms.forEach((symptom) => {
        if (symptom.toLowerCase().includes(userInputLower)) {
          finalObj.symptoms.push(symptom)
        }
      })

      if (keywordObj.diagnosis.toLowerCase().includes(userInputLower)) {
        finalObj.diagnosis.push(keywordObj.diagnosis)
      }
    })

    let haveAtLeastOneMatchDiagnosis = finalObj.diagnosis.length > 0
    let haveAtLeastOneMatchSymptoms = finalObj.symptoms.length > 0

    if (haveAtLeastOneMatchDiagnosis) {
      setDiagnosisCategory((prevState) => ({
        ...prevState,
        diagnosis: [finalObj.diagnosis],
      }))
      setHaveAtLeastOneMatchState(true)
    }

    if (haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory((prevState) => ({
        ...prevState,
        symptoms: [finalObj.symptoms],
      }))
      setHaveAtLeastOneMatchState(true)
    }

    if (haveAtLeastOneMatchDiagnosis && !haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory(() => ({
        diagnosis: [finalObj.diagnosis],
        symptoms: [],
      }))
      setHaveAtLeastOneMatchState(true)
    }

    if (!haveAtLeastOneMatchDiagnosis && haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory(() => ({
        diagnosis: [],
        symptoms: [finalObj.symptoms],
      }))
      setHaveAtLeastOneMatchState(true)
    }

    if (
      !haveAtLeastOneMatchDiagnosis &&
      !haveAtLeastOneMatchSymptoms &&
      diagnosisSearchedByUser !== ""
    ) {
      setDiagnosisCategory({})
      setHaveAtLeastOneMatchState(false)
    }
  }
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
  return (
    <div>
      <div>
        <Caption>
          <span>*</span>
          Diagnosis
        </Caption>

        <span>
          <span>
            <Image src={ORGDesktop_AgeIcon} alt="age icon" />
          </span>
          <input
            placeholder="Diagnosis (Ex: Autism...)"
            onFocus={handleShowDropdown}
            onBlur={() => {
              handleCloseDropdown()
              handleNothingSelected()
            }}
            onChange={(e) => {
              handleSetDiagnosis(e)
              handleWhichMatch(e)
            }}
            value={diagnosisSearchedByUser}
            ref={inputRef}
            tabIndex={shouldTab}
          />
        </span>
      </div>

      <NavBar_D_DropdownSuggestionWrapper>
        <NavBar_D_DropdownDiagnosesSuggestionComponent
          isFocus={isFocus}
          setIsHovered={setIsHovered}
          diagnosisSearchedByUser={diagnosisSearchedByUser}
          setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
          setInputTypesByUser={setInputTypesByUser}
          setDiagnosisCategory={setDiagnosisCategory}
          setHaveAtLeastOneMatchState={setHaveAtLeastOneMatchState}
          suggestionKeywords={suggestionKeywords}
          inputRefFocus={inputRef}
        />
      </NavBar_D_DropdownSuggestionWrapper>
    </div>
  )
}
