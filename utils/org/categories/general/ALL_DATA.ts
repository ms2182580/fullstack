import DEFAULT_SVG from "@/assets/icons/org/second-page/DEFAULT_Button_To_Third_Page.svg"
import PAT_SVG from "@/assets/icons/org/second-page/PAT_Button_To_Third_Page.svg"
import PRP_SVG from "@/assets/icons/org/second-page/PRP_Button_To_Third_Page.svg"
import { MapProperties } from "@/components/org/cards/third-page/desktop/ORG_D_Detail_MapComponent"
import { Layout_MainCardRight_VALUES } from "@/components/org/cards/third-page/desktop/styles/ORG_D_Detail_MainCard_RightWrapper"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "../../DATA_ORG_KeyNamesForCards_D"
import { Type_FiltersToUI } from "../../DATA_ORG_KeyNamesForFilters_D"
import {
  BUTTON_TO_THIRDPAGE_TEXT_OPTIONS,
  SPECIFIC_DATA_SECOND_PAGE,
} from "../../second-page/desktop/specificData"
import { ArraySectionToRender_Type } from "../../third-page/InnerNavBar"
import {
  Tooltip_KEYS,
  Tooltip_VALUES,
  TypeOfTooltipSVG_LIKE,
} from "../../third-page/tooltip"
import { arraySectionToRender_Agencies } from "../agencies/arraySectionToRender"
import { filtersUI_Agencies } from "../agencies/filters"
import { tooltipToRender_Agencies } from "../agencies/tooltipToRender"
import { arraySectionToRender_AssistiveSoftware } from "../assistive-software/arraySectionToRender"
import { arraySectionToRender_AssistiveTechnologyHardware } from "../assistive-technology-hardware/arraySectionToRender"
import { filtersUI_AssistiveTechnologyHardware } from "../assistive-technology-hardware/filters"
import { arraySectionToRender_Camps } from "../camps/arraySectionToRender"
import { filtersUI_Camps } from "../camps/filters"
import { mapRender_Camps } from "../camps/mapRender"
import { tooltipToRender_Camps } from "../camps/tooltipToRender"
import { arraySectionToRender_CommunityInclusionClasses } from "../community-inclusion-classes/arraySectionToRender"
import { filtersUI_CommunityInclusionClasses } from "../community-inclusion-classes/filters"
import { tooltipToRender_CommunityInclusionClasses } from "../community-inclusion-classes/tooltipToRender"
import { arraySectionToRender_LegalResources } from "../legal-resources/arraySectionToRender"
import { filtersUI_LegalResources } from "../legal-resources/filters"
import { tooltipToRender_LegalResources } from "../legal-resources/tooltipToRender"
import { arraySectionToRender_MentalHealth } from "../mental-health/arraySectionToRender"
import { filtersUI_MentalHealth } from "../mental-health/filters"
import { mapRender_PMHSS } from "../mental-health/mapRender"
import { tooltipToRender_MentalHealth } from "../mental-health/tooltipToRender"
import { arraySectionToRender_Physicians } from "../physicians/arraySectionToRender"
import { filtersUI_Physicians } from "../physicians/filters"
import { tooltipToRender_Physicians } from "../physicians/tooltipToRender"
import { arraySectionToRender_ResidentialResources } from "../residential-resources/arraySectionToRender"
import { filtersUI_ResidentialResources } from "../residential-resources/filters"
import { tooltipToRender_ResidentialResources } from "../residential-resources/tooltipToRender"
import { arraySectionToRender_SchoolsEducational } from "../schools-educational/arraySectionToRender"
import { filtersUI_SchoolsEducational } from "../schools-educational/filters"
import { tooltipToRender_SchoolsEducational } from "../schools-educational/tooltipToRender"
import { arraySectionToRender_TherapeuticServices } from "../therapeutic-services/arraySectionToRender"
import { filtersUI_Therapeutic } from "../therapeutic-services/filters"
import { mapRender_TherapeuticService } from "../therapeutic-services/mapRender"
import { arraySectionToRender_Vocational } from "../vocational/arraySectionToRender"
import { filtersUI_VocationalResources } from "../vocational/filters"
import { tooltipToRender_Vocational } from "../vocational/tooltipToRender"

