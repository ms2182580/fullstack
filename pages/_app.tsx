import { PageLayout } from "../components/PageLayout.js"
import { Ctx_ShowModal_Provider } from "../context/Ctx_ShowModal.js"
import { LoginCtxProvider } from "../context/LoginCtx"
import { ORG_CtxFetchNoFiltersMobile_Provider } from "../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { ORG_CtxFetchNoFilters_Provider } from "../context/ORG_CtxFetchNoFilters_Provider.js"
import { ORG_CtxFetchWithFiltersMobile_Provider } from "../context/ORG_CtxFetchWithFiltersMobile_Provider.js"
import { ORG_CtxFetchWithFilters_Provider } from "../context/ORG_CtxFetchWithFilters_Provider.js"
import { ORG_CtxFiltersLeft_Provider } from "../context/ORG_CtxFiltersLeft_Provider.js"
import { ORG_CtxShowFiltersDesktop_Provider } from "../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_Ctx_2Page_Provider } from "../context/ORG_Ctx_2Page_Provider.js"
import { ORG_CtxFiltersApply_Provider } from "../context/ORG_Ctx_FiltersApply.js"
import { ORG_CtxIndividualSpeechtherapist_Provider } from "../context/ORG_Ctx_IndividualSpeechtherapist"
import { ORG_CtxShowFiltersMobile_Provider } from "../context/ORG_Ctx_ShowFiltersMobile.js"
import { ORG_InputCtxProvider } from "../context/ORG_Input"

import GlobalStyle from "./styles/index.js"

function MyApp({ Component, pageProps }) {
  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxIndividualSpeechtherapist_Provider>
          <ORG_CtxFetchNoFilters_Provider>
            <ORG_CtxFiltersLeft_Provider>
              <ORG_CtxFetchWithFilters_Provider>
                <ORG_CtxShowFiltersMobile_Provider>
                  <ORG_CtxFetchNoFiltersMobile_Provider>
                    <ORG_CtxFetchWithFiltersMobile_Provider>
                      <ORG_CtxShowFiltersDesktop_Provider>
                        <ORG_CtxFiltersApply_Provider>
                          <Ctx_ShowModal_Provider>
                            <ORG_Ctx_2Page_Provider>
                              <PageLayout>
                                <GlobalStyle />
                                <link
                                  rel="icon"
                                  href="/favicon.ico"
                                />
                                <Component {...pageProps} />
                              </PageLayout>
                            </ORG_Ctx_2Page_Provider>
                          </Ctx_ShowModal_Provider>
                        </ORG_CtxFiltersApply_Provider>
                      </ORG_CtxShowFiltersDesktop_Provider>
                    </ORG_CtxFetchWithFiltersMobile_Provider>
                  </ORG_CtxFetchNoFiltersMobile_Provider>
                </ORG_CtxShowFiltersMobile_Provider>
              </ORG_CtxFetchWithFilters_Provider>
            </ORG_CtxFiltersLeft_Provider>
          </ORG_CtxFetchNoFilters_Provider>
        </ORG_CtxIndividualSpeechtherapist_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp
