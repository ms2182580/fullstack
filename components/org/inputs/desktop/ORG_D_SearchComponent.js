import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SearchSVG } from "../../../../assets/icons"
import { ORG_FILTERS_DATA_D } from "../../../../utils/ORG_FiltersCategories"
import { useShouldTab } from "../../../../utils/ORG_shouldTab"
import { ButtonSmall } from "../../../ui/buttons/general"
import { ORG_D_InputInsurance } from "./ORG_D_InputInsurance"
import { ORG_D_InputKeyword } from "./ORG_D_InputKeyword"
import { ORG_D_InputLocation } from "./ORG_D_InputLocation"
import { ORG_D_SearchComponentWrapper } from "./styles/ORG_D_SearchComponentWrapper"

export const ORG_D_SearchComponent = () => {
  const router = useRouter()
  // console.log("router:", router)
  const shouldTab = useShouldTab()

  const [typedInputKeyword, setTypedInputKeyword] = useState(null)
  const [selectValidKeyword, setSelectValidKeyword] = useState({
    showMessage: false,
    message: "",
  })

  const [typedInputLocation, setTypedInputLocation] = useState(null)
  const [typedInputInsurance, setTypedInputInsurance] = useState(null)

  const handleMoveToTypedFlow = () => {
    if (typedInputKeyword === "") {
      // console.log("Input is empty!")
    }

    if (typedInputKeyword !== "") {
      let matchSomeDiagnosis = ORG_FILTERS_DATA_D.diagnosis.find(
        (xDiagnosis) =>
          xDiagnosis.toLowerCase() === typedInputKeyword.toLowerCase()
      )

      if (matchSomeDiagnosis) {
        // console.log("Found a match, procede to move the view")
      }

      if (!matchSomeDiagnosis) {
        setSelectValidKeyword((prevState) => ({
          ...prevState,
          showMessage: true,
          message: "Select a valid Input Keyboard",
        }))
      }
    }

    // push(
    //   {
    //     pathname: `${pathname}/${folder}/${subFolder}`,
    //     query: { mainPosition: positionInArray, title, possitionSubArr },
    //   },
    //   `${pathname}/${folder}/${subFolder}`,
    // )
  }

  // console.log("typedInputKeyword:", typedInputKeyword)

  /* 
  
  !FH
  Create all the Typed Flow
  */

  useEffect(() => {
    if (selectValidKeyword) {
      const timer = setTimeout(() => {
        setSelectValidKeyword((prevState) => ({
          ...prevState,
          showMessage: false,
          message: "",
        }))
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [selectValidKeyword])

  /* 
  !FH0 
  New layout here
  
  source: https://www.figma.com/file/mo5tAwQH5Yxt4ajX62Pcl8/AAPD-Cohort-6-Hi-fi-Designs?type=design&node-id=1654-80744&mode=dev
  */

  return (
    <>
      <ORG_D_SearchComponentWrapper>
        <ORG_D_InputKeyword setTypedInputKeyword={setTypedInputKeyword} />
        <ORG_D_InputLocation />
        <ORG_D_InputInsurance />
        <span onClick={handleMoveToTypedFlow}>
          <ButtonSmall>
            <SearchSVG />
          </ButtonSmall>
        </span>
        {/* {toWhere === "SpeechTherapists" ? (
          <LinkNoStyle href={`${router.pathname}/${toWhere}`}>
            <ButtonSmall>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        ) : toWhere === "no where" ? (
          <LinkNoStyle href="#">
            <ButtonSmall>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        ) : (
          <LinkNoStyle
            href={`${router.pathname}`}
            tabIndex={shouldTab}>
            <ButtonSmall preventFocus={shouldTab}>
              <SearchSVG />
            </ButtonSmall>
          </LinkNoStyle>
        )} */}
      </ORG_D_SearchComponentWrapper>

      {/* {selectValidKeyword.showMessage && (
        <>
          <ORG_D_ValidInputKeyword message={selectValidKeyword.message} />
        </>
      )} */}
    </>
  )
}
