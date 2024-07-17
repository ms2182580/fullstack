import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import { useCheckBreadcrumbsProps } from "@/utils/org/useCheckBreadcrumbsProps"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"

export const enum QUERY_BREADCRUMBS {
  TITLE = "title",
}

export const ORG_D_Results_Breadcrumbs = () => {
  const { reachTypedFlow, diagnosisChoosed, inputTypesByUser }: any =
    useSessionStorage_typedFlow()

  const { query } = useRouter()

  const { titleFormatted } = useCheckBreadcrumbs(
    query?.[QUERY_BREADCRUMBS.TITLE] || inputTypesByUser
  )

  const { titleFormatted: titleFormatted_TypedFlow } =
    useCheckBreadcrumbsProps()

  const whichWordOnBreadcrumb = useMemo(() => {
    const whichFinalWord = titleFormatted
      ? titleFormatted
      : `Typed by user: ${titleFormatted_TypedFlow}`
    return whichFinalWord
  }, [titleFormatted, titleFormatted_TypedFlow])

  return (
    <Breadcrumbs_D
      whichDisplay={[
        ["Resource Directory", `${ALL_ROUTES.ORG}`],
        [`${whichWordOnBreadcrumb}`, ""],
      ]}
    />
  )
}
