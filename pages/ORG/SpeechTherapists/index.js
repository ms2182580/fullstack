import { useEffect } from "react"
import { BackArrow } from "../../../assets/Icons"
import ORG_LANDING_CC from "../../../assets/Icons/ORG_Landing_CC.png"
import ORG_LANDING_SSA from "../../../assets/Icons/ORG_Landing_SSA.png"
import ORG_LANDING_TP from "../../../assets/Icons/ORG_Landing_TP.png"
import Customdropdown from "../../../components/ORG/dropdown/CustomDropdown"
import { OptionsWrapper } from "../../../components/ORG/dropdown/styles/Customdropdown"
import CustomInput from "../../../components/ORG/inputs/CustomInput"
import LoadingSpeechTherapists from "../../../components/ORG/speech-therapists/LoadingSpeechTherapists"
import STFiltersTherapistsButtons from "../../../components/ORG/speech-therapists/STFiltersTherapistsButtons"
import Breadcrumbs from "../../../components/ui/breadcrumbs/Breadcrumbs"
import { Caption, P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile"
import { useORG_InputCtx } from "../../../context/ORG_Input"
import { useWidthWindow } from "../../../utils/useWidthWindow"
import ORGSpeechTherapistsSecondPageWrapper from "./styles/ORGSpeechTherapistsSecondPageWrapper"
import SpeechTherapistWraper from "./styles/SpeechTherapistWrapper"

const ORGSpeechTherapists = () => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const { keywordsContext, citiesContext, setKeywordsContext, setCitiesContext } = useORG_InputCtx()

  const { widthWindow } = useWidthWindow()

  const suggestionDropdownTP = [
    "Speech Therapist",
    "Behavioral Therapist",
    "Physical Therapist",
    "Occupational Therapist"
  ]
  const suggestionDropdownSSA = []
  const suggestionDropdownCC = []

  const { userFetched } = useORG_Ctx_FetchNoFilters()

  useEffect(() => {
    if (userFetched !== undefined && mustShowFiltersMobile === false) {
      const element = document.getElementById("topOfSTL")
      if (element !== null) {
        element.scrollIntoView()
      }
    }
  }, [mustShowFiltersMobile])

  if (userFetched === undefined) {
    return <LoadingSpeechTherapists />
  }

  return (
    <ORGSpeechTherapistsSecondPageWrapper>
      <SpeechTherapistWraper>
        {widthWindow > 768 ? (
          <div>
            {" "}
            <span>
              <LinkNoStyle href="/ORG">
                <BackArrow />
                <P semibold>Back</P>
              </LinkNoStyle>
            </span>{" "}
          </div>
        ) : widthWindow <= 768 && mustShowFiltersMobile === false ? (
          <div id="topOfSTL">
            {" "}
            <span>
              <LinkNoStyle href="/ORG">
                <BackArrow />
                <Caption bolder>Back to search</Caption>
              </LinkNoStyle>
            </span>{" "}
          </div>
        ) : null}

        {widthWindow > 768 ? (
          <>
            <Breadcrumbs
              whichDisplay={[
                ["Resource Directory", "ORG"],
                ["Speech Therapist", ""]
              ]}
            />
            <CustomInput
              setKeywordsContext={setKeywordsContext}
              setCitiesContext={setCitiesContext}
              keywordValueContext={keywordsContext}
              citiesValueContext={citiesContext}
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
          </>
        ) : null}
      </SpeechTherapistWraper>

      <STFiltersTherapistsButtons widthWindow={widthWindow} />
    </ORGSpeechTherapistsSecondPageWrapper>
  )
}

export default ORGSpeechTherapists
