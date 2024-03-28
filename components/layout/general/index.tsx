import { Home_D_NavBar_N } from "@/components/home/desktop/Home_D_NavBar_N"
import { NavBar_M } from "@/components/navBar/mobile/NavBar_M"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useWidthSize } from "@/utils/useWidthSize"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Support_us } from "./Support_us"
import { MainWrapper } from "./styles/MainWrapper"

// const NavBar_Desktop = dynamic(
//   () =>
//     import("@/components/home/desktop/Home_D_NavBar_N").then(
//       (mod) => mod.Home_D_NavBar_N
//     ),
//   { ssr: false }
// )
// const NavBar_Mobile = dynamic(
//   () =>
//     import("@/components/navBar/mobile/NavBar_M").then((mod) => mod.NavBar_M),
//   { ssr: false }
// )

const Footer_Desktop = dynamic(
  () =>
    import("@/components/footer/desktop/Footer_D").then((mod) => mod.Footer_D),
  { ssr: false }
)
const Footer_Mobile = dynamic(
  () =>
    import("@/components/footer/mobile/Footer_M").then((mod) => mod.Footer_M),
  { ssr: false }
)

export const Layout_General = ({ children }) => {
  const { isMobile } = useWidthSize()
  const { pathname } = useRouter()

  const shouldShowSupportUs = useMemo(() => {
    const acceptedPath =
      pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
      pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
      pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)

    return acceptedPath
  }, [pathname])

  if (isMobile === undefined) return null

  return (
    <>
      {isMobile ? <NavBar_M /> : <Home_D_NavBar_N />}

      <MainWrapper isMainInHome={pathname === "/"}>
        {children}

        {shouldShowSupportUs && <Support_us />}
      </MainWrapper>

      {isMobile ? <Footer_Mobile /> : <Footer_Desktop />}
    </>
  )
}
