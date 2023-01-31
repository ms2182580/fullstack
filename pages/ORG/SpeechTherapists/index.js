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
import STFiltersTherapistsButtons from "../../../components/ORG/speech-therapists/STFiltersTherapistsButtons"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import LoadingSpeechTherapists from "../../../components/ORG/speech-therapists/LoadingSpeechTherapists"
import { useEffect, useState } from "react"
import { P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { useRouter } from "next/router"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile"

const ORGSpeechTherapists = () => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()
  console.log('mustShowFiltersMobile:', mustShowFiltersMobile)

  const { keywordsContext, citiesContext, setKeywordsContext, setCitiesContext } = useORG_InputCtx()

  const route = useRouter()
  const widthRoute = route.query.data

  const [widthWindow, setWidthWindow] = useState(widthRoute)

  const [imInClient, setImInClient] = useState(() => {
    if (typeof window === "object") {
      return true
    }
  })
  useEffect(() => {
    window.onresize = () => {
      setWidthWindow(window.innerWidth)
    }

    if (imInClient) {
      setWidthWindow(window.innerWidth)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "object") {
      setImInClient(true)
    } else {
      setImInClient(false)
    }
  }, [widthWindow])

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
      element.scrollIntoView()
    }
  }, [mustShowFiltersMobile])

  if (userFetched === undefined) {
    return <LoadingSpeechTherapists />
  }

  return (
    <>
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
                <P semibold>Back to search</P>
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
    </>
  )
}

export default ORGSpeechTherapists
