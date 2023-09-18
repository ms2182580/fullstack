import { INDEX_D_CC_Karate_DetailWrapper } from "./styles/INDEX_D_CC_Karate_DetailWrapper.js"

import { useRouter } from "next/router"
import { useCtx_ShowModal } from "../../../../../../../../context/Ctx_ShowModal.js"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { InFrontModal_D_Wrapper } from "../../../../../../../inFront_D/styles/InFrontModal_D_Wrapper.js"
import { ChatAI } from "../../../../../../ChatAI/index.js"
import { CC_Karate_D_BreadcrumbsLastUpdated } from "./CC_Karate_D_BreadcrumbsLastUpdated.js"
import { CC_Karate_D_ContactUs } from "./CC_Karate_D_ContactUs.js"
import { CC_Karate_D_FAQS } from "./CC_Karate_D_FAQS.js"
import { CC_Karate_D_Header } from "./CC_Karate_D_Header.js"
import { CC_Karate_D_MainCard } from "./CC_Karate_D_MainCard.js"
import { CC_Karate_D_OtherClasses } from "./CC_Karate_D_OtherClasses.js"
import { CC_Karate_D_Reviews } from "./CC_Karate_D_Reviews.js"
import { CC_Karate_D_Schedule } from "./CC_Karate_D_Schedule.js"

export const INDEX_D_CC_Karate_Detail = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const router = useRouter()

  if (thirdpageDataORG === "") {
    router.push("/ORG/pcc/cc-community-classes")
    return
  }

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <ChatAI />

      <INDEX_D_CC_Karate_DetailWrapper>
        <CC_Karate_D_Header thirdpageDataORG={thirdpageDataORG} />

        <CC_Karate_D_MainCard thirdpageDataORG={thirdpageDataORG} />

        <CC_Karate_D_Schedule />

        <CC_Karate_D_ContactUs />

        <CC_Karate_D_OtherClasses thirdpageDataORG={thirdpageDataORG} />

        <CC_Karate_D_Reviews
          name={thirdpageDataORG.card.leftPart.title}
          lastName={""}
          rating={thirdpageDataORG.card.leftPart.rating}
          reviews={thirdpageDataORG.card.leftPart.reviews}
        />

        <CC_Karate_D_FAQS
          name={thirdpageDataORG.card.leftPart.title}
          lastName={""}
          locationCity={thirdpageDataORG.card.leftPart.location.city}
          locationStreetNumber={thirdpageDataORG.card.leftPart.location.streetNumber}
          locationStreetName={thirdpageDataORG.card.leftPart.location.streetName}
          locationState={thirdpageDataORG.card.leftPart.location.state}
        />

        <CC_Karate_D_BreadcrumbsLastUpdated thirdpageDataORG={thirdpageDataORG} />
      </INDEX_D_CC_Karate_DetailWrapper>

      <InFrontModal_D_Wrapper
        modalShowedCtx={modalShowedCtx}
        isInDetail
      />
    </>
  )
}