export const enum NamesCategories_KEY {
  "AGENCIES" = "Agencies",
  "ASSISTIVE SOFTWARE" = "Assistive Software",
  "ASSISTIVE TECHNOLOGY HARDWARE" = "Assistive technology hardware",
  "CAMPS" = "Camps",
  "COMMUNITY INCLUSION & CLASSES" = "Community Inclusion & Classes",
  "FOUNDATIONS" = "Foundations",
  "LEGAL RESOURCES" = "Legal resources",
  "MENTAL HEALTH PROVIDERS & SERVICES" = "Mental health providers & services",
  "PHYSICIANS" = "Physicians",
  "RESIDENTIAL RESOURCES" = "Residential Resources",
  "SCHOOLS & EDUCATIONAL SERVICES" = "Schools & Educational Services",
  "THERAPEUTIC SERVICES" = "Therapeutic Services",
  "VOCATIONAL RESOURCES" = "Vocational Resources",
  "OTHER" = "Other",
}

export const NamesSubcategories_KEY = {
  [NamesCategories_KEY["AGENCIES"]]: {
    "Government Contracted Office": "Government Contracted Office",
    "Governmental Office": "Governmental Office",
    "Non-Governmental Office": "Non-Governmental Office",
  },
  [NamesCategories_KEY["ASSISTIVE SOFTWARE"]]: {
    "Cloud-based": "Cloud-based",
    "Computer programs": "Computer programs",
    "Mobile Apps": "Mobile Apps",
    Webapps: "Webapps",
  },
  [NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]]: {
    "Accessible Transportation Devices": "Accessible Transportation Devices",
    "Adaptive Sports & Fitness Equipment":
      "Adaptive Sports & Fitness Equipment",
    "Assistive Listening Devices": "Assistive Listening Devices",
    "Braille and Tactile Devices": "Braille and Tactile Devices",
    "Communication Device": "Communication Device",
    "Computer Accessibility Devices": "Computer Accessibility Devices",
    "Environmental Control Devices:": "Environmental Control Devices:",
    "Hearing Aids and Cochlear Implants:":
      "Hearing Aids and Cochlear Implants:",
    "Learning and Cognitive Support Devices":
      "Learning and Cognitive Support Devices",
    "Mobility Aids": "Mobility Aids",
    "Prosthetics and Orthotics:": "Prosthetics and Orthotics:",
    "Visual Aids": "Visual Aids",
  },

  [NamesCategories_KEY["CAMPS"]]: {
    "Afterschool Camp": "Afterschool Camp",
    "Day Camp": "Day Camp",
    "Holiday Camp": "Holiday Camp",
    "Sleep-away Camp": "Sleep-away Camp",
  },

  [NamesCategories_KEY["LEGAL RESOURCES"]]: {
    "Attorney at firm": "Attorney at firm",
    "Independent attorney": "Independent attorney",
    "Indiviudal Advocate": "Indiviudal Advocate",
    "Law firm": "Law firm",
    "Legal Advocate organization": "Legal Advocate organization",
    "Legal consultation Services": "Legal consultation Services",
  },

  [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]]: {
    "CC - Arts & Crafts": "CC - Arts & Crafts",
    "CC - Daily Living/Lifeskills": "CC - Daily Living/Lifeskills",
    "CC - Fitness": "CC - Fitness",
    "CC - Languages & communication ": "CC - Languages & communication ",
    "CC - Performing arts": "CC - Performing arts",
    "CC - Sports": "CC - Sports",
    "Para/Semi-academic skill ": "Para/Semi-academic skill ",
    "Recreational Activities": "Recreational Activities",
    Other: "Other",
  },

  [NamesCategories_KEY["FOUNDATIONS"]]: {
    Associations: "Associations",
    Foundations: "Foundations",
    "Private NFPs": "Private NFPs",
  },

  [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]: {
    Agency: "Agency",
    Clinic: "Clinic",
    Counselor: "Counselor",
    "Government office": "Government office",
    "Group Practice": "Group Practice",
    "Group Therapy": "Group Therapy",
    Hotline: "Hotline",
    "Peer support": "Peer support",
    "Physicians ": "Physicians ",
    "Private Practice ": "Private Practice ",
    "Psychiatric Nurse Practitioners": "Psychiatric Nurse Practitioners",
    Psychiatrists: "Psychiatrists",
    Psychologists: "Psychologists",
    Psychotherapist: "Psychotherapist",
    "Support Groups": "Support Groups",
    Other: "Other",
  },

  [NamesCategories_KEY["PHYSICIANS"]]: {
    "Allergy Physicians": "Allergy Physicians",
    Anesthetists: "Anesthetists",
    "Balance Centers": "Balance Centers",
    "Bed wetting consulants ": "Bed wetting consulants ",
    "Cosmetic/reconstructive surgery": "Cosmetic/reconstructive surgery",
    Dermatologists: "Dermatologists",
    Endermologie: "Endermologie",
    "Hand Surgery": "Hand Surgery",
    "Health Screening and vaccination services ":
      "Health Screening and vaccination services ",
    "Hormone therapy": "Hormone therapy",
    "In-patient clinics & treatment centers":
      "In-patient clinics & treatment centers",
    "Intensity modulated radiation therapy":
      "Intensity modulated radiation therapy",
    "Manipulative treament CTR": "Manipulative treament CTR",
    Neonatologists: "Neonatologists",
    Nephrology: "Nephrology",
    "Oculists MD": "Oculists MD",
    "Offices & cinics of doctors-osteopathy":
      "Offices & cinics of doctors-osteopathy",
    "Offices of clinics and doctors Osteopathy":
      "Offices of clinics and doctors Osteopathy",
    Oncologists: "Oncologists",
    Opthamlogists: "Opthamlogists",
    "Orthopedic surgeons": "Orthopedic surgeons",
    "Osteopathic doctor": "Osteopathic doctor",
    "Otorhinolaryngology (ENT) Physician":
      "Otorhinolaryngology (ENT) Physician",
    Pathologists: "Pathologists",
    "Pediatric Neurology": "Pediatric Neurology",
    "Physicians and surgeons": "Physicians and surgeons",
    "Preventitive Medicine": "Preventitive Medicine",
    "Prostate screening": "Prostate screening",
    "Pulmonary & Respitary diseases": "Pulmonary & Respitary diseases",
  },

  [NamesCategories_KEY["RESIDENTIAL RESOURCES"]]: {
    "Accessible Housing with Universal Design Features":
      "Accessible Housing with Universal Design Features",
    "Assisted Living Facility": "Assisted Living Facility",
    "Cooperative Housing": "Cooperative Housing",
    "Farmsteads or Rural Residential Settings":
      "Farmsteads or Rural Residential Settings",
    "Group Homes (Community Residential Homes)":
      "Group Homes (Community Residential Homes)",
    "Host Family or Shared Living Arrangements":
      "Host Family or Shared Living Arrangements",
    "Intermediate Care Facilities for Individuals with Intellectual Disabilities (ICF/IID)":
      "Intermediate Care Facilities for Individuals with Intellectual Disabilities (ICF/IID)",
    "Residential Care Facilities (RCF/DD)":
      "Residential Care Facilities (RCF/DD)",
    "Respite Care Facilities or Respite Homes":
      "Respite Care Facilities or Respite Homes",
    "Specialized Group Homes ": "Specialized Group Homes ",
    "Supported Living (Supported Apartments or Supported Housing)":
      "Supported Living (Supported Apartments or Supported Housing)",
    "Transitional Housing": "Transitional Housing",
  },

  [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]]: {
    "Early Intervention Programs & Schools":
      "Early Intervention Programs & Schools",
    "Pre-K Programs & Schools": "Pre-K Programs & Schools",
    "K-12 Schools": "K-12 Schools",
    "Home instruction programs/Services": "Home instruction programs/Services",
    "College Programs": "College Programs",
    "Educative therapy": "Educative therapy",
    "Tutors & Special educators ": "Tutors & Special educators ",
    "Certificate & Training programs": "Certificate & Training programs",
    "Trade school": "Trade school",
    "Day programs": "Day programs",
  },

  [NamesCategories_KEY["THERAPEUTIC SERVICES"]]: {
    "ABA therapy [service]": "ABA therapy [service]",
    "Aquatic therapy / Aquatic therapists":
      "Aquatic therapy / Aquatic therapists",
    "Art therapy": "Art therapy",
    "Audiological therapy/ Audiologists": "Audiological therapy/ Audiologists",
    "Bovine therapy": "Bovine therapy",
    "Chelation therapy (Heavy metal removal)":
      "Chelation therapy (Heavy metal removal)",
    "Craniosacral therapy": "Craniosacral therapy",
    "Equine therapy": "Equine therapy",
    "Fitness therapy": "Fitness therapy",
    "Hand therapy": "Hand therapy",
    "Horse physical therapy": "Horse physical therapy",
    Kenesiotherapy: "Kenesiotherapy",
    "Lymphedema therapy (Massages to help circulation)":
      "Lymphedema therapy (Massages to help circulation)",
    "Music therapy": "Music therapy",
    "Occupational Therapy": "Occupational Therapy",
    "Physical Therapy": "Physical Therapy",
    "Radiation therapy": "Radiation therapy",
    "Rehabilitation services": "Rehabilitation services",
    "Relaxation therapy": "Relaxation therapy",
    "Speech Therapy": "Speech Therapy",
    "Sports medicine and injuries": "Sports medicine and injuries",
    "TMJ Treatment (Jaw issue, stiffness treatment)":
      "TMJ Treatment (Jaw issue, stiffness treatment)",
    "Vision therapy": "Vision therapy",
    Other: "Other",
  },

  [NamesCategories_KEY["VOCATIONAL RESOURCES"]]: {
    "Apprenticeships and Internships": "Apprenticeships and Internships",
    "Community College or Adult Education Courses":
      "Community College or Adult Education Courses",
    "Community-Based Employment": "Community-Based Employment",
    "Creative Arts and Crafts Programs (Art industry training)":
      "Creative Arts and Crafts Programs (Art industry training)",
    "Day Training and Habilitation Programs":
      "Day Training and Habilitation Programs",
    "Education opportunity": "Education opportunity",
    "Entrepreneurship Programs": "Entrepreneurship Programs",
    "Job & position consutlation programs (Coaches & Mentoring)":
      "Job & position consutlation programs (Coaches & Mentoring)",
    "Job Coaching and Job Placement Services":
      "Job Coaching and Job Placement Services",
    "Job Training Centers (Trains for position)":
      "Job Training Centers (Trains for position)",
    "Online learning opportunities": "Online learning opportunities",
    "Pre-training & sills development program for inclusion":
      "Pre-training & sills development program for inclusion",
    "Sheltered Workshops (DD jobs worked together on fixed task)":
      "Sheltered Workshops (DD jobs worked together on fixed task)",
    "Supported Employment Programs (tech social skills)":
      "Supported Employment Programs (tech social skills)",
    "Technology and Computer Skills Training":
      "Technology and Computer Skills Training",
    "Training programs and oppoirtunities":
      "Training programs and oppoirtunities",
    "Transition to work programs": "Transition to work programs",
    "Vocational Rehabilitation Programs (recommends Jobs)":
      "Vocational Rehabilitation Programs (recommends Jobs)",
  },

  [NamesCategories_KEY["OTHER"]]: {
    Job: "Job",
    Other: "Other",
    "Post (Event)": "Post (Event)",
    "Post (Job)": "Post (Job)",
  },
}

