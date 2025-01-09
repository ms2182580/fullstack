import { ALL_ROUTES, ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { useMatchMedia } from "@/utils/useMatchMedia"
import Head from "next/head"
import { useRouter } from "next/router.js"
import { useMemo } from "react"
import { Layout_Dashboard } from "../dashboard"
import { Layout_General } from "../general"
import { OnlyDesktopLayout } from "../general/only-desktop-layout"
import { Layout_Signin } from "../signin"
import { Layout_Signup } from "../signup"
import { Layout_Teams } from "../teams"

export const whichLayoutDisplayKey = {
  isORGLike: "isORGLike",
  isDashboard: "isDashboard",
  isRegistration: "isRegistration",
  isSignin: "isSignin",
  isSignup: "isSignup",
  isHome: "/",
  isTeamsDashboard: "isTeamsDashboard",
  isTeamsAuth: "isTeamsAuth",
}

export const Layout = ({ children, title = "INCLUSIVE" }) => {
  const { pathname } = useRouter()

  const actualRoute = useMemo(() => {
    const isORG =
      (pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
        pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
        pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)) &&
      whichLayoutDisplayKey.isORGLike

    const isDashboard =
      pathname.startsWith(`/${ALL_ROUTES.DASHBOARD}`) &&
      whichLayoutDisplayKey.isDashboard

    const isSignup =
      pathname.startsWith(`/${ALL_ROUTES.SIGNUP}`) &&
      whichLayoutDisplayKey.isSignup

    const isSignin =
      (pathname.startsWith(`/${ALL_ROUTES.SIGNIN}`) ||
        pathname.startsWith(`/${ALL_ROUTES["RECENT-LOGIN"]}`)) &&
      whichLayoutDisplayKey.isSignin

    const isTeamsDashboard =
      pathname.startsWith(
        `/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.DASHBOARD}`
      ) && whichLayoutDisplayKey.isTeamsDashboard

    const isTeamsAuth =
      pathname.startsWith(`/${ALL_ROUTES_INTERNAL.TEAMS}`) &&
      whichLayoutDisplayKey.isTeamsAuth

    const toReturn =
      isORG ||
      isDashboard ||
      isSignup ||
      isSignin ||
      isTeamsDashboard ||
      isTeamsAuth ||
      whichLayoutDisplayKey.isHome

    return toReturn
  }, [pathname])

  const { isMobile } = useMatchMedia()

  if (isMobile === undefined) return null

  if (
    actualRoute === whichLayoutDisplayKey.isHome ||
    actualRoute === whichLayoutDisplayKey.isORGLike
  ) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="inclusive - website" />
        </Head>

        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_General isMobile={isMobile}>{children}</Layout_General>
        )}
      </>
    )
  }

  if (actualRoute === whichLayoutDisplayKey.isDashboard) {
    return (
      <>
        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_Dashboard title={title}>{children}</Layout_Dashboard>
        )}
      </>
    )
  }

  if (actualRoute === whichLayoutDisplayKey.isSignin) {
    return (
      <>
        <Head>
          <title>{title} Signin</title>
          <meta name="description" content="inclusive - website" />
        </Head>

        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_Signin>{children}</Layout_Signin>
        )}
      </>
    )
  }

  if (actualRoute === whichLayoutDisplayKey.isSignup) {
    return (
      <>
        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_Signup title={title}>{children}</Layout_Signup>
        )}
      </>
    )
  }

  if (
    actualRoute === whichLayoutDisplayKey.isTeamsDashboard ||
    actualRoute === whichLayoutDisplayKey.isTeamsAuth
  ) {
    return (
      <>
        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_Teams title={title} theRoot={actualRoute}>
            {children}
          </Layout_Teams>
        )}
      </>
    )
  }
}
