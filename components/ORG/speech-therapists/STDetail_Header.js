import { useEffect, useState } from "react"
import { BackArrow } from "../../../assets/Icons"
import SpeechTherapistWraper from "../../../pages/ORG/SpeechTherapists/styles/SpeechTherapistWrapper"
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import Customdropdown from "../dropdown/CustomDropdown"
import { OptionsWrapper } from "../dropdown/styles/Customdropdown"
import CustomInput from "../inputs/CustomInput"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_LANDING_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_LANDING_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_LANDING_TP.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"

export const STDetail_Header = ({STData}) => {
  const {
    keywordsContext,
    citiesContext,
    setKeywordsContext,
    setCitiesContext
  } = useORG_InputCtx()
  
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
    <SpeechTherapistWraper inDetail={true}>
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
            ["Resource Directory", "ORG"],
            ["Speech Therapist", "ORG/SpeechTherapists"],
            [`${STData.data[0].name.first} ${STData.data[0].name.last}`, ""]
          ]}
        />

        <CustomInput
          setKeywordsContext={setKeywordsContext}
          setCitiesContext={setCitiesContext}
          keywordValueContext={keywordsContext}
          citiesValueContext={citiesContext}
          toWhere={"no where"}
        />

        <OptionsWrapper>
          <Customdropdown
            icon={ORG_LANDING_TP}
            title="Therapeutic Providers"
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
      </SpeechTherapistWraper>
    </>
  )
}
