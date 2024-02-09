import { ORG_Filters_D_Checkbox2 } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "@/components/org/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "@/components/org/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "@/components/org/filters/desktop/ORG_Filters_D_Range2"
import {
  ORG_FILTERS_DATA_D,
  ORG_FILTERS_KEYS_D,
} from "@/utils/ORG_FiltersCategories"
import {
  TypeAllFiltersCheckbox,
  TypeAllFiltersRange,
  Type_AllMoreFilters,
  Type_FiltersToUI,
} from "../../DATA_ORG_KeyNamesForFilters_D"

const allActivities_Data = {
  allActivities: {
    buttonName: "Activities",
    categoriesToDisplay: ["All Activities"],
  },

  fitness: {
    buttonName: "Fitness",
    categoriesToDisplay: [
      "Boxing",
      "Martial Arts",
      "Dance",
      "Tenis",
      "Cycling Training",
      "Futbol",
      "Yoga and Pilates",
      "Aquatic Fitnes",
    ],
  },
  art: {
    buttonName: "Art",
    categoriesToDisplay: [
      "Painting",
      "Drawing",
      "Arts & Crafts",
      "Sculpture",
      "Photography",
      "Printmaking",
      "Digital Art",
      "Mixed Media",
      "Performance Art",
      "Installation Art",
      "Textile Art",
      "Pottery and Ceramics",
      "Mural Art",
      "Film and Video Art",
    ],
  },
  music: {
    buttonName: "Music",
    categoriesToDisplay: [
      "Dance",
      "Singing",
      "Guitar",
      "Percussion",
      "Wind Instruments",
      "Keyboard Instruments",
      "Electronic Music",
      "History",
      "Theory",
      "Composition",
      "Production and Recording",
    ],
  },
  ASLLanguages: {
    buttonName: "ASL & Languages",
    categoriesToDisplay: [
      "Sign Language",
      "Read, Write & Spell",
      "Book Club",
      "Listening Comprehension",
      "Interpreting and Translation",
      "Cultural Learning",
      "Language Preservation",
    ],
  },
  stem: {
    buttonName: "STEM",
    categoriesToDisplay: [
      "Coding",
      "Robotics",
      "Typing",
      "Data Science",
      "Environmental Science",
      "Computer Science",
      "Artificial Intelligence",
      "Biotechnology",
      "Nanotechnology",
      "Astronomy",
      "Meteorology",
    ],
  },
  dailyLivingSkills: {
    buttonName: "Daily Living Skills",
    categoriesToDisplay: [
      "Chess",
      "Games",
      "Cooking & Baking",
      "Communication & Socialization",
      "Personal Hygiene",
      "Laundry & Clothing ",
      "Transportation & Navigation",
      "Household Management",
      "Money Management",
      "Stress Management",
      "Emergency and Safety",
    ],
  },
  academics: {
    buttonName: "Academics",
    categoriesToDisplay: [
      "Math",
      "History",
      "Science Experiments",
      "Geography",
      "Literature",
      "Philosophy",
      "Psychology",
      "Sociology",
      "Anthropology",
      "Political Science",
      "Economics",
      "Fine Arts",
    ],
  },
}

type Type_AllActivities = JSX.Element[]

const allActivities_JSX: Type_AllActivities = [
  <ORG_Filters_D_Checkbox_Isolated
    categoriesToDisplay={allActivities_Data.allActivities.categoriesToDisplay}
  />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.fitness.buttonName}
    categoriesToDisplay={allActivities_Data.fitness.categoriesToDisplay}
  />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.art.buttonName}
    categoriesToDisplay={allActivities_Data.art.categoriesToDisplay}
  />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.music.buttonName}
    categoriesToDisplay={allActivities_Data.music.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.ASLLanguages.buttonName}
    categoriesToDisplay={allActivities_Data.ASLLanguages.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.stem.buttonName}
    categoriesToDisplay={allActivities_Data.stem.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.dailyLivingSkills.buttonName}
    categoriesToDisplay={
      allActivities_Data.dailyLivingSkills.categoriesToDisplay
    }
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={allActivities_Data.academics.buttonName}
    categoriesToDisplay={allActivities_Data.academics.categoriesToDisplay}
  />,
]

