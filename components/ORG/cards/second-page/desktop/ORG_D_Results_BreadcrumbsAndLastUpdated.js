import { useCheckBreadcrumbs } from "@/utils/ORG/useCheckBreadcrumbs"
import { useRouter } from "next/router"
import { Breadcrumbs_D } from "../../../../ui/breadcrumbs/desktop/Breadcrumbs_D"

export const ORG_D_Results_BreadcrumbsAndLastUpdated = () => {
  const { query } = useRouter()

  const { titleFormatted } = useCheckBreadcrumbs(query.title)

  return (
    <>
      <Breadcrumbs_D
        whichDisplay={[
          ["Resource Directory", "ORG"],
          [`${titleFormatted}`, ""],
        ]}
      />
    </>
  )
}