export const enum BUTTON_MAIN_CARD_TEXT_VALUES_ENUM {
  ADD_TO_CARE_PLAN = "Add to Care Plan",
}

type BUTTON_MAIN_CARD_TEXT_VALUES = BUTTON_MAIN_CARD_TEXT_VALUES_ENUM

export const enum CHAT_AI_ENUM {
  DEFAULT = "DEFAULT",
  IS_VOCATIONAL = "IS_VOCATIONAL",
}

export type CHAT_AI_VALUES = keyof typeof CHAT_AI_ENUM | null

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
      [SPECIFIC_DATA_SECOND_PAGE.FILTERS]?: Type_FiltersToUI
    }

    [DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE]?: {
      [DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS]?: ArraySectionToRender_Type
      [DATA_ORG_KeyNamesForCards_D_KEYS.LAYOUT_MAIN_CARD_RIGHT]?: Layout_MainCardRight_VALUES
      [DATA_ORG_KeyNamesForCards_D_KEYS.HOW_IS_MAP]?: MapProperties
      [DATA_ORG_KeyNamesForCards_D_KEYS.TOOLTIP]?: {
        [Tooltip_KEYS.WHAT_DISPLAY]: Tooltip_VALUES
        [Tooltip_KEYS.CUSTOM_DATA]?: {
          [Tooltip_KEYS.SVG]?: TypeOfTooltipSVG_LIKE
          [Tooltip_KEYS.TEXT]?: {
            title: string
            paragraphs: string[]
          }
        }
      }
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_ICON]?: boolean
      [DATA_ORG_KeyNamesForCards_D_KEYS.BUTTON_MAIN_CARD_TEXT]?: BUTTON_MAIN_CARD_TEXT_VALUES
      [DATA_ORG_KeyNamesForCards_D_KEYS.CHAT_AI]?: CHAT_AI_VALUES
    }
  }
}

