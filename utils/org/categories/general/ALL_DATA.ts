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
import { Tooltip_VALUES } from "../../third-page/tooltip"
import { arraySectionToRender_TherapeuticServices } from "../therapeutic-services/arraySectionToRender"
import { mapRender_TherapeuticService } from "../therapeutic-services/mapRender"

export const enum NamesCategories_KEY {
  "AGENCIES" = "Agencies",
  "ASSISTIVE HARDWARE" = "Assistive Hardware",
  "ASSISTIVE SOFTWARE" = "Assistive Software",
  "ATTORNEYS" = "Attorneys",
  "CAMPS" = "Camps",
  "COMMUNITY INCLUSION & CLASSES" = "Community Inclusion & Classes",
  "FOUNDATIONS & ASSOCIATIONS" = "Foundations & Associations",
  "PHYSICIANS" = "Physicians",
  "RESIDENTIAL PROGRAMS" = "Residential Programs",
  "SCHOOLS & EDUCATIONAL SERVICES" = "Schools & Educational Services",
  "THERAPEUTIC SERVICES" = "Therapeutic Services",
  "VOCATIONAL RESOURCES" = "Vocational Resources",
  "OTHER" = "Other",
}

export const enum BUTTON_MAIN_CARD_TEXT_VALUES_ENUM {
  ADD_TO_CARE_PLAN = "Add to Care Plan",
}

type BUTTON_MAIN_CARD_TEXT_VALUES = BUTTON_MAIN_CARD_TEXT_VALUES_ENUM

type ALL_DATA_Type = {
  [value in NamesCategories_KEY | string]: {
    [DATA_ORG_KeyNamesForCards_D_KEYS.CATEGORY]: NamesCategories_KEY | string
    [DATA_ORG_KeyNamesForCards_D_KEYS.SUB_CATEGORY]: string[]

    [SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]?: {
      [SPECIFIC_DATA_SECOND_PAGE.BUTTON_TO_THIRDPAGE_TEXT]?: BUTTON_TO_THIRDPAGE_TEXT_OPTIONS
      [SPECIFIC_DATA_SECOND_PAGE.SVG]?:
        | typeof PAT_SVG
        | typeof PRP_SVG
        | typeof DEFAULT_SVG
    }

    [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]?: {
      [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]?: ArraySectionToRender_Type
      [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]?: Layout_MainCardRight_VALUES
      [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]?: MapProperties
      [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]?: Tooltip_VALUES
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]?: boolean
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT]?: BUTTON_MAIN_CARD_TEXT_VALUES
    }
  }
}

/* 
!FH0

- Be sure that everything is okay here: categories → 2° page and 3° page

https://docs.google.com/spreadsheets/d/1rME7CQIhVgxqa5LdrZ7rjgkG8g_EOGV29Gv32M2V9uA/edit#gid=0

- Implement also the filters
*/

export const namesCategoriesOrder = [
  [NamesCategories_KEY["AGENCIES"]],
  [NamesCategories_KEY["ASSISTIVE HARDWARE"]],
  [NamesCategories_KEY["ASSISTIVE SOFTWARE"]],
  [NamesCategories_KEY["ATTORNEYS"]],
  [NamesCategories_KEY["CAMPS"]],
  [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]],
  [NamesCategories_KEY["FOUNDATIONS & ASSOCIATIONS"]],
  [NamesCategories_KEY["PHYSICIANS"]],
  [NamesCategories_KEY["RESIDENTIAL PROGRAMS"]],
  [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]],
  [NamesCategories_KEY["THERAPEUTIC SERVICES"]],
  [NamesCategories_KEY["VOCATIONAL RESOURCES"]],
  [NamesCategories_KEY["OTHER"]],
]

