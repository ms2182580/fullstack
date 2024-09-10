import { cloneElement, Fragment, isValidElement } from "react"
import { DataTabs_Type } from "./INDEX_D_CarePlan_Tabs"
import { Tabs_ContentWrapper } from "./styles/Tabs_ContentWrapper"

type Props = {
  dataTabs: DataTabs_Type
  activeTab: number
}

export const Tabs_Content = ({ dataTabs, activeTab }: Props) => {
  return (
    <Tabs_ContentWrapper>
      {dataTabs.map(({ component, props }, index) => {
        if (index !== activeTab) return null

        return (
          <Fragment key={index}>
            {isValidElement(component) && cloneElement(component, props)}
          </Fragment>
        )
      })}
    </Tabs_ContentWrapper>
  )
}
