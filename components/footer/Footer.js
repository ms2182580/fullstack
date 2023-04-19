import { useRouter } from "next/router"
import { useORG_CtxShowFiltersDesktop } from "../../context/ORG_CtxShowFiltersDesktop_Provider"
import { Caption } from "../ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "../ui/heading_body_text/HeaderFonts"
import { FooterMainContent } from "./FooterMainContent.js"
import { FooterSignupLoginButtons } from "./FooterSignupLoginButtons.js"
import { FooterSocialmedia } from "./FooterSocialmedia.js"
import { FooterWrapper } from "./styles/FooterWrapper"

export const Footer = () => {
  const { ORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  const { pathname } = useRouter()

  const FooterMainContent_SandP_dataToShow = [{ title: "Resource Directory", route: "/ORG" }]

  const FooterMainContent_LandG_dataToShow = [
    { title: "I/DD Community Classes", route: "/404" },
    { title: "Family Learning Center", route: "/404" }
  ]
  const FooterMainContent_GH_dataToShow = [
    { title: "Path to Services", route: "/404" },
    { title: "Help Center", route: "/404" },
    { title: "Not from NYC?", route: "/404" }
  ]
  const FooterMainContent_IHCBS_dataToShow = [
    { title: "Community Classes", route: "/ORG" },
    { title: "DLS", route: "/404" }
  ]
  const FooterMainContent_SAFETY_dataToShow = [{ title: "Safety In The Community", route: "/404" }]

  // useEffect(() => {
  //   if (ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists") {
  //     function handleKeyDown(event) {
  //       console.log("event.key:", event.key)
  //       if (event.key === "Tab") {
  //         event.preventDefault()
  //         // event.stopPropagation()
  //         console.log("Tab key was pressed")
  //       }
  //     }

  //     // Add the event listener
  //     window.addEventListener("keydown", handleKeyDown)

  //     // Remove the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("keydown", handleKeyDown)
  //     }

  //   }

  // }, [ORGShowFullMapFilter])

  return (
    <FooterWrapper ORGShowFullMapFilter={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists"}>
      <H2
        bold
        logo>
        Inclusive
      </H2>
      <div tabIndex={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" && "-1"}>
        <div>
          <FooterMainContent
            title="Services & providers"
            dataToShow={FooterMainContent_SandP_dataToShow}
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
          <FooterMainContent
            title="Learn & Grow"
            dataToShow={FooterMainContent_LandG_dataToShow}
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
          <FooterMainContent
            title="Getting Help"
            dataToShow={FooterMainContent_GH_dataToShow}
            dataLink={true}
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
        </div>
        <div>
          <FooterMainContent
            title="Inclusive HCBS"
            dataToShow={FooterMainContent_IHCBS_dataToShow}
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
          <FooterMainContent
            title="Safety"
            dataToShow={FooterMainContent_SAFETY_dataToShow}
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
          <FooterMainContent
            title="BLOG"
            shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0}
          />
        </div>
      </div>
      <FooterSignupLoginButtons shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0} />
      <FooterSocialmedia shouldTab={ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" ? -1 : 0} />
      <Caption>A public benefit company helping parents find the best services for their children.</Caption>
      {ORGShowFullMapFilter && pathname === "/ORG/SpeechTherapists" && <div className="InFront"></div>}
    </FooterWrapper>
  )
}


/* 
!FH
Fix double focus with tab key
*/