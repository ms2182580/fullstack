import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useMatchMedia } from "@/utils/useMatchMedia"
import Head from "next/head"
import { useRouter } from "next/router.js"
import { useMemo } from "react"
import { Layout_Dashboard } from "../dashboard"
import { Layout_General } from "../general"
import { OnlyDesktopLayout } from "../general/only-desktop-layout"
import { Layout_Signin } from "../signin"
import { Layout_Signup } from "../signup"

const WhichLayoutDisplay_Key = {
  isORGLike: "isORGLike",
  isDashboard: "isDashboard",
  isRegistration: "isRegistration",
  isSignin: "isSignin",
  isSignup: "isSignup",
  isHome: "/",
}

export const Layout = ({ children, title = "INCLUSIVE" }) => {
  const { pathname } = useRouter()

  const actualRoute = useMemo(() => {
    let isORG =
      (pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
        pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
        pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)) &&
      WhichLayoutDisplay_Key.isORGLike

    let isDashboard =
      pathname.startsWith(`/${ALL_ROUTES.DASHBOARD}`) &&
      WhichLayoutDisplay_Key.isDashboard

    let isSignup =
      pathname.startsWith(`/${ALL_ROUTES.SIGNUP}`) &&
      WhichLayoutDisplay_Key.isSignup

    let isSignin =
      (pathname.startsWith(`/${ALL_ROUTES.SIGNIN}`) ||
        pathname.startsWith(`/${ALL_ROUTES["RECENT-LOGIN"]}`)) &&
      WhichLayoutDisplay_Key.isSignin

    let toReturn =
      isORG ||
      isDashboard ||
      isSignup ||
      isSignin ||
      WhichLayoutDisplay_Key.isHome

    return toReturn
  }, [pathname])

  const { isMobile } = useMatchMedia()

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
          <Layout_General>{children}</Layout_General>
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
}
