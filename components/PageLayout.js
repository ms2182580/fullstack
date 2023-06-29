import Head from "next/head"
import { useORG_Ctx_ShowFiltersMobile } from "../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { Footer } from "./footer/Footer.js"
import { NavBar } from "./navBar/NavBar.js"

export const PageLayout = ({ children, title = "INCLUSIVE" }) => {
  const { mustShowFiltersMobile } = useORG_Ctx_ShowFiltersMobile()



  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="inclusive - website"
        />
      </Head>


      <NavBar />

      <main>{children}</main>

      <Footer />
    </>
  )
}

