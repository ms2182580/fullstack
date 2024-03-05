import { Layout } from "@/components/layout/index/index"
import { Dashboard_Ctx_AICHAT_Provider } from "@/context/Ctx_Dashboard_AIChat"
import { Dashboard_Ctx_AICHAT_UploadFile_Provider } from "@/context/Ctx_Dashboard_CarePlanUploadFile"
import { Dashboard_Ctx_Editor_AICHAT_Provider } from "@/context/Ctx_Dashboard_EditorChatModal"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import { Ctx_sessionStorage_typedFlow_Provider } from "@/context/Ctx_sessionStorage_typedFlow_Provider.js"
import { ORG_Ctx_D_SecondpageData_Backend_Provider } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider.js"
import { ORG_Ctx_D_ThirdpageData_Backend_Provider } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider.js"
import { CheckUserWidth_Provider } from "../context/CheckUserWidth.js"
import { Ctx_ShowModal_Provider } from "../context/Ctx_ShowModal.js"
import { LoginCtxProvider } from "../context/LoginCtx.js"
import { NavbarHomeHeight_Provider } from "../context/NavbarHome_Ctx_Height.js"
import { ORG_CtxFetchNoFiltersDesktop_Provider } from "../context/ORG_CtxFetchNoFiltersDesktop_Provider.js"
import { ORG_CtxFetchNoFiltersMobile_Provider } from "../context/ORG_CtxFetchNoFiltersMobile_Provider.js"
import { ORG_CtxFetchWithFiltersDesktop_Provider } from "../context/ORG_CtxFetchWithFiltersDesktop_Provider.js"
import { ORG_CtxFetchWithFiltersMobile_Provider } from "../context/ORG_CtxFetchWithFiltersMobile_Provider.js"
import { ORG_CtxFiltersLeftDesktop_Provider } from "../context/ORG_CtxFiltersLeftDesktop_Provider.js"
import { ORG_CtxFiltersLeftMobile_Provider } from "../context/ORG_CtxFiltersLeftMobile_Provider.js"
import { ORG_CtxShowFiltersDesktop_Provider } from "../context/ORG_CtxShowFiltersDesktop_Provider.js"
import { ORG_Ctx_2Page_Provider } from "../context/ORG_Ctx_2Page_Provider.js"
import { ORG_Ctx_D_SecondpageData_Provider } from "../context/ORG_Ctx_D_SecondpageData_Provider.js"
import { ORG_Ctx_D_SecondpageFilters_Provider } from "../context/ORG_Ctx_D_SecondpageFilters_Provider.js"
import { ORG_Ctx_D_ThirdpageData_Provider } from "../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ORG_CtxFiltersApplyDesktop_Provider } from "../context/ORG_Ctx_FiltersApplyDesktop.js"
import { ORG_CtxFiltersApplyMobile_Provider } from "../context/ORG_Ctx_FiltersApplyMobile.js"
import { ORG_CtxSTDataThirdpageDesktop_Provider } from "../context/ORG_Ctx_STDataThirdpageDesktop_Provider.js"
import { ORG_CtxSTDataThirdpageMobile_Provider } from "../context/ORG_Ctx_STDataThirdpageMobile_Provider.js"
import { ORG_CtxShowFiltersMobile_Provider } from "../context/ORG_Ctx_ShowFiltersMobile_Provider.js"
import { ORG_InputCtxProvider } from "../context/ORG_Input.js"
import { trpc } from "../utils/trpc"
import GlobalStyle from "./styles/index.js"

function MyApp({ Component, pageProps }) {
  // const router = useRouter()
  // const pathname = router.pathname
  // let isDashboard = !!pathname.includes("/dashboard")
  // let isEditor = !!pathname.includes("/editor")

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
                                  <ORG_Ctx_D_SecondpageFilters_Provider>
                                    <ORG_Ctx_D_SecondpageData_Backend_Provider>
                                      <ORG_Ctx_D_SecondpageData_Provider>
                                        <ORG_Ctx_D_ThirdpageData_Backend_Provider>
                                          <ORG_Ctx_D_ThirdpageData_Provider>
                                            <ORG_Ctx_2Page_Provider>
                                              <CheckUserWidth_Provider>
                                                <NavbarHomeHeight_Provider>
                                                  <Ctx_sessionStorage_typedFlow_Provider>
                                                    <Dashboard_Ctx_AICHAT_Provider>
                                                      <Dashboard_Ctx_Editor_AICHAT_Provider>
                                                        <Dashboard_Ctx_AICHAT_UploadFile_Provider>
                                                          <Ctx_Signup_Provider>
                                                            {/* {isDashboard ? (
                                                              <Dashboard_D_Layout>
                                                                <GlobalStyle />
                                                                <link
                                                                  rel="icon"
                                                                  href="/favicon.ico"
                                                                />
                                                                <Component
                                                                  {...pageProps}
                                                                />
                                                              </Dashboard_D_Layout>
                                                            ) : (
                                                              <Page_layout>
                                                                <GlobalStyle />
                                                                <link
                                                                  rel="icon"
                                                                  href="/favicon.ico"
                                                                />
                                                                <Component
                                                                  {...pageProps}
                                                                />
                                                              </Page_layout>
                                                            )} */}

                                                            <Layout>
                                                              <GlobalStyle />
                                                              <link
                                                                rel="icon"
                                                                href="/favicon.ico"
                                                              />
                                                              <Component
                                                                {...pageProps}
                                                              />
                                                            </Layout>
                                                          </Ctx_Signup_Provider>
                                                        </Dashboard_Ctx_AICHAT_UploadFile_Provider>
                                                      </Dashboard_Ctx_Editor_AICHAT_Provider>
                                                    </Dashboard_Ctx_AICHAT_Provider>
                                                  </Ctx_sessionStorage_typedFlow_Provider>
                                                </NavbarHomeHeight_Provider>
                                              </CheckUserWidth_Provider>
                                            </ORG_Ctx_2Page_Provider>
                                          </ORG_Ctx_D_ThirdpageData_Provider>
                                        </ORG_Ctx_D_ThirdpageData_Backend_Provider>
                                      </ORG_Ctx_D_SecondpageData_Provider>
                                    </ORG_Ctx_D_SecondpageData_Backend_Provider>
                                  </ORG_Ctx_D_SecondpageFilters_Provider>
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

export default trpc.withTRPC(MyApp)
