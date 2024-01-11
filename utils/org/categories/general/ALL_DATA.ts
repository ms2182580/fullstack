import DEFAULT_SVG from "@/assets/icons/org/second-page/DEFAULT_Button_To_Third_Page.svg"
import PAT_SVG from "@/assets/icons/org/second-page/PAT_Button_To_Third_Page.svg"
import PRP_SVG from "@/assets/icons/org/second-page/PRP_Button_To_Third_Page.svg"
import { MapProperties } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_MapComponent"
import { Layout_MainCardRight_VALUES } from "@/components/org/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import {
  BUTTON_TO_THIRDPAGE_TEXT_OPTIONS,
  SPECIFIC_DATA_SECOND_PAGE,
} from "../../second-page/desktop/specificData"
import { ArraySectionToRender_Type } from "../../third-page/InnerNavBar"
import { arraySectionToRender_TherapeuticService } from "../therapeutic-service/arraySectionToRender"
import { mapRender_TherapeuticService } from "../therapeutic-service/mapRender"

/*
 * Write here all the names of the categories to be used in the future, right now only "THERAPEUTIC SERVICES" is on the list
 */
export const enum ALL_CATEGORY_KEYS {
  "THERAPEUTIC SERVICES" = "THERAPEUTIC SERVICES",
}

type ALL_DATA_Type = {
  [key in ALL_CATEGORY_KEYS | string]: {
    [DATA_ORG_KeyNamesForCards_D_KEYS.CATEGORY]: ALL_CATEGORY_KEYS | string
    [DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]: string[]

    [SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]: {
      [SPECIFIC_DATA_SECOND_PAGE.BUTTON_TO_THIRDPAGE_TEXT]?: BUTTON_TO_THIRDPAGE_TEXT_OPTIONS
      [SPECIFIC_DATA_SECOND_PAGE.SVG]?: {
        pat: typeof PAT_SVG
        prp: typeof PRP_SVG
        default: typeof DEFAULT_SVG
      }
    }

    [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]: {
      [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]?: ArraySectionToRender_Type
      [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]?: Layout_MainCardRight_VALUES
      [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]?: MapProperties
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]?: boolean
    }
  }
}

export const ALL_DATA: ALL_DATA_Type = {
  [ALL_CATEGORY_KEYS["THERAPEUTIC SERVICES"]]: {
    CATEGORY: ALL_CATEGORY_KEYS["THERAPEUTIC SERVICES"],
    SUB_CATEGORY: [
      "Speech Therapy",
      "Equine therapy",
      "Vision therapy",
      "Audiological therapy/ Audiologists",
      "Occupational Therapy",
      "Aquatic therapy / Aquatic therapists",
      "TMJ Treatment (Jaw issue, stiffness treatment)",
      "Lymphedema therapy (Massages to help circulation)",
      "Kenesiotherapy",
      "Myotherapy",
      "Music therapy",
      "Mesotherapy Treatment",
      "Educative Therapy",
      "Craniosacral Therapy",
      "Oncology Massage Therapy",
      "Respiratory Therapy",
      "Polarity Therapy",
      "Hand therapy",
      "Relaxation Therapy",
      "Horse Physical Therapy",
    ],

    SECOND_PAGE: {},

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_TherapeuticService,
      LAYOUT_MAIN_CARD_RIGHT: Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
      HOW_IS_MAP: mapRender_TherapeuticService,
      BUTTON_MAIN_CARD_ICON: true,
    },
  },
}
