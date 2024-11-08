import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { Fragment } from "react"

export const ORG_Detail_D_SectionCustom = ({ sectionCustom }) => {
  return (
    <>
      {sectionCustom.map((x, index) => {
        let theIdForComponent =
          x?.[ArraySection_KEYS.TO_NAVBAR]?.[ArraySection_KEYS.ID] ?? "#"
        let allProps = x?.[ArraySection_KEYS.PROPS_COMPONENT] ?? null

        let allData = {
          theIdForComponent,
          ...allProps,
        }

        if (x.component) {
          return (
            <>
              <Fragment key={`${index}`}>
                <x.component {...{ [ArraySection_KEYS.ALL_DATA]: allData }} />
              </Fragment>
            </>
          )
        }
      })}
    </>
  )
}
