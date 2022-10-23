// import "../assets/globals.css"

import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_InputCtxProvider } from "../context/ORG_Input"


function MyApp({ Component, pageProps }) {
  return (

    <LoginCtxProvider>
      <ORG_InputCtxProvider>

        <PageLayout>
          <GlobalStyle />

          <Component {...pageProps} />
        </PageLayout>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
