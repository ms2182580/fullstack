import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import OddyLogoDarkR from "@/assets/icons/logo/dark-r.svg"
import OddyLogoDark from "@/assets/icons/logo/dark.svg"
import OddyLogoDarkBeta from "@/assets/icons/logo/darkBeta.svg"
import OddyLogoWhite from "@/assets/icons/logo/white.svg"
import OddyLogoWhiteBeta from "@/assets/icons/logo/whiteBeta.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import { Logo_HeaderWrapper } from "./styles/Logo_HeaderWrapper"

export type INDEX_LogoType = {
  whichOneShouldDisplay?:
    | "dark"
    | "white"
    | "dark-beta"
    | "white-beta"
    | "dark-r"
}

const logoToShow = {
  dark: OddyLogoDark,
  white: OddyLogoWhite,
  "dark-beta": OddyLogoDarkBeta,
  "white-beta": OddyLogoWhiteBeta,
  "dark-r": OddyLogoDarkR,
}

export const INDEX_Logo = ({
  whichOneShouldDisplay = "dark",
}: INDEX_LogoType) => {
  const { pathname } = useRouter()

  const Logo = logoToShow[whichOneShouldDisplay]

  return (
    <Logo_HeaderWrapper data-testid={KEYS_DATA_TESTID.LOGO}>
      <Link href={pathname === "/" ? "" : "/"}>
        <Logo />
      </Link>
    </Logo_HeaderWrapper>
  )
}
