import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_InputCtxProvider } from "../context/ORG_Input"
import { ORG_CtxIndividualSpeechtherapist_Provider } from "../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_CtxIndividualPaginationAndHowMuchShow_Provider } from "../context/ORG_Ctx_PaginationAndHowMuchShow.js"

function MyApp({ Component, pageProps }) {
  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxIndividualSpeechtherapist_Provider>
          <ORG_CtxIndividualPaginationAndHowMuchShow_Provider>
            <PageLayout>
              <GlobalStyle />
              <link rel="icon" href="/favicon.ico" />

              <Component {...pageProps} />
            </PageLayout>
          </ORG_CtxIndividualPaginationAndHowMuchShow_Provider>
        </ORG_CtxIndividualSpeechtherapist_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
