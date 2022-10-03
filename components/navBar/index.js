import { useContext } from "react"
import  Link  from "next/link"
import {
  LoginComponent,
  Logo,
  NavBarStyled,
  NavigationLinks
} from "./styles/NavBar"
import { H2 } from "../../components/ui/heading_body_text/HeaderFonts"
import { BtnSmall } from "../../components/ui/buttons/general/ButtonStyled"
import {
  Caption,
  P
} from "../../components/ui/heading_body_text/DesktopMobileFonts"
import { LinkNoStyle } from "../../components/ui/hyperlink/HyperlinkNoStyles"
// import { LoginCtx } from "../../context/LoginCtx"
import { useLoginCtx } from "../../context/LoginCtx"

const NavBar = () => {
  // const { isLogin, setIsLogin, whoIsLogin } = useContext(LoginCtx)
  
  const { isLogin, setIsLogin, whoIsLogin } = useLoginCtx()
  
  
  // console.log('isLogin, setIsLogin, whoIsLogin:', isLogin, setIsLogin, whoIsLogin)
  
  

  const logoutHandler = () => {
    let dataAccount = JSON.parse(localStorage.getItem(whoIsLogin))
    dataAccount.isLogin = false

    localStorage.setItem(whoIsLogin, JSON.stringify(dataAccount))
    // console.log(localStorage.getItem(whoIsLogin))

    setIsLogin(false)
  }

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

      {/* <LoginComponent>
          <Link href="/signup">
            <BtnSmall>Sign up</BtnSmall>
          </Link>
          <Link href="/login">
            <P>Log in</P>
          </Link>
        </LoginComponent> */}

      {isLogin === true ? (
        <LoginComponent>
          <BtnSmall>My account</BtnSmall>
          <Caption bold onClick={logoutHandler}>
            Log out
          </Caption>
        </LoginComponent>
      ) : (
        <LoginComponent>
          <LinkNoStyle href="/signup">
            <BtnSmall>Sign up</BtnSmall>
          </LinkNoStyle>
          <LinkNoStyle href="/login">
            <P>Log in</P>
          </LinkNoStyle>
        </LoginComponent>
      )}
    </NavBarStyled>
  )
}

export default NavBar
