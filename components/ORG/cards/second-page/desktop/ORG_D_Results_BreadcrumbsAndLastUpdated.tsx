import { useCheckBreadcrumbs } from "@/utils/ORG/useCheckBreadcrumbs"
import { useCheckBreadcrumbsProps } from "@/utils/ORG/useCheckBreadcrumbsProps"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"

export type ORG_D_Results_BreadcrumbsAndLastUpdated_PROPS = {
  titleToFormat: string
  isTypedFlow?: boolean
}

export const ORG_D_Results_BreadcrumbsAndLastUpdated = ({ titleToFormat, isTypedFlow = false }: ORG_D_Results_BreadcrumbsAndLastUpdated_PROPS) => {
  const { query } = useRouter()

  const { titleFormatted } = useCheckBreadcrumbs(query.title, isTypedFlow)

  const { titleFormatted: titleFormatted_TypedFlow } = useCheckBreadcrumbsProps(titleToFormat, isTypedFlow)

  const whichWordOnBreadcrumb = useMemo(
    () => {
      const whichFinalWord = titleFormatted ? titleFormatted : `Results for: ${titleFormatted_TypedFlow}`
      return whichFinalWord
    },
    [
      /*dependencies here*/
    ],
  )

  return (
    <>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${whichWordOnBreadcrumb}`, ""],
        ]}
      />
    </>
  )
}