export const ALL_DATA: ALL_DATA_Type = {
  [NamesCategories_KEY["AGENCIES"]]: {
    CATEGORY: NamesCategories_KEY["AGENCIES"],
    SUB_CATEGORY: ["Governmental", "Non-Governmental"],
  },

  [NamesCategories_KEY["ASSISTIVE HARDWARE"]]: {
    CATEGORY: NamesCategories_KEY["ASSISTIVE HARDWARE"],
    SUB_CATEGORY: [
      "Accessible vehicles",
      "Adaptations to computers, including specialized software",
      "Adaptive switches, toys, etc.",
      "Adaptive vehicles (buses, vans, cars)",
      "Auditory trainers, TTY/TDDs, Braille Readers/ Notetakers",
      "Augmentative and Alternative Communication (AAC) devices ",
      "Bathing",
      "Books on tape or other formats",
      "Car seat",
      "Environmental Control Units",
      "Equiptment Accessories, Cases, carriers and bags",
      "Eye gaze technology",
      "Gaming",
      "Hearing aid",
      "Learning",
      "Lifts and ramps",
      "Magnifying glasses, CCTVs, calculators, tape recorders",
      "Recreational devices",
      "Scooters, standers, wheelchairs",
      "Seat positioning",
      "Smart home devices",
      "Switches",
      "Tablets",
      "Toileting ",
      "Toys",
      "wheeled mobility",
      "Writing Aids",
    ],

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT:
        BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["where to buy"],

      SVG: PAT_SVG,
    },
  },
  [NamesCategories_KEY["ASSISTIVE SOFTWARE"]]: {
    CATEGORY: NamesCategories_KEY["ASSISTIVE SOFTWARE"],
    SUB_CATEGORY: [
      "Cloud-based",
      "Computer programs",
      "Mobile Apps",
      "Webapps",
    ],

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT:
        BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["where to buy"],

      SVG: PAT_SVG,
    },
  },

  [NamesCategories_KEY["ATTORNEYS"]]: {
    CATEGORY: NamesCategories_KEY["ATTORNEYS"],
    SUB_CATEGORY: [
      "Attorney at firm ",
      "Independent attorney",
      "Indiviudal Advocate",
      "Law firm",
      "Legal Advocate organization",
      "Legal consultation Services",
    ],
  },

  [NamesCategories_KEY["CAMPS"]]: {
    CATEGORY: NamesCategories_KEY["CAMPS"],
    SUB_CATEGORY: [
      "Comunity Program",
      "Indiviudal (Instructor)",
      "Organization (vendor)",
      "Service (Community Class)",
    ],
  },

  [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]]: {
    CATEGORY: NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"],
    SUB_CATEGORY: [
      "Afterschool Camp",
      "Day Camp",
      "Holiday Camp",
      "Sleep-away Camp",
    ],
  },

  [NamesCategories_KEY["FOUNDATIONS & ASSOCIATIONS"]]: {
    CATEGORY: NamesCategories_KEY["FOUNDATIONS & ASSOCIATIONS"],
    SUB_CATEGORY: ["Associations", "Foundations", "Private NFPs"],
  },

  [NamesCategories_KEY["PHYSICIANS"]]: {
    CATEGORY: NamesCategories_KEY["PHYSICIANS"],
    SUB_CATEGORY: [
      "Allergy Physicians",
      "Anesthetists",
      "Balance Centers",
      "Bed wetting consulants ",
      "Cosmetic/reconstructive surgery",
      "Dermatologists",
      "Endermologie",
      "Hand Surgery",
      "Health Screening and vaccination services ",
      "Hormone therapy",
      "In-patient clinics & treatment centers",
      "Intensity modulated radiation therapy",
      "Manipulative treament CTR",
      "Neonatologists",
      "Nephrology",
      "Oculists MD",
      "Offices & cinics of doctors-osteopathy",
      "Offices of clinics and doctors Osteopathy",
      "Oncologists",
      "Opthamlogists",
      "Orthopedic surgeons",
      "Osteopathic doctor",
      "Otorhinolaryngology (ENT) Physician",
      "Pathologists",
      "Pediatric Neurology",
      "Physicians and surgeons",
      "Preventitive Medicine",
      "Prostate screening",
      "Pulmonary & Respitary diseases",
    ],
  },

  [NamesCategories_KEY["RESIDENTIAL PROGRAMS"]]: {
    CATEGORY: NamesCategories_KEY["RESIDENTIAL PROGRAMS"],
    SUB_CATEGORY: [
      "Accessible Housing with Universal Design Features",
      "Assisted Living Facility",
      "Cooperative Housing",
      "Farmsteads or Rural Residential Settings",
      "Group Homes (Community Residential Homes)",
      "Host Family or Shared Living Arrangements",
      "Intermediate Care Facilities for Individuals with Intellectual Disabilities (ICF/IID)",
      "Residential Care Facilities (RCF/DD)",
      "Respite Care Facilities or Respite Homes",
      "Specialized Group Homes ",
      "Supported Living (Supported Apartments or Supported Housing)",
      "Transitional Housing",
    ],
  },
  [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]]: {
    CATEGORY: NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"],
    SUB_CATEGORY: [
      "Boarding School",
      "College Programs",
      "Day School",
      "Educative therapy",
      "Home instruction programs/Services",
      "Tutors & Special educators ",
    ],
  },

  [NamesCategories_KEY["THERAPEUTIC SERVICES"]]: {
    CATEGORY: NamesCategories_KEY["THERAPEUTIC SERVICES"],
    SUB_CATEGORY: [
      "ABA therapy [service]",
      "Aquatic therapy / Aquatic therapists",
      "Art therapy",
      "Audiological therapy/ Audiologists",
      "Bovine therapy",
      "Chelation therapy (Heavy metal removal)",
      "Craniosacral therapy",
      "Equine therapy",
      "Fitness therapy",
      "Hand therapy",
      "Horse physical therapy",
      "Kenesiotherapy",
      "Lymphedema therapy (Massages to help circulation)",
      "Music therapy",
      "Occupational Therapy",
      "Other ",
      "Physical Therapy",
      "Radiation therapy",
      "Rehabilitation services",
      "Relaxation therapy",
      "Speech Therapy",
      "Sports medicine and injuries",
      "TMJ Treatment (Jaw issue, stiffness treatment)",
      "Vision therapy",
    ],

    SECOND_PAGE: {},

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_TherapeuticServices,
      LAYOUT_MAIN_CARD_RIGHT: Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
      HOW_IS_MAP: mapRender_TherapeuticService,
      BUTTON_MAIN_CARD_ICON: true,
    },
  },

  [NamesCategories_KEY["VOCATIONAL RESOURCES"]]: {
    CATEGORY: NamesCategories_KEY["VOCATIONAL RESOURCES"],
    SUB_CATEGORY: [
      "Education opportunity",
      "Entrepreneurship Programs",
      "Job & position consutlation programs (Coaches & Mentoring)",
      "Job Lisitng",
      "Pre-training & sills development program for inclusion",
      "Sheltered Workshops (DD jobs worked together on fixed task)",
      "Training programs and oppoirtunities",
      "Transition to work programs",
    ],
  },
  [NamesCategories_KEY["OTHER"]]: {
    CATEGORY: NamesCategories_KEY["OTHER"],
    SUB_CATEGORY: ["Event", "Job", "Post"],
  },
}
