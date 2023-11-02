import { useRouter } from "next/router"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { INDEX_ORG_Detail_D } from "../../../../../cards/third-page/desktop/INDEX_ORG_Detail_D"
import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Admission } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Admission"
import { SectionToRender_InnerData_ARG } from "@/utils/ORG/third-page/SectionToRender"

export const INDEX_D_SES_PSES_Detail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pses/ses-preschools")

    return
  }

  const theArrayOfObject: SectionToRender_InnerData_ARG = [
    { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
    {name: ORG_D_Detail_Admission.name, component: ORG_D_Detail_Admission},
    //Admissions
    //School Academics
    //Student Demographics
    { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
    { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
    //{ name: ORG_D_Detail_AditionalResources.name, //component: ORG_D_Detail_AditionalResources },
    //{ name: ORG_D_Detail_HelpfulWebResources.name, //component: ORG_D_Detail_HelpfulWebResources },
   
    
  ]

  return (
    <>
      <INDEX_ORG_Detail_D sectionToRender={theArrayOfObject} />
    </>
  )
}
