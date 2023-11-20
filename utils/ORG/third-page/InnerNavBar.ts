import { FC } from "react"

export const enum InnerNavBar_InnerData_KEYS {
  INNER_NAV_BAR_KEY = "INNER_NAV_BAR_KEY",
  INNER_NAV_BAR_DEFAULT_ID_KEY = "INNER_NAV_BAR_DEFAULT_ID",

  INNER_NAV_BAR_VALUE = "INNER_NAV_BAR_VALUE",
}

export type InnerNavBar_InnerData = {
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]: string | DefaultValue_InnerData.about
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE]?: string
}[]

const enum DefaultValue_InnerData {
  about = "about",
}

export type ArraySectionToRender_Type = {
  name: string | null
  component: FC | null
  toNavbar?: {
    id: string | DefaultValue_InnerData.about | null
    jsx?: string
  }
}[]
