import { NavBar_M } from "@/components/navBar/mobile/NavBar_M"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { childrenWithPropsFn } from "@/utils/childrenWithPropsFn"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Support_us } from "./Support_us"
import { Navbar } from "./navbar"
import { MainWrapper } from "./styles/main-wrapper"

const Footer_Desktop = dynamic(
  () => import("@/components/footer/desktop/footer").then((mod) => mod.Footer),
  { ssr: false }
)
const Footer_Mobile = dynamic(
  () =>
    import("@/components/footer/mobile/Footer_M").then((mod) => mod.Footer_M),
  { ssr: false }
)

export const Layout_General = ({ children, isMobile }) => {
  const { pathname } = useRouter()

  const shouldShowSupportUs = useMemo(() => {
    const acceptedPath =
      pathname.startsWith(`/${ALL_ROUTES.ORG}`) ||
      pathname.startsWith(`/${ALL_ROUTES.RECOMMENDED}`) ||
      pathname.startsWith(`/${ALL_ROUTES["MORE-RECOMMENDATION"]}`)

    return acceptedPath
  }, [pathname])

  const childrenWithProps = childrenWithPropsFn({ children, isMobile })

  return (
    <>
      {isMobile ? <NavBar_M /> : <Navbar />}

      <MainWrapper isMainInHome={pathname === "/"}>
        {childrenWithProps}
        {shouldShowSupportUs && <Support_us />}
      </MainWrapper>

      {isMobile ? <Footer_Mobile /> : <Footer_Desktop />}
    </>
  )
}
