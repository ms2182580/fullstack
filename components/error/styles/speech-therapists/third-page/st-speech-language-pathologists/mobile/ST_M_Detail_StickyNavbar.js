import { Caption } from "../../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../../ui/hyperlink/HyperlinkNoStyles"
import { ST_M_Detail_StickyNavbarWrapper } from "./styles/ST_M_Detail_StickyNavbarWrapper"

export const ST_M_Detail_StickyNavbar = ({ highlight }) => {
  return (
    <ST_M_Detail_StickyNavbarWrapper highlight={highlight}>
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
    </ST_M_Detail_StickyNavbarWrapper>
  )
}
