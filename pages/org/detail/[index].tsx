import { LoadingComponent } from "@/components/loading/LoadingComponent"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { useWidthSize } from "@/utils/useWidthSize"
import dynamic from "next/dynamic"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

const INDEX_ORG_Detail_D = dynamic(
  () =>
    import("@/components/org/cards/third-page/desktop/INDEX_ORG_Detail_D").then(
      (res) => res.INDEX_ORG_Detail_D
    ),
  {
    ssr: false,
  }
)
const INDEX_ORG_Detail_M = dynamic(
  () =>
    import("@/components/org/cards/third-page/mobile/INDEX_ORG_Details_M").then(
      (res) => res.INDEX_ORG_Detail_M
    ),
  {
    ssr: false,
  }
)

export default function ORG_Detail() {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()
  // const { isMobile }: any = useCheckUserWidth()
  const { isMobile } = useWidthSize()

  const { thirdpageDataORG: thirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { query } = useRouter()
  const { push } = useNavigation()

  useEffect(() => {
    if (thirdpageDataORG_Backend === "") {
      push(`/${ALL_ROUTES.ORG}`)
    }
  }, [thirdpageDataORG_Backend])

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
      thirdpageDataORG_Backend !== "" ||
      query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
    ) {
      return true
    }

    return false
  }, [thirdpageDataORG, query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]])

  if (isMobile === undefined) {
    return <LoadingComponent />
  }

  return (
    <>
      {shouldRenderThePage && (
        <>{isMobile ? <INDEX_ORG_Detail_M /> : <INDEX_ORG_Detail_D />}</>
      )}
    </>
  )
}
