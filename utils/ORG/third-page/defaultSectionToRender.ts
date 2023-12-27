import { ORG_D_Detail_ContactUs } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_ContactUs"
import { ORG_D_Detail_FAQS } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_FAQS"
import { ORG_D_Detail_Reviews } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Reviews"
import { ORG_D_Detail_Schedule } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Schedule"
import { ArraySectionToRender_Type } from "./InnerNavBar"

export const defaultSectionToRender: ArraySectionToRender_Type = [
  {
    /* 
    !FH0
    Make all the component receive the data like ORG_D_Detail_Reviews component does
    */
    name: ORG_D_Detail_Schedule.name,
    component: ORG_D_Detail_Schedule,
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
