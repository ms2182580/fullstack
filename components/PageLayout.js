import dynamic from "next/dynamic.js"
import Head from "next/head"
import { useCheckUserWidth } from "../context/CheckUserWidth.js"
import { Footer } from "./footer/Footer.js"


const NavBar_Mobile = dynamic(() => import("./navBar/mobile/NavBar_M.js").then((mod) => mod.NavBar_M), { ssr: false })
const NavBar_Desktop = dynamic(() => import("./navBar/desktop/NavBar_D.js").then((mod) => mod.NavBar_D), { ssr: false })

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

      <Footer />
    </>
  )
}
