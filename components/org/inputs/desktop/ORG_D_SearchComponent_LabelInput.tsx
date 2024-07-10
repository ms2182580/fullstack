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

  /* 
  !FH0
  1. Put all the logic of the dropdown into a separate file
  2. All the "setState" should be inside a function
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
  const handleIsHovered = (toUpdate: boolean) => {
    setIsHovered(toUpdate)
  }

  const handleHaveAtLeastOneMatchState = (updateTo: boolean) => {
    setHaveAtLeastOneMatchState(updateTo)
  }

  // const handleShowDropdown = () => {
  //   setIsFocus(true)
  // }

  const handleCloseDropdown = () => {
    if (!isHovered) {
      handleIsFocus(false)
    }
  }

  const handleUserPressEnter = (toUpdate: boolean) => {
    setUserPressEnter(toUpdate)
  }

  const handleUserPressEnter_JSX = (event) => {
    if (event.code === "Enter" && isFocus) {
      handleUserPressEnter(true)
    }
  }

  const handleUserClickOnSuggestion = (updateTo: boolean) => {
    setUserClickOnSuggestion(updateTo)
  }

  const handleSetDiagnosis = (e) => {
    handleUserPressEnter(false)
    handleUserClickOnSuggestion(false)
    // setDiagnosisChoosed({})
    // setInputTypesByUser("")
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
    console.log(
      "haveAtLeastOneMatchState:",
      haveAtLeastOneMatchState,
      diagnosisCategory
    )

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
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleIsFocus(false)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    // window.addEventListener("keydown", handleMoveToTypedFlow)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      // window.removeEventListener("keydown", handleMoveToTypedFlow)
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
                handleUserPressEnter(false)
              }}
              onChange={(e) => {
                handleSetDiagnosis(e)
                handleWhichMatch(e)
              }}
              onKeyDown={handleUserPressEnter_JSX}
              value={diagnosisSearchedByUser}
              ref={inputRef}
            />
            <ORG_D_SearchComponent_LabelInput_Dropdown
              isFocus={isFocus}
              handleIsHovered={handleIsHovered}
              diagnosisSearchedByUser={diagnosisSearchedByUser}
              setDiagnosisSearchedByUser={setDiagnosisSearchedByUser}
              // setInputTypesByUser={setInputTypesByUser}
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
