import { Layout } from "@/components/layout/index/index"
import { Ctx_Signup_Provider } from "@/context/Ctx_Signup"
import { Ctx_sessionStorage_typedFlow_Provider } from "@/context/Ctx_sessionStorage_typedFlow_Provider.js"
import { ORG_Ctx_D_SecondpageData_Backend_Provider } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider.js"
import { ORG_Ctx_D_ThirdpageData_Backend_Provider } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider.js"
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

import { Poppins } from "@next/font/google"
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

function MyApp({ Component, pageProps }) {
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
                                              <NavbarHomeHeight_Provider>
                                                <Ctx_sessionStorage_typedFlow_Provider>
                                                  <Ctx_Signup_Provider>
                                                    <Layout>
                                                      <link
                                                        rel="icon"
                                                        href="/favicon.ico"
                                                      />
                                                      <GlobalStyle
                                                        font={
                                                          poppins.style
                                                            .fontFamily
                                                        }
                                                      />
                                                      <Component
                                                        {...pageProps}
                                                      />
                                                    </Layout>
                                                  </Ctx_Signup_Provider>
                                                </Ctx_sessionStorage_typedFlow_Provider>
                                              </NavbarHomeHeight_Provider>
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

// export const getStaticProps = ({ req }) => {
//   let userAgent
//   if (req) {
//     // if you are on the server and you get a 'req' property from your context
//     userAgent = req.headers["user-agent"] // get the user-agent from the headers
//   } else {
//     userAgent = navigator.userAgent // if you are on the client you can access the navigator from the window object
//   }

//   return {
//     props: { userAgent },
//   }
// }

export default trpc.withTRPC(MyApp)
