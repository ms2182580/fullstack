import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import OddyLogoDark from "@/assets/icons/logo/Dark.svg"
import OddyLogoDarkBeta from "@/assets/icons/logo/DarkBeta.svg"
import OddyLogoWhite from "@/assets/icons/logo/White.svg"
import OddyLogoWhiteBeta from "@/assets/icons/logo/WhiteBeta.svg"
import Link from "next/link"
import { useRouter } from "next/router"
import { Logo_HeaderWrapper } from "./styles/Logo_HeaderWrapper"

type Props = {
  whichOneShouldDisplay?: "dark" | "white" | "dark-beta" | "white-beta"
}

const logoToShow = {
  dark: OddyLogoDark,
  white: OddyLogoWhite,
  "dark-beta": OddyLogoDarkBeta,
  "white-beta": OddyLogoWhiteBeta,
}

export const INDEX_Logo = ({ whichOneShouldDisplay = "dark" }: Props) => {
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
