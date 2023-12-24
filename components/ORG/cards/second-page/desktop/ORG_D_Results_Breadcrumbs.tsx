import { useCheckBreadcrumbs } from "@/utils/ORG/useCheckBreadcrumbs"
import { useCheckBreadcrumbsProps } from "@/utils/ORG/useCheckBreadcrumbsProps"
import { ALL_ROUTES } from "@/utils/ORG/useCheckSlug_ORG"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"

type PROPS = {
  titleToFormat: string
  isTypedFlow?: boolean
}

export const ORG_D_Results_Breadcrumbs = ({ titleToFormat, isTypedFlow = false }: PROPS) => {
  const { query } = useRouter()

  const { titleFormatted } = useCheckBreadcrumbs(query.title, isTypedFlow)

  const { titleFormatted: titleFormatted_TypedFlow } = useCheckBreadcrumbsProps(titleToFormat, isTypedFlow)

  const whichWordOnBreadcrumb = useMemo(() => {
    const whichFinalWord = titleFormatted ? titleFormatted : `Typed by user: ${titleFormatted_TypedFlow}`
    return whichFinalWord
  }, [titleFormatted, titleFormatted_TypedFlow])

  return (
    <>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", `${ALL_ROUTES.ORG}`],
          [`${whichWordOnBreadcrumb}`, ""],
        ]}
      />
    </>
  )
}
