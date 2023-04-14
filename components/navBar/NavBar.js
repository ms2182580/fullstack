import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { H2 } from "../ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../ui/hyperlink/HyperlinkNoStyles"
import SignComponent from "./SignComponent.js"
import { Logo, NavBarStyled, NavigationLinksWrapper } from "./styles/NavBar"

export const NavBar = () => {
  const route = useRouter()
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

