import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper"

export const STDetailMobile_StickyNavbar = ({ highlight }) => {
  return (
    <STDetailMobile_StickyNavbarWrapper highlight={highlight}
    >
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

/* 

!FH0
Make this keep it working:
✅°) Make the border bottom be weider than the width of the element
✅°) Keep with next sections
👀°) Make the navbar work as "activeSection", making it with some style when the user is in the section

°) After that, make the behavior of the sticky bar activate when the user view is on that height: maybe use useIntersection Hook (https://www.freecodecamp.org/news/react-hooks-every-project-should-use/)


*/
