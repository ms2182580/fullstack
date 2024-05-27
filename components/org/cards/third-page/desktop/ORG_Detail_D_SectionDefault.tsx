import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { defaultSectionToRender } from "@/utils/org/third-page/defaultSectionToRender"
import { Fragment } from "react"

export const ORG_Detail_D_SectionDefault = () => {
  return (
    <>
      {defaultSectionToRender.map(
        ({ component, props_component, toNavbar }, index) => {
          const TheComponent = component as any
          const theComponentName = component?.name

          let theIdForComponent = toNavbar?.[ArraySection_KEYS.ID] ?? "#"
          let customTitle = props_component ?? null

          let allData = {
            theIdForComponent,
            ...customTitle,
          }

          return (
            <Fragment key={`${theComponentName}_${index}`}>
              <TheComponent {...{ [ArraySection_KEYS.ALL_DATA]: allData }} />
            </Fragment>
          )
        }
      )}
    </>
  )
}
