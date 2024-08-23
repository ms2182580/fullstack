import { Logo_HeaderWrapper } from "./styles/Logo_HeaderWrapper"

import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { PRIMARY } from "@/assets/Colors"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactElement, useMemo } from "react"
import { H1 } from "../ui/heading_body_text/HeaderFonts"

export const ChatAILogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <g fill="#fff">
      <path
        fillRule="evenodd"
        d="M16 .5C7.164.5 0 7.663 0 16.5a15.952 15.952 0 0 0 2.08 7.896L.083 30.394a1.6 1.6 0 0 0 2.024 2.024l5.998-2A15.936 15.936 0 0 0 16 32.499c8.837 0 16-7.163 16-16C32 7.664 24.837.5 16 .5Zm0 9.6c-1.443 0-2.77.475-3.84 1.28a1.599 1.599 0 1 1-1.92-2.56 9.6 9.6 0 0 1 13.44 13.44 1.6 1.6 0 0 1-2.557-1.92A6.4 6.4 0 0 0 16 10.1Zm-8 4.8a1.6 1.6 0 0 1 1.6 1.6 6.4 6.4 0 0 0 6.4 6.4 1.6 1.6 0 0 1 0 3.2 9.6 9.6 0 0 1-9.6-9.6A1.6 1.6 0 0 1 8 14.9Zm8-1.6a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"
        clipRule="evenodd"
      />
      <ellipse
        cx={12.185}
        cy={20.209}
        rx={7.592}
        ry={8.667}
        transform="rotate(40.703 12.185 20.209)"
      />
    </g>
  </svg>
)

export const INDEX_Logo = ({
  logoColor = PRIMARY.PRIMARY_LOGO,
}): ReactElement => {
  const { pathname } = useRouter()

  const logoCanMoveTheUserToHome = useMemo(() => {
    const isHome = pathname === "/" ? "" : "/"

    const isSignFlow =
      pathname.startsWith(`/${ALL_ROUTES.SIGNIN}`) ||
      pathname.startsWith(`/${ALL_ROUTES.SIGNUP}`) ||
      pathname.startsWith(`/${ALL_ROUTES["RECENT-LOGIN"]}`)

    return { isHome, isSignFlow }
  }, [pathname])

  return (
    <Logo_HeaderWrapper
      logoColor={logoColor}
      isSignFlow={logoCanMoveTheUserToHome.isSignFlow}
      data-testid={KEYS_DATA_TESTID.LOGO}
    >
      <Link href={logoCanMoveTheUserToHome.isHome}>
        <H1>Inclusive</H1>
        <ChatAILogo />
      </Link>
    </Logo_HeaderWrapper>
  )
}
