import { useEffect, useRef, useState } from "react"
import { ButtonSmall } from "../../components/ui/buttons/general"
import { P } from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_InputCtx } from "../../context/ORG_Input"
// import DropdownSuggestionsInput from "../../components/ORG/DropdownSuggestionsInput"
import ORGDropdown from "./ORGDropdown"
import SearchComponentWrapper, {
  OptionsWrapper,
  SuggestionsKeywordWrapper
} from "./styles/SearchComponentWrapper"
import { CurrentLocationSvg } from "../../assets/Icons/index.js"
import SearchIcon from "../../assets/Icons/SearchIcon.png"
import ORG_Landing_CC from "../../assets/Icons/ORG_Landing_CC.png"
import ORG_Landing_SSA from "../../assets/Icons/ORG_Landing_SSA.png"
import ORG_Landing_TP from "../../assets/Icons/ORG_Landing_TP.png"
import Image from "next/image"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useRouter } from "next/router"
// import DropdownSuggestionsInputComponent from "../../components/ORG/DropdownSuggestionsInputComponent"

const SearchComponent = () => {
  // const { setKeywordsContext, setCitiesContext  } = useORG_InputCtx() 
  // const router = useRouter() 
  
  // useEffect(() => { 
  //   setKeywordsContext("")
  //   setCitiesContext("")
  // },[])


  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]
  const suggestionDropdownSSA = []
  const suggestionDropdownCC = []

  return (
    <>
      
      {/* <DropdownSuggestionsInputComponent setKeywordsContext={setKeywordsContext} setCitiesContext={setCitiesContext} router={router}/> */}
      

      <OptionsWrapper landingHere="true" > {/* // local */}
        <ORGDropdown
          icon={ORG_Landing_TP}
          title="Therapeutic Providers"
          suggestions={suggestionDropdownTP}
          landingHere={true}
          
        />
        <ORGDropdown
          icon={ORG_Landing_SSA}
          title="Social Service Agencies"
          suggestions={suggestionDropdownSSA}
          landingHere={true}
        />
        <ORGDropdown
          icon={ORG_Landing_CC}
          title="Community Classes"
          suggestions={suggestionDropdownCC}
          landingHere={true}
        />
      </OptionsWrapper>
    </>
  )
}

export default SearchComponent
