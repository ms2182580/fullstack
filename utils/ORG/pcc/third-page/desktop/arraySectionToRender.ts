import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { PCC_General_D_UsersAlsoViewed } from "@/components/ORG/cards_resources/third-page/pcc/general/desktop/PCC_General_D_UsersAlsoViewed"
import { FC } from "react"

export type ArraySectionToRender_PCC_Type = {
  name: string
  component: FC
}[]

export const arraySectionToRender_PCC: ArraySectionToRender_PCC_Type = [
  { name: ORG_D_Detail_Schedule.name, component: ORG_D_Detail_Schedule },
  { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
  { name: PCC_General_D_UsersAlsoViewed.name, component: PCC_General_D_UsersAlsoViewed },
  { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
  { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
]
