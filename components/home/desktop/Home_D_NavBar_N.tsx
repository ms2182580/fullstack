import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Home_D_NavBar_NWrapper } from "./styles/Home_D_NavBar_NWrapper"
import { useRouter } from "next/router"
import {
  ChatAILogo_M,
  InclusiveLogo_D,
  InclusiveLogo_D_DownArrow,
} from "@/assets/icons"
import Link from "next/link"
import { ButtonMedium, ButtonSmall } from "@/components/ui/buttons/general"

export const Home_D_NavBar_N = () => {
  const route = useRouter()

  const handleNavigateORG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      route.push("/")
    }
  }
  return (
    <Home_D_NavBar_NWrapper>
      <span
        tabIndex={0}
        onKeyDown={handleNavigateORG}
        onClick={handleNavigateORG}
      >
        <H2 bold>INCLUSIVE</H2>
        <InclusiveLogo_D />
      </span>
      <div>
        <Link href={"/"}>
          About Us{" "}
          <span>
            <InclusiveLogo_D_DownArrow />
          </span>
        </Link>
        <Link href={"/org/typed-flow"}>Resource Guide</Link>
        <ButtonSmall secondary>Log In</ButtonSmall>
        <ButtonSmall>Sign Up</ButtonSmall>
      </div>
    </Home_D_NavBar_NWrapper>
  )
}
