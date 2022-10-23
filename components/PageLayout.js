import Head from "next/head"
import Footer from "./footer/index.js"
import NavBar from "./navBar/index.js"

const PageLayout = ({ children, title = "INCLUSIVE" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="inclusive - website" />
      </Head>

      <NavBar />

      <main>{children}</main>

      <Footer />
    </>
  )
}

export default PageLayout
