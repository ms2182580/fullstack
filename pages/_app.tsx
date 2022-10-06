// import "../assets/globals.css"

import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_KeywordsCtxProvider } from "../context/ORG_Keywords"


function MyApp({ Component, pageProps }) {
  return (

    <LoginCtxProvider>
      <ORG_KeywordsCtxProvider>

        <PageLayout>
          <GlobalStyle />

          <Component {...pageProps} />
        </PageLayout>
      </ORG_KeywordsCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
