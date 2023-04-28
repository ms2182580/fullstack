import { useRouter } from "next/router"
import { useEffect } from "react"
import { BackArrow } from "../../../assets/Icons"
import { SearchComponent } from "../../../components/ORG/inputs/SearchComponent"
import LoadingSpeechTherapists from "../../../components/ORG/speech-therapists/LoadingSpeechTherapists"
import { MainEntry } from "../../../components/ORG/speech-therapists/second-page/MainEntry"
import { Breadcrumbs } from "../../../components/ui/breadcrumbs/Breadcrumbs"
import { Caption, P } from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../components/ui/hyperlink/HyperlinkNoStyles"
import { useORG_Ctx_FetchNoFilters } from "../../../context/ORG_CtxFetchNoFilters_Provider"
import { useORG_CtxShowFiltersDesktop } from "../../../context/ORG_CtxShowFiltersDesktop_Provider"
import { useORG_Ctx_ShowFiltersMobile } from "../../../context/ORG_Ctx_ShowFiltersMobile"
import { useWidthWindow } from "../../../utils/useWidthWindow"
import { useWidthWindow1024 } from "../../../utils/useWidthWindow1024"
import ORGSpeechTherapistsSecondPageWrapper from "./styles/ORGSpeechTherapistsSecondPageWrapper"
import SpeechTherapistWrapper from "./styles/SpeechTherapistWrapper"

const ORGSpeechTherapists = () => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()

  const { widthWindow } = useWidthWindow()
  const { isMobile } = useWidthWindow1024()

  const { userFetched, shouldFetch, setShouldFetch } = useORG_Ctx_FetchNoFilters()
  // console.log('userFetched:', userFetched)
  // console.log("🚅shouldFetch:", shouldFetch)


  useEffect(() => {
    setShouldFetch(true)
  }, [])

  useEffect(() => {
    if (userFetched !== undefined && mustShowFiltersMobile === false) {
      const element = document.getElementById("topOfSTL")
      if (element !== null) {
        element.scrollIntoView()
      }
    }
  }, [mustShowFiltersMobile])

  if (userFetched === undefined || shouldFetch === false) {
    return <LoadingSpeechTherapists />
  }

  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  return (
    <ORGSpeechTherapistsSecondPageWrapper
      isMobile={isMobile}
      ORGShowFullMapFilter={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists"}>
      {ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" && <div className="InFront"></div>}
      <SpeechTherapistWrapper>
        {isMobile === false ? (
          <>
            <P
              bold
              dark_gray>
              Search for Providers
            </P>
          </>
        ) : isMobile && mustShowFiltersMobile === false ? (
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

        {isMobile === false ? (
          <>
            <Breadcrumbs
              whichDisplay={[
                ["Resource Directory", "ORG"],
                ["Speech Therapist", ""]
              ]}
            />
            <SearchComponent />
          </>
        ) : null}
      </SpeechTherapistWrapper>

      <MainEntry widthWindow={widthWindow} />
    </ORGSpeechTherapistsSecondPageWrapper>
  )
}

export default ORGSpeechTherapists
