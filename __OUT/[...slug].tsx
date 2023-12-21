import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { useCheckSlug_ORG } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router"
import Custom404 from "../pages/404"

export default function Slug() {
  // const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  // const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const { isValidRoute } = useCheckSlug_ORG()

  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { push } = useRouter()

  // let { actualSessionStorage } = useSessionStorage_typedFlow()
  // console.log("actualSessionStorage:", actualSessionStorage)

  // useEffect(() => {
  //   if (actualSessionStorage === KEYS_VALUES_useSessionStorage.SESSION_STORAGE_FIRST) {
  //     push(`welcome`)
  //   }
  // }, [])

  // if (isValidRoute === allRoutes.results) {
  //   if (secondpageFiltersORG === "" && secondpageDataORG === "") {
  //     push("/ORG")
  //     return
  //   }

  //   return (
  //     <>
  //       <INDEX_ORG_Results_D />
  //     </>
  //   )
  // }

  // if (isValidRoute === allRoutes.detail) {
  //   if (thirdpageDataORG === "") {
  //     push("/ORG")
  //     return
  //   }

  //   return (
  //     <>
  //       <INDEX_ORG_Detail_D />
  //     </>
  //   )
  // }

  return (
    <>
      <Custom404 />
    </>
  )
}
