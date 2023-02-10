import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../../../ui/hyperlink/HyperlinkNoStyles"
import { STDetailMobile_StickyNavbarWrapper } from "./styles/STDetailMobile_StickyNavbarWrapper"

export const STDetailMobile_StickyNavbar = ({ sticky }) => {
  // const divRef = useRef(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // console.log(divRef.current.scrollTop)
  //     const viewportHeight = window.innerHeight
  //     // console.log("viewportHeight:", viewportHeight)
  //     // console.log("window.scrollY:", window.scrollY)
  //   }

  //   window.addEventListener("scroll", handleScroll)

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll)
  //   }
  // }, [])

  return (
    <STDetailMobile_StickyNavbarWrapper
      sticky={sticky}
      >
      <ul>
        <li>
          <Caption>
            <LinkNoStyle href="#About">About</LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Details"
              // as={pathname}
            >
              Details
            </LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Contact"
              // as={pathname}
            >
              Contact
            </LinkNoStyle>
          </Caption>
        </li>
        <li>
          <Caption>
            <LinkNoStyle
              href="#Reviews"
              // as={pathname}
            >
              Reviews
            </LinkNoStyle>
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
