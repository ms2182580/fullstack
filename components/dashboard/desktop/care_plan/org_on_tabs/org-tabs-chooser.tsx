import { cloneElement, Fragment, isValidElement, useEffect } from "react"
import { ComponentList_Type } from "."
import { OrgTabsChooserWrapper } from "./styles/org-tabs-chooser-wrapper"

type Props = {
  componentList: ComponentList_Type
  actualComponentShowed: number
  handleNextComponent: (e) => void
  handlePreviousComponent: (e) => void
  handleMoveCustom: ({ customMovement }) => void
}

export const OrgTabsChooser = ({
  componentList,
  actualComponentShowed,
  handleNextComponent,
  handlePreviousComponent,
  handleMoveCustom,
}: Props) => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [actualComponentShowed])

  return (
    <OrgTabsChooserWrapper>
      {componentList.map(({ component, props }, index) => {
        if (index !== actualComponentShowed) return null
        const propsToComponent = {
          handleNextComponent,
          handlePreviousComponent,
          handleMoveCustom,
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
