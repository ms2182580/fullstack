import { INDEX_ORG_Detail_D } from "@/components/org/cards/third-page/desktop/INDEX_ORG_Detail_D"
import { INDEX_ORG_Detail_M } from "@/components/org/cards/third-page/mobile/INDEX_ORG_Details_M"
import { useCheckUserWidth } from "@/context/CheckUserWidth"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ORG_Detail() {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()
  const { isMobile }: any = useCheckUserWidth()

  const { push, query } = useRouter()

  useEffect(() => {
    if (
      thirdpageDataORG === "" &&
      !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      push(`/${ALL_ROUTES.ORG}`)
      return
    }
  }, [])

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_ORG_Detail_D />
        </>
      ) : (
        <>
          <INDEX_ORG_Detail_M />
        </>
      )}
    </>
  )
}
