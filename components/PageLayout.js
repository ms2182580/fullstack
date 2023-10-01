import dynamic from "next/dynamic.js"
import Head from "next/head"
import { useCheckUserWidth } from "../context/CheckUserWidth.js"

const NavBar_Desktop = dynamic(() => import("./navBar/desktop/INDEX_NavBar_D.js").then((mod) => mod.INDEX_NavBar_D), { ssr: false })
const NavBar_Mobile = dynamic(() => import("./navBar/mobile/NavBar_M.js").then((mod) => mod.NavBar_M), { ssr: false })

const Footer_Desktop = dynamic(() => import("./footer/desktop/Footer_D.js").then((mod) => mod.Footer_D), { ssr: false })
const Footer_Mobile = dynamic(() => import("./footer/mobile/Footer_M.js").then((mod) => mod.Footer_M), { ssr: false })

export const PageLayout = ({ children, title = "INCLUSIVE" }) => {
  const { isMobile } = useCheckUserWidth()

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="inclusive - website"
        />
      </Head>



      {isMobile ? (
        <>
          <NavBar_Mobile />
        </>
      ) : (
        <>
          <NavBar_Desktop />
        </>
      )}

      <main>{children}</main>

      {isMobile ? (
        <>
          <Footer_Mobile />
        </>
      ) : (
        <>
          <Footer_Desktop />
        </>
      )}


    </>
  )
}
