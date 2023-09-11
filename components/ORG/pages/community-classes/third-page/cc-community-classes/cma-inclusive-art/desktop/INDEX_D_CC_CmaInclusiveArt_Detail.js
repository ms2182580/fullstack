import { useRouter } from "next/router.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"

export const INDEX_D_CC_CmaInclusiveArt_Detail = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const router = useRouter()

  if (thirdpageDataORG === "") {
    router.push("/ORG/pcc/cc-community-classes")
    return
  }

  return (
    <>
      <h1>Here Cma Inclusive Art</h1>
    </>
  )
}
