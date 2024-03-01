import { useEffect, useState } from "react"
import { ALL_ROUTES } from "./ALL_ROUTES"

export const enum WhichLayoutDisplay_Key {
  isORGLike = "isORGLike",
  isDashboard = "isDashboard",
  isRegistration = "isRegistration",
  isSignin = "isSignin",
  isSignup = "isSignup",
  isHome = "/",
}

export const useCheckWhichLayout = ({ pathname }) => {
  const [whichRouteState, setWhichRouteState] = useState<string>(pathname)

  useEffect(() => {
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

    setWhichRouteState(toReturn)
  }, [pathname])

  return whichRouteState
}
