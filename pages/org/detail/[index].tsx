import { INDEX_ORG_Detail_D } from "@/components/org/cards/third-page/desktop/INDEX_ORG_Detail_D"
import { INDEX_ORG_Detail_M } from "@/components/org/cards/third-page/mobile/INDEX_ORG_Details_M"
import { useCheckUserWidth } from "@/context/CheckUserWidth"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function ORG_Detail() {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()
  const { isMobile }: any = useCheckUserWidth()

  const { query } = useRouter()

  /* useEffect(() => {
    if (
      thirdpageDataORG === "" ||
      !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      push(`/${ALL_ROUTES.ORG}`)
      return
    }
  }, []) */

  const shouldRenderThePage = useMemo(() => {
    if (
      thirdpageDataORG !== "" ||
      query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      return true
    }

    return false
  }, [thirdpageDataORG, query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]])

  return (
    <>
      {shouldRenderThePage && (
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
      )}
    </>
  )
}
