import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper"

export const STDetailMobile_StickyNavbar = ({ highlight }) => {
  return (
    <STDetailMobile_StickyNavbarWrapper highlight={highlight}>
      <ul>
        <li className={highlight === "about" ? "highlight" : ""}>
          <Caption>
            <LinkNoStyle href="#About">About</LinkNoStyle>
          </Caption>
        </li>
        <li className={highlight === "details" ? "highlight" : ""}>
          <Caption>
            <LinkNoStyle href="#Details">Details</LinkNoStyle>
          </Caption>
        </li>
        <li className={highlight === "contact" ? "highlight" : ""}>
          <Caption>
            <LinkNoStyle href="#Contact">Contact</LinkNoStyle>
          </Caption>
        </li>
        <li className={highlight === "reviews" ? "highlight" : ""}>
          <Caption>
            <LinkNoStyle href="#Reviews">Reviews</LinkNoStyle>
          </Caption>
        </li>
      </ul>
    </STDetailMobile_StickyNavbarWrapper>
  )
}
