import { FooterWrapper } from "./styles/FooterWrapper"
import { FooterMainContent } from "./FooterMainContent.js"
import { FooterSignupLoginButtons } from "./FooterSignupLoginButtons.js"
import { FooterSocialmedia } from "./FooterSocialmedia.js"
import { Caption } from "../ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "../ui/heading_body_text/HeaderFonts"

const Footer = () => {
  const FooterMainContent_SandP_dataToShow = [{ title: "Resource Directory", route: "/ORG" }]
  const FooterMainContent_LandG_dataToShow = [
    { title: "I/DD Community Classes", route: "/404" },
    { title: "Family Learning Center", route: "/404" }
  ]
  const FooterMainContent_SLG_dataToShow = [{ title: "Create Plan", route: "/404" }]
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

  return (
    <FooterWrapper>
      <H2
        bold
        logo>
        Inclusive
      </H2>
      <div>
        <div>
          <FooterMainContent
            title="Services & providers"
            dataToShow={FooterMainContent_SandP_dataToShow}
          />
          <FooterMainContent
            title="Learn & Grow"
            dataToShow={FooterMainContent_LandG_dataToShow}
          />
          <FooterMainContent
            title="Set Life Goals"
            dataToShow={FooterMainContent_SLG_dataToShow}
          />
          <FooterMainContent
            title="Getting Help"
            dataToShow={FooterMainContent_GH_dataToShow}
            dataLink={true}
          />
        </div>
        <div>
          <FooterMainContent
            title="Inclusive HCBS"
            dataToShow={FooterMainContent_IHCBS_dataToShow}
          />
          <FooterMainContent
            title="Safety"
            dataToShow={FooterMainContent_SAFETY_dataToShow}
          />
          <FooterMainContent title="BLOG" />
        </div>
      </div>
      <FooterSignupLoginButtons />
      <FooterSocialmedia />
      <Caption>A public benefit company helping parents find the best services for their children.</Caption>
    </FooterWrapper>
  )
}

export default Footer
