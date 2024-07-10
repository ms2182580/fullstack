import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { suggestionKeywords } from "@/utils/org/typed-flow/suggestionKeywords"
import { useEffect, useRef, useState } from "react"
import { ORG_D_SearchComponent_LabelInput_Dropdown } from "./ORG_D_SearchComponent_LabelInput_Dropdown"
import { ORG_D_SearchComponent_LabelInputWrapper } from "./styles/ORG_D_SearchComponent_LabelInputWrapper"

export type ORG_D_SearchComponent_LabelInput_Type = {
  label: string
  placeholder: string
  icon: any
  dropdown: string[]
  shouldDisplayDropdown?: boolean
}

type DiagnosisCategoryObj_Type2 = {
  diagnosis: string[]
  symptoms: string[]
}

type DiagnosisCategoryObj_Type = {
  diagnosis: string[]
  symptoms: string[]
}

type DiagnosisCategory_Type = DiagnosisCategoryObj_Type | {} | boolean | ""

type TypedFlowProps = {
  setDiagnosisChoosed: (e: {}) => void
  setInputTypesByUser: (e: string) => void
  pushToTypedFlow: () => void
}

export const ORG_D_SearchComponent_LabelInput = ({
  label = "label title",
  placeholder = "placeholder text",
  icon,
  dropdown = ["first", "second"],
  shouldDisplayDropdown = false,
  setDiagnosisChoosed,
  setInputTypesByUser,
  pushToTypedFlow,
}: ORG_D_SearchComponent_LabelInput_Type & TypedFlowProps) => {
  let TheIcon = icon

  const [isFocus, setIsFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const inputRef = useRef(null)

  const [diagnosisSearchedByUser, setDiagnosisSearchedByUser] = useState("")
  const [diagnosisCategory, setDiagnosisCategory] =
    useState<DiagnosisCategory_Type>("")

  const [haveAtLeastOneMatchState, setHaveAtLeastOneMatchState] =
    useState(false)
  const [userClickOnSuggestion, setUserClickOnSuggestion] = useState(false)

  const [userPressEnter, setUserPressEnter] = useState(false)

  // const [showMessageToUserByEmptyInput, setShowMessageToUserByEmptyInput] =
  //   useState(false)

  const handleShowDropdown = () => {
    setIsFocus(true)
  }

  const handleCloseDropdown = () => {
    if (!isHovered) {
      setIsFocus(false)
    }
  }

  const handleUserPressEnter = (event) => {
    if (event.code === "Enter" && isFocus) {
      setUserPressEnter(true)
    }
  }

  const handleUserUnpressEnter = () => {
    setUserPressEnter(false)
  }

  const handleUserUnpClick = () => {
    setUserClickOnSuggestion(false)
  }

  let handleSetDiagnosis = (e) => {
    handleUserUnpressEnter()
    handleUserUnpClick()
    setDiagnosisSearchedByUser(e.target.value)
    // setInputTypesByUser(e.target.value)
  }

  const handleWhichMatch = (e) => {
    const userInputLower = e.target.value.toLowerCase()
    type FinalObjType = {
      diagnosis: string[]
      symptoms: string[]
    }
    const finalObj: FinalObjType = {
      diagnosis: [],
      symptoms: [],
    }

    suggestionKeywords.forEach(({ diagnosis, symptoms }) => {
      symptoms.forEach((singleSympton) => {
        if (singleSympton.toLowerCase().includes(userInputLower)) {
          finalObj.symptoms.push(singleSympton)
        }
      })
      if (diagnosis.toLowerCase().includes(userInputLower)) {
        finalObj.diagnosis.push(diagnosis)
      }
    })
    // console.log("finalObj:", finalObj)
    let haveAtLeastOneMatchDiagnosis = finalObj.diagnosis.length > 0
    let haveAtLeastOneMatchSymptoms = finalObj.symptoms.length > 0

    if (haveAtLeastOneMatchDiagnosis) {
      setDiagnosisCategory((prevState: any) => ({
        ...prevState,
        diagnosis: [finalObj.diagnosis],
      }))
      setHaveAtLeastOneMatchState(true)
    }
    if (haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory((prevState: any) => ({
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
      diagnosisSearchedByUser === ""
    ) {
      setDiagnosisCategory({})
      setHaveAtLeastOneMatchState(false)

      setDiagnosisChoosed({})
      setInputTypesByUser("")
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27 && isFocus) {
        setIsFocus(false)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  useEffect(() => {
    if (
      diagnosisSearchedByUser !== "" &&
      haveAtLeastOneMatchState &&
      (userClickOnSuggestion || userPressEnter)
    ) {
      setDiagnosisChoosed(diagnosisCategory)
      setInputTypesByUser(diagnosisSearchedByUser)

      pushToTypedFlow()
    }

    if (diagnosisSearchedByUser !== "" && haveAtLeastOneMatchState) {
      setDiagnosisChoosed(diagnosisCategory)
      setInputTypesByUser(diagnosisSearchedByUser)
    }
  }, [
    haveAtLeastOneMatchState,
    userClickOnSuggestion,
    diagnosisCategory,
    diagnosisSearchedByUser,
    userPressEnter,
  ])

  useEffect(() => {
    setDiagnosisChoosed({})
    setInputTypesByUser("")
  }, [])

  return (
    <ORG_D_SearchComponent_LabelInputWrapper
      shouldDisplayDropdown={shouldDisplayDropdown}
    >
      <P>{label}</P>

      <div>
        <TheIcon />

        {!shouldDisplayDropdown ? (
          <input type="text" placeholder={placeholder} />
        ) : (
          <>
            <input
              type="text"
              placeholder={placeholder}
              onFocus={handleShowDropdown}
              onBlur={() => {
                handleCloseDropdown()
                // handleNothingSelected()
                setUserClickOnSuggestion(false)
                handleUserUnpressEnter()
              }}
              onChange={(e) => {
                handleSetDiagnosis(e)
                handleWhichMatch(e)
              }}
              onKeyDown={handleUserPressEnter}
              value={diagnosisSearchedByUser}
              ref={inputRef}
            />
            <ORG_D_SearchComponent_LabelInput_Dropdown
              isFocus={isFocus}
              setIsHovered={setIsHovered}
              diagnosisSearchedByUser={diagnosisSearchedByUser}
              setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
              // setInputTypesByUser={setInputTypesByUser}
              setDiagnosisCategory={setDiagnosisCategory}
              setHaveAtLeastOneMatchState={setHaveAtLeastOneMatchState}
              suggestionKeywords={suggestionKeywords}
              inputRefFocus={inputRef}
              setUserClickOnSuggestion={setUserClickOnSuggestion}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}

/* 

*/
