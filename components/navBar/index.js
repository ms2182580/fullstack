import { Logo, NavBarStyled, NavigationLinks } from "./styles/NavBar"
import { H2 } from "../../components/ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import SignComponent from "./SignComponent.js"
import { useRouter } from "next/router"

const NavBar = () => {
  const route = useRouter()

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
    <NavBarStyled>
      <Logo tabIndex={0} onKeyDown={navigateHome}>
        <LinkNoStyle href="/">
          {" "}
          <H2 bold logo>
            {" "}
            Inclusive
          </H2>
        </LinkNoStyle>
      </Logo>

      <NavigationLinks>
        <li tabIndex={0} onKeyDown={navigateAbout}>
          <LinkNoStyle href="/about">About</LinkNoStyle>
        </li>
        <li tabIndex={0} onKeyDown={navigateSNT}>
          <LinkNoStyle href="/SNT">Guide to services</LinkNoStyle>
        </li>
        <li tabIndex={0} onKeyDown={navigateORG}>
          <LinkNoStyle href="/ORG">Resource directory</LinkNoStyle>
        </li>
        <li tabIndex={0} onKeyDown={navigateBlog}>
          <LinkNoStyle href="/blog">Blog</LinkNoStyle>
        </li>
      </NavigationLinks>

      <SignComponent />
    </NavBarStyled>
  )
}

export default NavBar
