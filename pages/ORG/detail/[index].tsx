import { INDEX_ORG_Detail_D } from "@/components/ORG/cards/third-page/desktop/INDEX_ORG_Detail_D"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function ORG_Detail() {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { push } = useRouter()

  useEffect(() => {
    if (thirdpageDataORG === "") {
      push("/ORG")
      return
    }
  }, [])

  if (thirdpageDataORG !== "") {
    return (
      <>
        <INDEX_ORG_Detail_D />
      </>
    )
  }
}
