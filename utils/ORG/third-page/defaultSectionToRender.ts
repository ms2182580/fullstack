import { ORG_D_Detail_ContactUs } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { FC } from "react"

export type WhichDefaultId = "schedule" | "contactus" | "reviews" | "faqs"

export type DefaultSectionToRender_Type = { component: FC; defaultId: WhichDefaultId }[]

export const defaultSectionToRender: DefaultSectionToRender_Type = [
  { component: ORG_D_Detail_Schedule, defaultId: "schedule" },
  { component: ORG_D_Detail_ContactUs, defaultId: "contactus" },
  { component: ORG_D_Detail_Reviews, defaultId: "reviews" },
  { component: ORG_D_Detail_FAQS, defaultId: "faqs" },
]
