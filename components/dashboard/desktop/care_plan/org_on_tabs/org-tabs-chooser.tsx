import { cloneElement, Fragment, isValidElement, useEffect } from "react"
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
  useEffect(() => {
    console.log("🔰")

    /* 
    !FH0
    Make this scroll to top work
    */
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [actualComponentShowed])

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