export const namesCategoriesOrder = [
  [NamesCategories_KEY["AGENCIES"]],
  [NamesCategories_KEY["ASSISTIVE SOFTWARE"]],
  [NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]],
  [NamesCategories_KEY["CAMPS"]],
  [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]],
  [NamesCategories_KEY["FOUNDATIONS"]],
  [NamesCategories_KEY["LEGAL RESOURCES"]],
  [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]],
  [NamesCategories_KEY["PHYSICIANS"]],
  [NamesCategories_KEY["RESIDENTIAL RESOURCES"]],
  [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]],
  [NamesCategories_KEY["THERAPEUTIC SERVICES"]],
  [NamesCategories_KEY["VOCATIONAL RESOURCES"]],
  [NamesCategories_KEY["OTHER"]],
]

// * The actual implementation on the UI rely on the order of this object
export const ALL_DATA: ALL_DATA_Type = {
  [NamesCategories_KEY["AGENCIES"]]: {
    CATEGORY: NamesCategories_KEY["AGENCIES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["AGENCIES"]]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_Agencies,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_Agencies,
      TOOLTIP: tooltipToRender_Agencies,
    },
  },

  [NamesCategories_KEY["ASSISTIVE SOFTWARE"]]: {
    CATEGORY: NamesCategories_KEY["ASSISTIVE SOFTWARE"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["ASSISTIVE SOFTWARE"]]
    ),

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT:
        BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["where to buy"],

      SVG: PAT_SVG,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_AssistiveSoftware,
      HOW_IS_MAP: {
        HOW_MANY: null,
      },
      TOOLTIP: { [Tooltip_KEYS.WHAT_DISPLAY]: Tooltip_VALUES.NO_DISPLAY },
    },
  },

  [NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]]: {
    CATEGORY: NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[
        NamesCategories_KEY["ASSISTIVE TECHNOLOGY HARDWARE"]
      ]
    ),

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT:
        BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["where to buy"],

      SVG: PAT_SVG,

      FILTERS: filtersUI_AssistiveTechnologyHardware,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_AssistiveTechnologyHardware,

      HOW_IS_MAP: {
        HOW_MANY: null,
      },
      TOOLTIP: { [Tooltip_KEYS.WHAT_DISPLAY]: Tooltip_VALUES.NO_DISPLAY },
    },
  },

  [NamesCategories_KEY["CAMPS"]]: {
    CATEGORY: NamesCategories_KEY["CAMPS"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["CAMPS"]]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_Camps,
    },
    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_Camps,
      HOW_IS_MAP: mapRender_Camps,
      TOOLTIP: tooltipToRender_Camps,
    },
  },

  [NamesCategories_KEY["LEGAL RESOURCES"]]: {
    CATEGORY: NamesCategories_KEY["LEGAL RESOURCES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["LEGAL RESOURCES"]]
    ),
    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT:
        BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["request consultation"],

      FILTERS: filtersUI_LegalResources,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_LegalResources,
      TOOLTIP: tooltipToRender_LegalResources,
    },
  },

  [NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]]: {
    CATEGORY: NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[
        NamesCategories_KEY["COMMUNITY INCLUSION & CLASSES"]
      ]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_CommunityInclusionClasses,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_CommunityInclusionClasses,
      TOOLTIP: tooltipToRender_CommunityInclusionClasses,
    },
  },

  [NamesCategories_KEY["FOUNDATIONS"]]: {
    CATEGORY: NamesCategories_KEY["FOUNDATIONS"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["FOUNDATIONS"]]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_Agencies,
    },
  },

  [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]: {
    CATEGORY: NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[
        NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]
      ]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_MentalHealth,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_MentalHealth,
      TOOLTIP: tooltipToRender_MentalHealth,
      HOW_IS_MAP: mapRender_PMHSS,
    },
  },

  [NamesCategories_KEY["PHYSICIANS"]]: {
    CATEGORY: NamesCategories_KEY["PHYSICIANS"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["PHYSICIANS"]]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_Physicians,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_Physicians,
      TOOLTIP: tooltipToRender_Physicians,
    },
  },

  [NamesCategories_KEY["RESIDENTIAL RESOURCES"]]: {
    CATEGORY: NamesCategories_KEY["RESIDENTIAL RESOURCES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["RESIDENTIAL RESOURCES"]]
    ),

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT: BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["contact us"],
      SVG: PRP_SVG,
      FILTERS: filtersUI_ResidentialResources,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_ResidentialResources,
      TOOLTIP: tooltipToRender_ResidentialResources,
    },
  },

  [NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]]: {
    CATEGORY: NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[
        NamesCategories_KEY["SCHOOLS & EDUCATIONAL SERVICES"]
      ]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_SchoolsEducational,
    },
    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_SchoolsEducational,
      TOOLTIP: tooltipToRender_SchoolsEducational,
    },
  },

  [NamesCategories_KEY["THERAPEUTIC SERVICES"]]: {
    CATEGORY: NamesCategories_KEY["THERAPEUTIC SERVICES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["THERAPEUTIC SERVICES"]]
    ),

    SECOND_PAGE: {
      FILTERS: filtersUI_Therapeutic,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_TherapeuticServices,
      LAYOUT_MAIN_CARD_RIGHT: Layout_MainCardRight_VALUES.LIKE_MENTAL_HEALTH,
      HOW_IS_MAP: mapRender_TherapeuticService,
      BUTTON_MAIN_CARD_ICON: true,
    },
  },

  [NamesCategories_KEY["VOCATIONAL RESOURCES"]]: {
    CATEGORY: NamesCategories_KEY["VOCATIONAL RESOURCES"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["VOCATIONAL RESOURCES"]]
    ),

    SECOND_PAGE: {
      BUTTON_TO_THIRDPAGE_TEXT: BUTTON_TO_THIRDPAGE_TEXT_OPTIONS["apply now"],
      FILTERS: filtersUI_VocationalResources,
    },

    THIRD_PAGE: {
      SECTIONS: arraySectionToRender_Vocational,
      TOOLTIP: tooltipToRender_Vocational,
      CHAT_AI: "IS_VOCATIONAL",
    },
  },

  [NamesCategories_KEY["OTHER"]]: {
    CATEGORY: NamesCategories_KEY["OTHER"],
    SUB_CATEGORY: Object.values(
      NamesSubcategories_KEY[NamesCategories_KEY["OTHER"]]
    ),
  },
}
