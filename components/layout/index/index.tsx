import {
  WhichLayoutDisplay_Key,
  useCheckWhichLayout,
} from "@/utils/useCheckWhichLayout"
import Head from "next/head.js"
import { useRouter } from "next/router.js"
import { Layout_Dashboard } from "../dashboard"
import { Layout_General } from "../general"
import { Layout_Signin } from "../signin"
import { Layout_Signup } from "../signup"

export const Layout = ({ children, title = "INCLUSIVE" }) => {
  const { pathname } = useRouter()

  const whichRouteState = useCheckWhichLayout({ pathname: pathname })

  if (
    whichRouteState === WhichLayoutDisplay_Key.isHome ||
    whichRouteState === WhichLayoutDisplay_Key.isORGLike
  ) {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="inclusive - website" />
        </Head>

        <Layout_General>{children}</Layout_General>
      </>
    )
  }

  if (whichRouteState === WhichLayoutDisplay_Key.isDashboard) {
    return (
      <>
        <Head>
          <title>{title} Dashboard</title>
          <meta name="description" content="inclusive - website" />
        </Head>
        <Layout_Dashboard>{children}</Layout_Dashboard>
      </>
    )
  }

  if (whichRouteState === WhichLayoutDisplay_Key.isSignin) {
    return (
      <>
        <Head>
          <title>{title} Signin</title>
          <meta name="description" content="inclusive - website" />
        </Head>
        <Layout_Signin>{children}</Layout_Signin>
      </>
    )
  }

  if (whichRouteState === WhichLayoutDisplay_Key.isSignup) {
    return (
      <>
        <Layout_Signup title={title}>{children}</Layout_Signup>
      </>
    )
  }
}
