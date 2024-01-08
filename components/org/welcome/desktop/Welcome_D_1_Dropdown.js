import { suggestionKeywords } from "@/utils/org/typed-flow/suggestionKeywords"
import { useEffect, useRef, useState } from "react"
import { Welcome_D_1_DropdownOptions } from "./Welcome_D_1_DropdownOptions.js"
import { Welcome_D_1_DropdownWrapper } from "./styles/Welcome_D_1_DropdownWrapper.js"

export const Welcome_D_1_Dropdown = ({
  diagnosisSearchedByUser,
  setDiagnosisSearchedByUser,
  setInputTypesByUser,
  setDiagnosisCategory,
  setHaveAtLeastOneMatchState,
  handleNothingSelected,
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const inputRef = useRef()

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

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 27) {
        setIsFocus((prevState) => !prevState)
      }
    }

    window.addEventListener("keydown", handleKeyPress)

    return () => {
      window.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  return (
    <Welcome_D_1_DropdownWrapper>
      <input
        placeholder="Ex: Mild DD, Autism"
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
      />

      <Welcome_D_1_DropdownOptions
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
    </Welcome_D_1_DropdownWrapper>
  )
}
