import { INDEX_D_CC_Karate_DetailWrapper } from "./styles/INDEX_D_CC_Karate_DetailWrapper.js"

import { useRouter } from "next/router"
import { useCtx_ShowModal } from "../../../../../../../../context/Ctx_ShowModal.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { CC_Karate_D_BreadcrumbsLastUpdated } from "./CC_Karate_D_BreadcrumbsLastUpdated.js"
import { CC_Karate_D_ContactUs } from "./CC_Karate_D_ContactUs.js"
import { CC_Karate_D_FAQS } from "./CC_Karate_D_FAQS.js"
import { CC_Karate_D_Header } from "./CC_Karate_D_Header.js"
import { CC_Karate_D_MainCard } from "./CC_Karate_D_MainCard.js"
import { CC_Karate_D_OtherClasses } from "./CC_Karate_D_OtherClasses.js"
import { CC_Karate_D_Reviews } from "./CC_Karate_D_Reviews.js"

export const INDEX_D_CC_Karate_Detail = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const router = useRouter()

  if (thirdpageDataORG === "") {
    router.push("/ORG/pcc/cc-community-classes")
    return
  }

  const { modalShowedCtx, setModalShowedCtx } = useCtx_ShowModal()

  console.log('modalShowedCtx:', modalShowedCtx)

  return (
    <>
      <INDEX_D_CC_Karate_DetailWrapper>
        <CC_Karate_D_Header
          thirdpageDataORG={thirdpageDataORG}
        />

        <CC_Karate_D_MainCard
          thirdpageDataORG={thirdpageDataORG}
        />

        <CC_Karate_D_ContactUs />

        <CC_Karate_D_OtherClasses />

        <CC_Karate_D_Reviews
          name={""}
          lastName={""}
          rating={""}
          reviews={""}
        />

        <CC_Karate_D_FAQS
          name={""}
          lastName={""}
          locationCity={""}
          locationStreetNumber={""}
          locationStreetName={""}
          locationState={""}
        />

        <CC_Karate_D_BreadcrumbsLastUpdated />
      </INDEX_D_CC_Karate_DetailWrapper>

      <InFrontModal_D_Wrapper
        modalShowedCtx={modalShowedCtx}
        isInDetail
      />
    </>
  )
}