const FILTERS_RANGE: TypeAllFiltersRange = {
  age: {
    buttonName: "Age",
    min: "3",
    max: "18",
    whichMeasure: "years",
    addCharacter: "toRight",
  },
}

const FILTERS_CHECKBOX: TypeAllFiltersCheckbox = {
  campType: {
    buttonName: "Camp Type",
    categoriesToDisplay: [
      "Day Camp",
      "Summer Camp",
      "Overnight Camp",
      "Sports Camp",
      "Adventure Camp",
      "Art Camp",
      "Science Camp",
      "Music Camp",
      "Academic Camp",
      "Technology Camp",
    ],
  },
  priceRange: {
    buttonName: "Price Range",
    categoriesToDisplay: [
      "$200-$300",
      "$300-$400",
      "$400-$500",
      "$500-$600",
      "$600-$700",
      "$700-$800",
      "$800-$900",
      "$1000 and above",
    ],
  },

  viewOnly: {
    buttonName: "View Only",
    categoriesToDisplay: ["Your available"],
  },
  coEd: {
    buttonName: "Co-ed",
    categoriesToDisplay: ["Boys and girls", "Girls only", "Boys only"],
  },
  onSiteNurse: {
    buttonName: "On-site nurse",
    categoriesToDisplay: ["Yes", "No"],
  },
  religionAfiliation: {
    buttonName: "Religion Affiliation",
    categoriesToDisplay: [
      "Buddhist",
      "Catholic",
      "Christian",
      "Hindu",
      "Islam",
      "Judaism",
      "Protestantism",
      "Agnostic",
      "Atheist",
    ],
  },
  wheelchairAccessible: {
    buttonName: "Wheelchair Accessible",
    categoriesToDisplay: ["Yes", "No"],
  },
}

const FILTERS_MORE: Type_AllMoreFilters = {
  CHECKBOXES: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.meetingFormat.inMoreFilters}
      categoriesToDisplay={ORG_FILTERS_DATA_D.meetingFormat}
    />,

    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.insurance.titleToShowCard}
      categoriesToDisplay={ORG_FILTERS_DATA_D.insurance}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={ORG_FILTERS_KEYS_D.language.titleToShow}
      categoriesToDisplay={ORG_FILTERS_DATA_D.languages}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.viewOnly.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.viewOnly.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.coEd.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.coEd.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.onSiteNurse.buttonName}
      categoriesToDisplay={FILTERS_CHECKBOX.onSiteNurse.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.religionAfiliation.buttonName}
      categoriesToDisplay={
        FILTERS_CHECKBOX.religionAfiliation.categoriesToDisplay
      }
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={FILTERS_CHECKBOX.wheelchairAccessible.buttonName}
      categoriesToDisplay={
        FILTERS_CHECKBOX.wheelchairAccessible.categoriesToDisplay
      }
    />,
  ],
}

export const filtersUI_Camps: Type_FiltersToUI = [
  {
    component: ORG_Filters_D_More2,
    parameters: {
      titleOnModal: "",
      CHECKBOXES: allActivities_JSX,
      CUSTOM_BUTTON_NAME: "Activities",
    },
  },

  {
    component: ORG_Filters_D_Checkbox2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
    },
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: {
      min: FILTERS_RANGE.age.min,
      max: FILTERS_RANGE.age.max,
      buttonName: FILTERS_RANGE.age.buttonName,
      addCharacter: FILTERS_RANGE.age.addCharacter,
      whichMeasure: FILTERS_RANGE.age.whichMeasure,
    },
  },
  {
    component: ORG_Filters_D_Range2,
    parameters: {
      buttonName: ORG_FILTERS_KEYS_D.distance.titleToShow,
      min: ORG_FILTERS_DATA_D.distanceRange.min,
      max: ORG_FILTERS_DATA_D.distanceRange.max,
      whichMeasure: ORG_FILTERS_DATA_D.distanceRange.whichMeasure,
      addCharacter: "toRight",
    },
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.campType,
  },
  {
    component: ORG_Filters_D_Checkbox2,
    parameters: FILTERS_CHECKBOX.priceRange,
  },
  {
    component: ORG_Filters_D_More2,
    parameters: FILTERS_MORE,
  },
]
