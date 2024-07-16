import { KeyboardEvent, useEffect, useRef, useState } from "react"

type DiagnosisCategoryObj_Type = {
  diagnosis: string[]
  symptoms: string[]
}

type DiagnosisCategory_Type = DiagnosisCategoryObj_Type | {} | boolean | ""

export const useTypedFlowLogicSelection = ({
  suggestionKeywords,
  setDiagnosisChoosed,
  setInputTypesByUser,
  pushToTypedFlow,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

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

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleIsFocus(false)
      }
    }

    const closeDropdownClick = (e) => {
      // console.log(
      //   "isHovered, isFocus:",
      //   isHovered,
      //   isFocus,
      //   inputRef?.current,
      //   document.activeElement,
      //   inputRef?.current === document.activeElement
      // )
      if (
        // !isHovered &&
        // !isFocus

        // inputRef.current &&
        // !inputRef.current?.contains(e.target)
        /*
        ||
        inputRef?.current === null ||
        inputRef?.current !== document.activeElement
        */
        false
      ) {
        // console.log("enter here✅")
        // handleIsFocus(false)
      }
      /*
      else {
        handleIsFocus(true)
      }
      */
    }

    window.addEventListener("keydown", handleKeyPress)
    document.addEventListener("click", closeDropdownClick)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
      document.removeEventListener("click", closeDropdownClick)
    }
  }, [])

  /*
  useEffect(() => {
    console.log("isHovered, isFocus:", isHovered, isFocus)

    if ((isFocus || isHovered) && inputRef?.current !== null) {
      inputRef?.current.focus()
    }
  }, [isHovered, isFocus])
  */

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

  return {
    handleIsFocus,
    handleCloseDropdown,
    handleUserPressEnter,
    handleSetDiagnosis,
    handleWhichMatch,
    diagnosisSearchedByUser,
    inputRef,
    isFocus,
    isHovered,
    handleIsHovered,
    setDiagnosisSearchedByUser,
    setDiagnosisCategory,
    handleHaveAtLeastOneMatchState,
    handleUserClickOnSuggestion,
  }
}
