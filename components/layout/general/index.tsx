import { Footer_D } from "@/components/footer/desktop/Footer_D"
import { Footer_M } from "@/components/footer/mobile/Footer_M"
import { Home_D_NavBar_N } from "@/components/home/desktop/Home_D_NavBar_N"
import { NavBar_M } from "@/components/navBar/mobile/NavBar_M"
import { useCheckUserWidth } from "@/context/CheckUserWidth"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Support_us } from "./Support_us"
import { MainWrapper } from "./styles/MainWrapper"

export const Layout_General = ({ children }) => {
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
      {isMobile ? <NavBar_M /> : <Home_D_NavBar_N />}

      <MainWrapper isMainInHome={pathname === "/"}>
        {children}

        {shouldShowSupportUs && <Support_us />}
      </MainWrapper>

      {isMobile ? <Footer_M /> : <Footer_D />}
    </>
  )
}
