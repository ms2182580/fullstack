import { FC } from "react"

export const enum InnerNavBar_InnerData_KEYS {
  INNER_NAV_BAR_KEY = "INNER_NAV_BAR_KEY",
  INNER_NAV_BAR_VALUE = "INNER_NAV_BAR_VALUE",

  INNER_NAV_BAR_DEFAULT_ID_KEY = "INNER_NAV_BAR_DEFAULT_ID",
  INNER_NAV_BAR_ID = "INNER_NAV_BAR_ID",
}

export type InnerNavBar_InnerData = {
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]: string | WhichDefaultId.about
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE]?: string
}[]

// const enum DefaultValue_InnerData {
//   about = "about",
// }

export const enum WhichDefaultId {
  about = "about",
  schedule = "schedule",
  contactus = "contactus",
  reviews = "reviews",
  faqs = "faqs",
}

export const enum ArraySection_KEYS {
  NAME = "name",
  COMPONENT = "component",
  TO_NAVBAR = "toNavbar",
  ID = "id",
  JSX = "jsx",
  PROPS_COMPONENT = "props_component",
  ALL_DATA = "all_data",
}

export type ArraySectionToRender_Type = {
  [ArraySection_KEYS.NAME]: string | null
  [ArraySection_KEYS.COMPONENT]: FC<any> | null
  [ArraySection_KEYS.PROPS_COMPONENT]?: {
    /*
     * This is the way to pass props to some components
     * The only key that is typed is this: «[ArraySection_KEYS.PROPS_COMPONENT]», you can use the autocomplete to get the key because this all array is typed
     * Inside this key you have to check the specific component that's going to receive the props and match the keys inside. With that you know which props are going to receive the component you put just above
     */

    [key: string]: string | object | string[] | boolean // * Check the type of data on the specific component you are putting here
  }
  [ArraySection_KEYS.TO_NAVBAR]: {
    [ArraySection_KEYS.ID]: string | WhichDefaultId | null
    [ArraySection_KEYS.JSX]?: string
  }
}[]
