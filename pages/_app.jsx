import { PageLayout } from "../components/PageLayout.js"
import { CheckUserWidth_Provider } from "../context/CheckUserWidth.js"
import { Ctx_ShowModal_Provider } from "../context/Ctx_ShowModal.js"
import { LoginCtxProvider } from "../context/LoginCtx.js"
import { ORG_CtxFetchNoFiltersDesktop_Provider } from "../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { ORG_CtxFetchNoFiltersMobile_Provider } from "../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { ORG_CtxFetchWithFiltersDesktop_Provider } from "../context/ORG_CtxFetchWithFiltersDesktop_Provider.js"
import { ORG_CtxFetchWithFiltersMobile_Provider } from "../context/ORG_CtxFetchWithFiltersMobile_Provider.js"
import { ORG_CtxFiltersLeftDesktop_Provider } from "../context/ORG_CtxFiltersLeftDesktop_Provider.js"
import { ORG_CtxFiltersLeftMobile_Provider } from "../context/ORG_CtxFiltersLeftMobile_Provider.js"
import { ORG_CtxShowFiltersDesktop_Provider } from "../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_Ctx_2Page_Provider } from "../context/ORG_Ctx_2Page_Provider.js"
import { ORG_CtxFiltersApplyDesktop_Provider } from "../context/ORG_Ctx_FiltersApplyDesktop.js"
import { ORG_CtxFiltersApplyMobile_Provider } from "../context/ORG_Ctx_FiltersApplyMobile.js"
import { ORG_CtxSTDataThirdpageDesktop_Provider } from "../context/ORG_Ctx_STDataThirdpageDesktop_Provider.js"
import { ORG_CtxSTDataThirdpageMobile_Provider } from "../context/ORG_Ctx_STDataThirdpageMobile_Provider.js"
import { ORG_CtxShowFiltersMobile_Provider } from "../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { ORG_InputCtxProvider } from "../context/ORG_Input.js"

import GlobalStyle from "./styles/index.js"

function MyApp({ Component, pageProps }) {
  // console.log("Component:", Component)
  // console.log("props:", props)
  // console.log("pageProps:", pageProps)
  // const { isMobile } = useCheckUserWidth()
  // const { isMobile } = useWidthSize()

  // console.log("isMobile:", isMobile)

  return (
    <LoginCtxProvider>
      <ORG_InputCtxProvider>
        <ORG_CtxSTDataThirdpageDesktop_Provider>
          <ORG_CtxSTDataThirdpageMobile_Provider>
            <ORG_CtxFetchNoFiltersDesktop_Provider>
              <ORG_CtxFiltersLeftDesktop_Provider>
                <ORG_CtxFiltersLeftMobile_Provider>
                  <ORG_CtxFetchWithFiltersDesktop_Provider>
                    <ORG_CtxShowFiltersMobile_Provider>
                      <ORG_CtxFetchNoFiltersMobile_Provider>
                        <ORG_CtxFetchWithFiltersMobile_Provider>
                          <ORG_CtxShowFiltersDesktop_Provider>
                            <ORG_CtxFiltersApplyMobile_Provider>
                              <ORG_CtxFiltersApplyDesktop_Provider>
                                <Ctx_ShowModal_Provider>
                                  <ORG_Ctx_2Page_Provider>
                                    <CheckUserWidth_Provider>
                                      <PageLayout>
                                        <GlobalStyle />
                                        <link
                                          rel="icon"
                                          href="/favicon.ico"
                                        />
                                        <Component {...pageProps} />
                                      </PageLayout>
                                    </CheckUserWidth_Provider>
                                  </ORG_Ctx_2Page_Provider>
                                </Ctx_ShowModal_Provider>
                              </ORG_CtxFiltersApplyDesktop_Provider>
                            </ORG_CtxFiltersApplyMobile_Provider>
                          </ORG_CtxShowFiltersDesktop_Provider>
                        </ORG_CtxFetchWithFiltersMobile_Provider>
                      </ORG_CtxFetchNoFiltersMobile_Provider>
                    </ORG_CtxShowFiltersMobile_Provider>
                  </ORG_CtxFetchWithFiltersDesktop_Provider>
                </ORG_CtxFiltersLeftMobile_Provider>
              </ORG_CtxFiltersLeftDesktop_Provider>
            </ORG_CtxFetchNoFiltersDesktop_Provider>
          </ORG_CtxSTDataThirdpageMobile_Provider>
        </ORG_CtxSTDataThirdpageDesktop_Provider>
      </ORG_InputCtxProvider>
    </LoginCtxProvider>
  )
}

export default MyApp

