import { ORG_Filters_D_Checkbox2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox2"
import { ORG_Filters_D_Checkbox_Isolated } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Checkbox_Isolated"
import { ORG_Filters_D_More2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_More2"
import { ORG_Filters_D_Range2 } from "../../../../components/ORG/filters/desktop/ORG_Filters_D_Range2"
import { ORG_FILTERS_DATA_D, ORG_FILTERS_KEYS_D } from "../../../ORG_FiltersCategories"
import { DATA_ORG_KeyNamesForFilters_D } from "../../DATA_ORG_KeyNamesForFilters_D"

const DATA_DAY_D_Filters = {
  allActivities: {
    allActivities: {
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
  },

  age: {
    buttonName: "Age",
    minimum: "3",
    maximum: "18",
    whichMeasure: "years",
    addCharacter: "toRight"
  },
  distance: {
    buttonName: "Distance",
    minimum: "0",
    maximum: "20",
    whichMeasure: "miles",
    addCharacter: "toRight"
  },

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
    categoriesToDisplay: ["$200-$300", "$300-$400", "$400-$500", "$500-$600", "$600-$700", "$700-$800", "$800-$900", "$1000 and above"],
  },

  moreFilters: {
    setting: {
      buttonName: "Setting",
      categoriesToDisplay: ["Virtual", "In-person", "Group"],
    },

    viewOnly: {
      buttonName: "View Only",
      categoriesToDisplay: ["Tour Available"],
    },

    coEd: {
      buttonName: "Co-ed",
      categoriesToDisplay: ["Boys and Girls", "Girls Only", "Boys Only"],
    },
    onSiteNurse: {
      buttonName: "On-site Nurse",
      categoriesToDisplay: ["Yes", "No"],
    },
    religionAfiliation: {
      buttonName: "Religion Affiliation",
      categoriesToDisplay: ["Buddhist", "Catholic", "Christian", "Hindu", "Islam", "Judaism", "Protestantism", "Agnostic", "Atheist"],
    },
    wheelchairAccessible: {
      buttonName: "Wheelchair Accessible",
      categoriesToDisplay: ["Yes", "No"],
    },
  },
}

const allActivities = [
  <ORG_Filters_D_Checkbox_Isolated categoriesToDisplay={["All Activities"]} />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.fitness.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.fitness.categoriesToDisplay}
  />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.art.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.art.categoriesToDisplay}
  />,

  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.music.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.music.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.ASLLanguages.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.ASLLanguages.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.stem.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.stem.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.dailyLivingSkills.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.dailyLivingSkills.categoriesToDisplay}
  />,
  <ORG_Filters_D_Checkbox_Isolated
    titleOnModal={DATA_DAY_D_Filters.allActivities.academics.buttonName}
    categoriesToDisplay={DATA_DAY_D_Filters.allActivities.academics.categoriesToDisplay}
  />,
]

const allMoreFilters = {
  checkbox: [
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_DAY_D_Filters.moreFilters.setting.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.setting.categoriesToDisplay}
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
      titleOnModal={DATA_DAY_D_Filters.moreFilters.viewOnly.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.viewOnly.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_DAY_D_Filters.moreFilters.coEd.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.coEd.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_DAY_D_Filters.moreFilters.onSiteNurse.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.onSiteNurse.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_DAY_D_Filters.moreFilters.religionAfiliation.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.religionAfiliation.categoriesToDisplay}
    />,
    <ORG_Filters_D_Checkbox_Isolated
      titleOnModal={DATA_DAY_D_Filters.moreFilters.wheelchairAccessible.buttonName}
      categoriesToDisplay={DATA_DAY_D_Filters.moreFilters.wheelchairAccessible.categoriesToDisplay}
    />,
  ],
}

export const renderFiltersInUI_CMPS_DAY = [
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      titleOnModal: "",
      allCheckboxes: allActivities,
      customButtonName: "Activities",
    },
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      buttonName: ORG_FILTERS_KEYS_D.diagnosis.titleToShow,
      categoriesToDisplay: ORG_FILTERS_DATA_D.diagnosis,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      min: DATA_DAY_D_Filters.age.minimum,
      max: DATA_DAY_D_Filters.age.maximum,
      buttonName: DATA_DAY_D_Filters.age.buttonName,
      addCharacter: DATA_DAY_D_Filters.age.addCharacter,
      whichMeasure: DATA_DAY_D_Filters.age.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Range2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: {
      min: DATA_DAY_D_Filters.distance.minimum,
      max: DATA_DAY_D_Filters.distance.maximum,
      buttonName: DATA_DAY_D_Filters.distance.buttonName,
      addCharacter: DATA_DAY_D_Filters.distance.addCharacter,
      whichMeasure: DATA_DAY_D_Filters.distance.whichMeasure,
    },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: { buttonName: DATA_DAY_D_Filters.campType.buttonName, categoriesToDisplay: DATA_DAY_D_Filters.campType.categoriesToDisplay },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },

  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_Checkbox2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: { buttonName: DATA_DAY_D_Filters.priceRange.buttonName, categoriesToDisplay: DATA_DAY_D_Filters.priceRange.categoriesToDisplay },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: "DAY_CAMPS_PRICE_RANGE",
  },
  {
    [DATA_ORG_KeyNamesForFilters_D.COMPONENT]: ORG_Filters_D_More2,
    [DATA_ORG_KeyNamesForFilters_D.PARAMETERS]: { allCheckboxes: allMoreFilters.checkbox },
    [DATA_ORG_KeyNamesForFilters_D.SHOULD_ADD_CLASSNAME]: false,
  },
]