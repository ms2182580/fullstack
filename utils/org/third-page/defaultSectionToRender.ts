import { ORG_D_Detail_ContactUs } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import {
  HEADER_TITLE,
  ORG_D_Detail_Schedule,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { ArraySectionToRender_Type } from "./InnerNavBar"

export const defaultSectionToRender: ArraySectionToRender_Type = [
  {
    name: ORG_D_Detail_Schedule.name,
    component: ORG_D_Detail_Schedule,

    props_component: {
      [HEADER_TITLE.KEY]: "Schedule an Appointment",
    },

    toNavbar: {
      id: "schedule",
    },
  },
  {
    name: ORG_D_Detail_ContactUs.name,
    component: ORG_D_Detail_ContactUs,
    toNavbar: {
      id: "contactus",
      jsx: "contact us",
    },
  },
  {
    name: ORG_D_Detail_Reviews.name,
    component: ORG_D_Detail_Reviews,
    toNavbar: {
      id: "reviews",
    },
  },
  {
    name: ORG_D_Detail_FAQS.name,
    component: ORG_D_Detail_FAQS,
    toNavbar: {
      id: "faqs",
      jsx: "FAQs",
    },
  },
]
