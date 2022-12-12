import GlobalStyle from "./styles/index.js"
import PageLayout from "../components/PageLayout.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_InputCtxProvider } from "../context/ORG_Input"
import { ORG_CtxIndividualSpeechtherapist_Provider } from "../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_CtxFetchNoFilters_Provider } from "../context/ORG_CtxFetchNoFilters_Provider.js"
import { ORG_CtxFetchWithFilters_Provider } from "../context/ORG_CtxFetchWithFilters_Provider.js"
import { ORG_CtxFiltersLeft_Provider } from "../context/ORG_CtxFiltersLeft_Provider.js"

function MyApp({ Component, pageProps }) {
  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxIndividualSpeechtherapist_Provider>
          <ORG_CtxFetchNoFilters_Provider>
            <ORG_CtxFiltersLeft_Provider>
              <ORG_CtxFetchWithFilters_Provider>
                <PageLayout>
                  <GlobalStyle />
                  <link rel="icon" href="/favicon.ico" />

                  <Component {...pageProps} />
                </PageLayout>
              </ORG_CtxFetchWithFilters_Provider>
            </ORG_CtxFiltersLeft_Provider>
          </ORG_CtxFetchNoFilters_Provider>
        </ORG_CtxIndividualSpeechtherapist_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
