import { FC } from "react"

export const enum InnerNavBar_InnerData_KEYS {
  INNER_NAV_BAR_KEY = "INNER_NAV_BAR_KEY",
  INNER_NAV_BAR_DEFAULT_ID_KEY = "INNER_NAV_BAR_DEFAULT_ID",

  INNER_NAV_BAR_VALUE = "INNER_NAV_BAR_VALUE",
}

export type InnerNavBar_InnerData = {
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]: string
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_VALUE]?: string
}[]

export type ArraySectionToRender_Type = {
  name: string
  component: FC
  toNavbar?: {
    id: string | null
    jsx?: string
  }
}[]
