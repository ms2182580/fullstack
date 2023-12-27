import { FC } from "react"

export const enum InnerNavBar_InnerData_KEYS {
  INNER_NAV_BAR_KEY = "INNER_NAV_BAR_KEY",
  INNER_NAV_BAR_VALUE = "INNER_NAV_BAR_VALUE",

  INNER_NAV_BAR_DEFAULT_ID_KEY = "INNER_NAV_BAR_DEFAULT_ID",
  INNER_NAV_BAR_ID = "INNER_NAV_BAR_ID",
}

export type InnerNavBar_InnerData = {
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]: string | DefaultValue_InnerData.about
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE]?: string
}[]

const enum DefaultValue_InnerData {
  about = "about",
}

export const enum ArraySection_KEYS {
  NAME = "name",
  COMPONENT = "component",
  TO_NAVBAR = "toNavbar",
  ID = "id",
  JSX = "jsx",
}

export type ArraySectionToRender_Type = {
  [ArraySection_KEYS.NAME]: string | null
  [ArraySection_KEYS.COMPONENT]: FC<any> | null
  [ArraySection_KEYS.TO_NAVBAR]: {
    [ArraySection_KEYS.ID]: string | DefaultValue_InnerData.about | null
    [ArraySection_KEYS.JSX]?: string
  }
}[]
