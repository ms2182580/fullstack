import { Logo, NavBarStyled, NavigationLinks } from "./styles/NavBar"
import { H2 } from "../../components/ui/heading_body_text/HeaderFonts"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
import SignComponent from "./SignComponent.js"

const NavBar = () => {
  return (
    <NavBarStyled>
      <Logo>
        <LinkNoStyle href="/">
          {" "}
          <H2 bold logo>
            {" "}
            Inclusive
          </H2>
        </LinkNoStyle>
      </Logo>

      <NavigationLinks>
        <li>
          <LinkNoStyle href="/about">About</LinkNoStyle>
        </li>
        <li>
          <LinkNoStyle href="/SNT">Guide to services</LinkNoStyle>
        </li>
        <li>
          <LinkNoStyle href="/ORG">Resource directory</LinkNoStyle>
        </li>
        <li>
          <LinkNoStyle href="/blog">Blog</LinkNoStyle>
        </li>
      </NavigationLinks>

      <SignComponent />
    </NavBarStyled>
  )
}

export default NavBar
