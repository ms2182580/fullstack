import { FC } from "react"

type CardFirstRow = {
  image: string
  title: string
  subtitle: string
  linkRef: string
}

export type SectionToRender_InnerData_ARG = {
  name: string
  component: FC
  isSimilarProducts?: {
    cardFirstRow: {
      image: string
      title: string
      subtitle: string
      linkRef: string
    }[]
    cardSecondRow: {
      key: string
      values: {
        value?: string | number
        component?: {
          toRender: "component_StarsRatingReview_D"
          props: {
            rating?: number
            reviews?: number
            isDetail?: boolean
          }
        }
      }[]
    }[]
  }
}[]

export type SectionToRender_InnerData = {
  name: string
  component: FC
  isSimilarProducts?: {
    cardFirstRow: {
      image: string
      title: string
      subtitle: string
      linkRef: string
    }[]
    cardSecondRow: {
      key: string
      values: {
        value?: string | number
        component?: {
          toRender: "component_StarsRatingReview_D"
          props: {
            rating?: number
            reviews?: number
            isDetail?: boolean
          }
        }
      }[]
    }[]
  }
}

export type SectionToRender_PROPS = {
  sectionToRender: SectionToRender_InnerData[]
}
