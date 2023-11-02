import { ORG_D_Detail_ContactUs } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/ORG/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { PCMPS_General_D_Booking } from "@/components/ORG/cards_resources/third-page/pcmps/general/desktop/PCMPS_General_D_Booking"
import { FC } from "react"

export type ArraySectionToRender_PCMPS_Type = {
  name: string
  component: FC
}[]

export const arraySectionToRender_PCMPS: ArraySectionToRender_PCMPS_Type = [
  { name: PCMPS_General_D_Booking.name, component: PCMPS_General_D_Booking },
  // { name: PCMPS_General_D_PackingList.name, component: PCMPS_General_D_PackingList },
  { name: ORG_D_Detail_ContactUs.name, component: ORG_D_Detail_ContactUs },
  { name: ORG_D_Detail_Reviews.name, component: ORG_D_Detail_Reviews },
  { name: ORG_D_Detail_FAQS.name, component: ORG_D_Detail_FAQS },
]
