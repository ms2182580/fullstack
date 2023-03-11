import { BackArrow } from "../../../assets/Icons"
import ORG_Icon_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_Icon_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_Icon_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import SpeechTherapistWraper from "../../../pages/ORG/SpeechTherapists/styles/SpeechTherapistWrapper"
import Breadcrumbs from "../../ui/breadcrumbs/Breadcrumbs"
import { P } from "../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../ui/hyperlink/HyperlinkNoStyles"
import Customdropdown from "../dropdown/CustomDropdown"
import { OptionsWrapper } from "../dropdown/styles/Customdropdown"
import SearchComponent from "../inputs/SearchComponent"

export const STDetail_Header = ({ STData }) => {
  const { keywordsContext, citiesContext, setKeywordsContext, setCitiesContext } = useORG_InputCtx()

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
            <LinkNoStyle href="/ORG/SpeechTherapists">
              <BackArrow /> <P semibold>Back</P>
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

        <SearchComponent
          setKeywordsContext={setKeywordsContext}
          setCitiesContext={setCitiesContext}
          keywordValueContext={keywordsContext}
          citiesValueContext={citiesContext}
          toWhere={"no where"}
        />

        <OptionsWrapper>
          <Customdropdown
            icon={ORG_Icon_TP}
            title="Therapeutic Providers"
            suggestions={suggestionDropdownTP}
          />
          <Customdropdown
            icon={ORG_Icon_SSA}
            title="Social Service Agencies"
            suggestions={suggestionDropdownSSA}
          />
          <Customdropdown
            icon={ORG_Icon_CC}
            title="Community Classes"
            suggestions={suggestionDropdownCC}
          />
        </OptionsWrapper>
      </SpeechTherapistWraper>
    </>
  )
}
