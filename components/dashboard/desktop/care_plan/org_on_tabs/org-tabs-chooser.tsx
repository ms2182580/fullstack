import { cloneElement, Fragment, isValidElement } from "react"
import { ComponentList_Type } from "."
import { OrgTabsChooserWrapper } from "./styles/org-tabs-chooser-wrapper"

type Props = {
  componentList: ComponentList_Type
  actualComponentShowed: number
  handleNextComponent: (e) => void
  allBackendData: object[]
}

export const OrgTabsChooser = ({
  componentList,
  actualComponentShowed,
  handleNextComponent,
  allBackendData,
}: Props) => {
  return (
    <OrgTabsChooserWrapper>
      {componentList.map(({ component, props }, index) => {
        if (index !== actualComponentShowed) return null

        const propsToComponent = {
          handleNextComponent,
          allBackendData,
          ...props,
        }

        return (
          <Fragment key={index}>
            {isValidElement(component) &&
              cloneElement(component, propsToComponent)}
          </Fragment>
        )
      })}
    </OrgTabsChooserWrapper>
  )
}
