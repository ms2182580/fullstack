import { Breadcrumbs_D } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs_D"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import { useCheckBreadcrumbs } from "@/utils/org/useCheckBreadcrumbs"
import { useCheckBreadcrumbsProps } from "@/utils/org/useCheckBreadcrumbsProps"
import { useRouter } from "next/router"
import { useMemo } from "react"

export const enum QUERY_BREADCRUMBS {
  TITLE = "title",
}

export const ORG_D_Results_Breadcrumbs = () => {
  const { query } = useRouter()

  const { titleFormatted } = useCheckBreadcrumbs(
    query?.[QUERY_BREADCRUMBS.TITLE]
  )

  const { reachTypedFlow, diagnosisChoosed, inputTypesByUser }: any =
    useSessionStorage_typedFlow()

  const { titleFormatted: titleFormatted_TypedFlow } =
    useCheckBreadcrumbsProps()

  const whichWordOnBreadcrumb = useMemo(() => {
    const whichFinalWord = titleFormatted
      ? titleFormatted
      : `Typed by user: ${inputTypesByUser}`
    return whichFinalWord
  }, [titleFormatted, titleFormatted_TypedFlow, inputTypesByUser])

  return (
    <Breadcrumbs_D
      whichDisplay={[
        ["Resource Directory", `${ALL_ROUTES.ORG}`],
        [`${whichWordOnBreadcrumb}`, ""],
      ]}
    />
  )
}
