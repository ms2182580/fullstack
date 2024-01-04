import { FC } from "react"
import { InnerNavBar_InnerData } from "./InnerNavBar"

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
