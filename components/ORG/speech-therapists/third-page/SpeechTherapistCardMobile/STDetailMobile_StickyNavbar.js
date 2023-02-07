import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper"

export const STDetailMobile_StickyNavbar = ({sticky}) => {

  return (
    <STDetailMobile_StickyNavbarWrapper sticky={sticky}>
      <ul>
        <li>
          <Caption>
            <LinkNoStyle href="#">About</LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle href="#">Details</LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle href="#">Contact</LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle href="#">Reviews</LinkNoStyle>
          </Caption>
        </li>
      </ul>
    </STDetailMobile_StickyNavbarWrapper>
  )
}

/* 

!FH4
Make this keep it working:
✅°) Make the border bottom be weider than the width of the element
👀°) Keep with next sections
°) Make the navbar work as "activeSection", making it with some style when the user is in the section
*/
