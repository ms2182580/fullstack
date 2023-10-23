import { FC } from "react"

export type SectionToRender_InnerData_ARG = { name: string; component: FC }[]

export type SectionToRender_InnerData = {
  name: string
  component: FC
}

export type SectionToRender_PROPS = {
  sectionToRender: SectionToRender_InnerData[]
}
