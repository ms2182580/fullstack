import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { suggestionKeywords } from "@/utils/org/typed-flow/suggestionKeywords"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
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

  /* 
  !FH0
  0. Refactor all the things
  1. All the "setState" should be inside a function
  2. Put all the logic of the dropdown into a separate file
  
  */

  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const inputRef = useRef(null)

  const [diagnosisSearchedByUser, setDiagnosisSearchedByUser] = useState("")
  const [diagnosisCategory, setDiagnosisCategory] =
    useState<DiagnosisCategory_Type>("")

  const [haveAtLeastOneMatchState, setHaveAtLeastOneMatchState] =
    useState(false)
  const [userClickOnSuggestion, setUserClickOnSuggestion] =
    useState<boolean>(false)

  const [userPressEnter, setUserPressEnter] = useState<boolean>(false)

  const handleIsFocus = (toUpdate: boolean) => {
    setIsFocus(toUpdate)
  }

  const handleCloseDropdown = () => {
    if (!isHovered) {
      handleIsFocus(false)
    }
  }

  const handleIsHovered = (toUpdate: boolean) => {
    setIsHovered(toUpdate)
  }

  const handleHaveAtLeastOneMatchState = (updateTo: boolean) => {
    setHaveAtLeastOneMatchState(updateTo)
  }

  const handleUserPressEnter = (
    toUpdate: boolean,
    event: KeyboardEvent<HTMLInputElement> | null = null
  ) => {
    if (event && event?.code === "Enter" && isFocus) {
      setUserPressEnter(toUpdate)
    }

    if (toUpdate === false) {
      setUserPressEnter(toUpdate)
    }
  }

  const handleUserClickOnSuggestion = (updateTo: boolean) => {
    setUserClickOnSuggestion(updateTo)
  }

  const handleSetDiagnosis = (e) => {
    handleUserPressEnter(false)
    handleUserClickOnSuggestion(false)
    setDiagnosisSearchedByUser(e.target.value)
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

    const haveAtLeastOneMatchDiagnosis = finalObj.diagnosis.length > 0
    const haveAtLeastOneMatchSymptoms = finalObj.symptoms.length > 0

    if (haveAtLeastOneMatchDiagnosis) {
      setDiagnosisCategory((prevState: any) => ({
        ...prevState,
        diagnosis: [finalObj.diagnosis],
      }))
      handleHaveAtLeastOneMatchState(true)
    }
    if (haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory((prevState: any) => ({
        ...prevState,
        symptoms: [finalObj.symptoms],
      }))
      handleHaveAtLeastOneMatchState(true)
    }
    if (haveAtLeastOneMatchDiagnosis && !haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory(() => ({
        diagnosis: [finalObj.diagnosis],
        symptoms: [],
      }))
      handleHaveAtLeastOneMatchState(true)
    }
    if (!haveAtLeastOneMatchDiagnosis && haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory(() => ({
        diagnosis: [],
        symptoms: [finalObj.symptoms],
      }))
      handleHaveAtLeastOneMatchState(true)
    }
    if (!haveAtLeastOneMatchDiagnosis && !haveAtLeastOneMatchSymptoms) {
      setDiagnosisCategory({})
      handleHaveAtLeastOneMatchState(false)

      setDiagnosisChoosed({})
      setInputTypesByUser("")
    }
  }

  const handleMoveToTypedFlow = () => {
    if (diagnosisSearchedByUser !== "" && haveAtLeastOneMatchState) {
      setDiagnosisChoosed(diagnosisCategory)
      setInputTypesByUser(diagnosisSearchedByUser)

      if (userClickOnSuggestion || userPressEnter) {
        pushToTypedFlow()
      }
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleIsFocus(false)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  useEffect(() => {
    handleMoveToTypedFlow()
  }, [
    haveAtLeastOneMatchState,
    userClickOnSuggestion,
    diagnosisCategory,
    diagnosisSearchedByUser,
    userPressEnter,
  ])

  useEffect(() => {
    /* Reset the state when the user enter to this webpage */
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
              onFocus={() => {
                handleIsFocus(true)
              }}
              onBlur={() => {
                handleCloseDropdown()
                handleUserPressEnter(false)
              }}
              onChange={(e) => {
                handleSetDiagnosis(e)
                handleWhichMatch(e)
              }}
              onKeyDown={(e) => handleUserPressEnter(true, e)}
              value={diagnosisSearchedByUser}
              ref={inputRef}
            />
            <ORG_D_SearchComponent_LabelInput_Dropdown
              isFocus={isFocus}
              handleIsHovered={handleIsHovered}
              diagnosisSearchedByUser={diagnosisSearchedByUser}
              setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
              setDiagnosisCategory={setDiagnosisCategory}
              handleHaveAtLeastOneMatchState={handleHaveAtLeastOneMatchState}
              suggestionKeywords={suggestionKeywords}
              inputRefFocus={inputRef}
              handleUserClickOnSuggestion={handleUserClickOnSuggestion}
            />
          </>
        )}
      </div>
    </ORG_D_SearchComponent_LabelInputWrapper>
  )
}
