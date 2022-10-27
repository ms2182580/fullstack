import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Customdropdown from "../../../components/ORG/dropdown/CustomDropdown"
import { OptionsWrapper } from "../../../components/ORG/dropdown/styles/Customdropdown"
import CustomInput from "../../../components/ORG/inputs/CustomInput"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import SpeechTherapistWraper from "./styles/SpeechTherapistWrapper"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import { BackArrow } from "../../../assets/Icons"
import Breadcrumbs from "../../../components/ui/breadcrumbs/Breadcrumbs"
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles"
import SpeechTherapistList from "./styles/SpeechTherapistList"

const ORGSpeechTherapists = () => {
  const {
    keywordsContext,
    citiesContext,
    setKeywordsContext,
    setCitiesContext
  } = useORG_InputCtx()
  const router = useRouter()

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
      <SpeechTherapistWraper>
        <div>
          {" "}
          <span>
            <LinkNoStyle href="/ORG">
              <BackArrow /> Back
            </LinkNoStyle>
          </span>{" "}
        </div>

        <Breadcrumbs
          whichDisplay={[
            ["Resource Directory", "/ORG"],
            ["Speech Therapist", ""]
          ]}
        />

        <CustomInput
          setKeywordsContext={setKeywordsContext}
          setCitiesContext={setCitiesContext}
          keywordValueContext={keywordsContext}
          citiesValueContext={citiesContext}
          actualRoute={router}
          toWhere=""
        />

        <OptionsWrapper>
          <Customdropdown
            icon={ORG_LANDING_TP}
            title="Speech Therapist"
            suggestions={suggestionDropdownTP}
          />
          <Customdropdown
            icon={ORG_LANDING_SSA}
            title="Social Service Agencies"
            suggestions={suggestionDropdownSSA}
          />
          <Customdropdown
            icon={ORG_LANDING_CC}
            title="Community Classes"
            suggestions={suggestionDropdownCC}
          />
        </OptionsWrapper>

        {/* <label>Keyword here</label>
      <input value={keywordValue} onChange={(e)=> setKeywordValue(e.target.value)}/>
      
      <label>Cities here</label>
      <input value={citiesValue} onChange={(e)=> setCitiesValue(e.target.value)} /> */}
      </SpeechTherapistWraper>
      <SpeechTherapistList>
        <h2>Speech therapist list</h2>
        <div>Left side filter</div>
        <div>Right side summary of speech therapist</div>
        <div>Buttons here</div>
      </SpeechTherapistList>
    </>
  )
}

export default ORGSpeechTherapists
