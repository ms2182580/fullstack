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
import { Layout_Team } from "../team"

const WhichLayoutDisplay_Key = {
  isORGLike: "isORGLike",
  isDashboard: "isDashboard",
  isRegistration: "isRegistration",
  isSignin: "isSignin",
  isSignup: "isSignup",
  isHome: "/",
  isTeam: "isTeam",
}

export const Layout = ({ children, title = "INCLUSIVE" }) => {
  const { pathname, asPath } = useRouter()
  // console.log(
  //   "✨pathname:",
  //   pathname,
  //   asPath,
  //   pathname.startsWith(`/${ALL_ROUTES_INTERNAL.TEAMS}`)
  // )

  const actualRoute = useMemo(() => {
    const isORG =
      (pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
        pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
        pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)) &&
      WhichLayoutDisplay_Key.isORGLike

    const isDashboard =
      pathname.startsWith(`/${ALL_ROUTES.DASHBOARD}`) &&
      WhichLayoutDisplay_Key.isDashboard

    const isSignup =
      pathname.startsWith(`/${ALL_ROUTES.SIGNUP}`) &&
      WhichLayoutDisplay_Key.isSignup

    const isSignin =
      (pathname.startsWith(`/${ALL_ROUTES.SIGNIN}`) ||
        pathname.startsWith(`/${ALL_ROUTES["RECENT-LOGIN"]}`)) &&
      WhichLayoutDisplay_Key.isSignin

    const isTeam =
      pathname.startsWith(`/${ALL_ROUTES_INTERNAL.TEAMS}`) &&
      WhichLayoutDisplay_Key.isTeam

    const toReturn =
      isORG ||
      isDashboard ||
      isSignup ||
      isSignin ||
      isTeam ||
      WhichLayoutDisplay_Key.isHome

    return toReturn
  }, [pathname])

  const { isMobile } = useMatchMedia()

  if (isMobile === undefined) return null

  if (
    actualRoute === WhichLayoutDisplay_Key.isHome ||
    actualRoute === WhichLayoutDisplay_Key.isORGLike
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

  if (actualRoute === WhichLayoutDisplay_Key.isDashboard) {
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

  if (actualRoute === WhichLayoutDisplay_Key.isSignin) {
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

  if (actualRoute === WhichLayoutDisplay_Key.isSignup) {
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

  if (actualRoute === WhichLayoutDisplay_Key.isTeam) {
    return (
      <>
        {isMobile ? (
          <OnlyDesktopLayout />
        ) : (
          <Layout_Team title={title}>{children}</Layout_Team>
        )}
      </>
    )
  }
}
