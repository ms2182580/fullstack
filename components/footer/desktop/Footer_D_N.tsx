import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router.js"
import {
  ChatAILogo,
  Facebook3Svg,
  Footer_D_AccessibilityModeSvg,
  Instagram2Svg,
  LanguageIconSvg,
  LinkedinSvg,
  Twitter2Svg,
} from "../../../assets/icons/index.js"
import {
  Caption,
  P,
} from "../../../components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H4 } from "../../ui/heading_body_text/HeaderFonts"
import { Footer_D_NWrapper } from "./styles/Footer_D_NWrapper"

export const Footer_D_N = () => {
  let router = useRouter()

  let moveToORG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      router.push(`/${ALL_ROUTES.ORG}`)
    }
  }

  let moveToTop = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      router.push("/")
    }
  }

  return (
    <Footer_D_NWrapper>
      <div>
        <div>
          <H4>INCLUSIVE</H4>
          <p tabIndex={0}>About us</p>
          <p tabIndex={0}>Contact us</p>
          <p>Submit Feedback </p>
        </div>

        <div>
          <H4>Resource directory</H4>
          <p onClick={moveToORG} onKeyDown={moveToORG} tabIndex={0}>
            Find resources
          </p>
          <p>Write a review</p>
          <p>Add a listing </p>
          <p>Get listed </p>
        </div>

        <div>
          <H4>Ask a question</H4>
          <p>Get answers</p>
          <p>Help families with I/DDs</p>
          <p>Explore dashboard </p>
        </div>

        <div>
          <H4>Create a plan</H4>
          <p>Learn to get Services</p>
          <span>Log in</span>
        </div>
      </div>

      <div>
        <button tabIndex={0}>
          {/* 
          !FH!
          Bug here: the avg only render in landing page and 2° page of ORG. Doesn't render on 1° page of ORG or 3° page
          */}
          <Footer_D_AccessibilityModeSvg /> <P semibold>Accessibility Mode</P>
        </button>
        {/* <button tabIndex={0}>
          <P semibold>Try Premium</P>
        </button> */}
      </div>

      {/* <div /> */}

      <div>
        <div onClick={moveToTop} onKeyDown={moveToTop} tabIndex={0}>
          <H2>Inclusive</H2>
          <ChatAILogo />
        </div>
        <Caption>
          The public benefit company connecting parents with the I/DD community.
        </Caption>
      </div>

      <div>
        <div>
          <Caption>© 2023 The INCLUSIVE Group, All rights reserved.</Caption>
          <span>
            <div tabIndex={0}>
              <LanguageIconSvg /> <Caption>English (US)</Caption>
            </div>
            <div>
              <Twitter2Svg tabIndex={0} /> <Facebook3Svg tabIndex={0} />{" "}
              <Instagram2Svg tabIndex={0} /> <LinkedinSvg tabIndex={0} />{" "}
            </div>
          </span>
        </div>
      </div>
    </Footer_D_NWrapper>
  )
}
