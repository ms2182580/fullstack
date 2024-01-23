import { useCheckUserWidth } from "@/context/CheckUserWidth.js"
import {
  KEYS_VALUES_useSessionStorage,
  useSessionStorage_typedFlow,
} from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Head from "next/head"
import { useRouter } from "next/router.js"
import { useEffect } from "react"
import { MainWrapper } from "./styles/MainWrapper"

/* 

* Nav bar or footer doesn't appear on modals, so, those are not important

const NavBar_Desktop = dynamic(
  () =>
    import("../navBar/desktop/INDEX_NavBar_D.js").then(
      (mod) => mod.INDEX_NavBar_D
    ),
  { ssr: false }
)
const NavBar_Mobile = dynamic(
  () => import("../navBar/mobile/NavBar_M.js").then((mod) => mod.NavBar_M),
  { ssr: false }
)

const Footer_Desktop = dynamic(
  () => import("../footer/desktop/Footer_D.js").then((mod) => mod.Footer_D),
  { ssr: false }
)
const Footer_Mobile = dynamic(
  () => import("../footer/mobile/Footer_M.js").then((mod) => mod.Footer_M),
  { ssr: false }
) */

export const Page_layout = ({ children, title = "INCLUSIVE" }) => {
  const { isMobile }: any = useCheckUserWidth()
  const { push, pathname } = useRouter()

  let { actualSessionStorage }: any = useSessionStorage_typedFlow()

  useEffect(() => {
    if (
      actualSessionStorage ===
      KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST
    ) {
      push(`/${ALL_ROUTES.ORG}/welcome`)
    }
  }, [])

  return (
    <>
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content="inclusive - website" />
        </Head>
        <>
          {/* {isMobile &&
          actualSessionStorage !==
            KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST ? (
            <>
              <NavBar_Mobile />
            </>
          ) : (
            !isMobile &&
            actualSessionStorage !==
              KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST && (
              <>
                <NavBar_Desktop />
              </>
            )
          )} */}

          <MainWrapper isMainInHome={pathname === "/"}>{children}</MainWrapper>

          {/* {isMobile &&
          actualSessionStorage !==
            KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST ? (
            <>
              <Footer_Mobile />
            </>
          ) : (
            !isMobile &&
            actualSessionStorage !==
              KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST && (
              <>
                <Footer_Desktop />
              </>
            )
          )} */}
        </>
      </>
    </>
  )
}
