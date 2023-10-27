import { FC } from "react"

export type SectionToRender_InnerData_ARG = {
  name: string
  component?: FC
}[]

export type SectionToRender_InnerData = {
  name: string
  component?: FC
}

export type SectionToRender_PROPS = {
  sectionToRender?: SectionToRender_InnerData[] | null
  arrayInnerNavBar?: InnerNavBar_InnerData
}

export const enum InnerNavBar_InnerData_KEYS {
  INNER_NAV_BAR_KEY = "INNER_NAV_BAR_KEY",
  INNER_NAV_BAR_DEFAULT_ID_KEY = "INNER_NAV_BAR_DEFAULT_ID",
}

export type InnerNavBar_InnerData = {
  [InnerNavBar_InnerData_KEYS.INNER_NAV_BAR_KEY]: string
}[]
