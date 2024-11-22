import { FirstPageProps } from "./first-page"
import { SecondPageProps } from "./second-page"

export type AllDataTypeOrgTabsFlow = {
  [key in `${typeof FirstPageProps.name}`]: typeof FirstPageProps.types
} & { [key in `${typeof SecondPageProps.name}`]: typeof SecondPageProps.types }
