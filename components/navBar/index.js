import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { H2 } from "../../components/ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import { useORG_CtxShowFiltersDesktop } from "../../context/ORG_CtxShowFiltersDesktop_Provider"
import SignComponent from "./SignComponent.js"
import { Logo, NavBarStyled, NavigationLinksWrapper } from "./styles/NavBar"

const NavBar = () => {
  const route = useRouter()
  // console.log('route:', route)

  const { ORGShowFullMapFilter, setORGShowFullMapFilter } = useORG_CtxShowFiltersDesktop()
  
//   useEffect(() => {
//     const handleRouteChange = (url) => {
//       // console.log(`🔰Path changing to ${url}`);
//       console.log('ORGShowFullMapFilter:', ORGShowFullMapFilter)
//       console.log('url:', url)
      
//       if (url === "/ORG/SpeechTherapists") {
//         // console.log("in Second Page!")
//         // setORGShowFullMapFilter(false)
//       }
//     };

//     route.events.on('routeChangeStart', handleRouteChange)

//     // If the component is unmounted, unsubscribe
//     // from the event with the `off` method:
//     return () => {
//       route.events.off('routeChangeStart', handleRouteChange)
//     }
// }, [route.events]);


  
  // useEffect(() => {
  //   // codeHere
    
  //   // console.log('ORGShowFullMapFilter:', ORGShowFullMapFilter)
  // }, [ORGShowFullMapFilter])
    
  const [isORGState, setIsORGState] = useState(false)
  useEffect(() => {
    if (route.pathname === "/ORG") {
      setIsORGState(true)
    } else {
      setIsORGState(false)
    }
  }, [route.pathname])

  const navigateHome = (e) => {
    if (e.key === "Enter") {
      route.push("/")
    }
  }
  const navigateAbout = (e) => {
    if (e.key === "Enter") {
      route.push("/about")
    }
  }
  const navigateSNT = (e) => {
    if (e.key === "Enter") {
      route.push("/SNT")
    }
  }
  const navigateORG = (e) => {
    if (e.key === "Enter") {
      route.push("/ORG")
    }
  }
  const navigateBlog = (e) => {
    if (e.key === "Enter") {
      route.push("/blog")
    }
  }

  return (
    <NavBarStyled isORG={isORGState}>
      <Logo
        tabIndex={0}
        onKeyDown={navigateHome}>
        <LinkNoStyle href="/">
          {" "}
          <H2
            bold
            logo>
            {" "}
            Inclusive
          </H2>
        </LinkNoStyle>
      </Logo>

      <NavigationLinksWrapper>
        <li
          tabIndex={0}
          onKeyDown={navigateAbout}
          className={route.pathname == "/about" ? "active" : ""}>
          <LinkNoStyle href="/about">About</LinkNoStyle>
        </li>
        <li
          tabIndex={0}
          onKeyDown={navigateSNT}
          className={route.pathname == "/SNT" ? "active" : ""}>
          <LinkNoStyle href="/SNT">Guide to services</LinkNoStyle>
        </li>
        <li
          tabIndex={0}
          onKeyDown={navigateORG}
          className={/[ORG]\/\w|[ORG]/.test(route.pathname) ? "active" : null}>
          <LinkNoStyle href="/ORG">Resource directory</LinkNoStyle>
        </li>
        <li
          tabIndex={0}
          onKeyDown={navigateBlog}
          className={route.pathname == "/blog" ? "active" : ""}>
          <LinkNoStyle href="/blog">Blog</LinkNoStyle>
        </li>
      </NavigationLinksWrapper>

      <SignComponent />
    </NavBarStyled>
  )
}

export default NavBar
