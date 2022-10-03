// import "../assets/globals.css"

import { GlobalStyle } from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"


function MyApp({ Component, pageProps }) {
  return (

    <LoginCtxProvider>
      <PageLayout>
        <GlobalStyle />

        <Component {...pageProps} />
      </PageLayout>
    </LoginCtxProvider>
  )
}

export default MyApp
