import { BackArrow } from "../../../../../assets/Icons"
import { useORG_InputCtx } from "../../../../../context/ORG_Input"
import SpeechTherapistWrapper from "../../../../../pages/ORG/SpeechTherapists/styles/SpeechTherapistWrapper"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"



export const STDetail_Header = ({ STData }) => {
  const { keywordsContext, citiesContext, setKeywordsContext, setCitiesContext } = useORG_InputCtx()

  return (
    <SpeechTherapistWrapper isDetail={true}>
      <span>
        <LinkNoStyle href="/ORG/SpeechTherapists">
          <BackArrow /> <P semibold>Back</P>
        </LinkNoStyle>
      </span>{" "}

      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          ["Speech Therapist", "ORG/SpeechTherapists"],
          [`${STData.data[0].name.first} ${STData.data[0].name.last}`, ""]
        ]}
      />

      <STSearchDesktop_SearchComponentSTSearchDesktop_SearchComponent STSearchDesktop_SearchComponent
        setKeywordsContext={setKeywordsContext}
        setCitiesContext={setCitiesContext}
        keywordValueContext={keywordsContext}
        citiesValueContext={citiesContext}
        toWhere={"no where"}
      />

      <ul>
        <li><H3><a href="#">About</a></H3></li>
        <li><H3><a href="#">Location</a></H3></li>
        <li><H3><a href="#Appointments">Appointments</a></H3></li>
        <li><H3><a href="#Reviews">Reviews</a></H3></li>
        <li><H3><a href="#FAQs">FAQs</a></H3></li>
      </ul>

      {/* <OptionsWrapper>
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
      </OptionsWrapper> */}
    </SpeechTherapistWrapper>
  )
}
