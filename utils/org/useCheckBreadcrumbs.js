import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useCtxOrgTabsFlow } from "@/context/dashboard/care_plan/ctx-org-tabs-flow"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DATA_ORG_CheckPaths_Results_D } from "./DATA_ORG_CheckPaths_Results_D"

export const useCheckBreadcrumbs = (titleToFormat) => {
  const { reachTypedFlow, inputTypesByUser } = useSessionStorage_typedFlow()

  const router = useRouter()
  const [titleFormatted, setTitleFormatted] = useState(null)

  const { dataToSecondPage } = useCtxOrgTabsFlow().ORG_TABS_FLOW_SECOND_PAGE

  useEffect(() => {
    if (
      !titleToFormat &&
      !reachTypedFlow &&
      inputTypesByUser === "" &&
      dataToSecondPage === null
    ) {
      let theRoute = router.asPath.split("/").at(-1)
      let index = `p${theRoute.split("-")[0]}`
      let fullName =
        DATA_ORG_CheckPaths_Results_D[index].at(-1).fullName[theRoute]

      return setTitleFormatted(fullName)
    }

    const theFirstWordIsPopular =
      titleToFormat?.split(" ")[0].toLowerCase() === "popular"

    if (theFirstWordIsPopular) {
      return setTitleFormatted(titleToFormat.split(" ").slice(1).join(" "))
    }

    return setTitleFormatted(titleToFormat)
  }, [])

  return { titleFormatted }
}
