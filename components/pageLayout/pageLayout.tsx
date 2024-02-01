import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import dynamic from "next/dynamic.js"
import Head from "next/head"
import { useRouter } from "next/router.js"
import { useMemo } from "react"
import { useCheckUserWidth } from "../../context/CheckUserWidth.js"
import { Footer_D } from "../footer/desktop/Footer_D"
import { Home_D_NavBar_N } from "../home/desktop/Home_D_NavBar_N"
import { MainWrapper } from "./styles/MainWrapper"
import { Support_us } from "./support-us"

const NavBar_Mobile = dynamic(
  () => import("../navBar/mobile/NavBar_M.js").then((mod) => mod.NavBar_M),
  { ssr: false }
)

const Footer_Mobile = dynamic(
  () => import("../footer/mobile/Footer_M.js").then((mod) => mod.Footer_M),
  { ssr: false }
)

export const Page_layout = ({ children, title = "INCLUSIVE" }) => {
  const { isMobile }: any = useCheckUserWidth()
  const { pathname } = useRouter()

  const shouldShowSupportUs = useMemo(() => {
    const acceptedPath =
      pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
      pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
      pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)

    return acceptedPath
  }, [pathname])

  return (
    <>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="inclusive - website" />
        </Head>
        <>
          {isMobile ? (
            <>
              <NavBar_Mobile />
            </>
          ) : (
            <>
              <Home_D_NavBar_N />
            </>
          )}

          <MainWrapper isMainInHome={pathname === "/"}>
            {children}

            {shouldShowSupportUs && (
              <>
                <Support_us />
              </>
            )}
          </MainWrapper>

          {isMobile ? (
            <>
              <Footer_Mobile />
            </>
          ) : (
            <>
              <Footer_D />
            </>
          )}
        </>
      </>
    </>
  )
}
