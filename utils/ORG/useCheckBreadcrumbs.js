import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DATA_ORG_CheckPaths_Results_D } from "./DATA_ORG_CheckPaths_Results_D"

export const useCheckBreadcrumbs = (titleToFormat, isTypedFlow = false) => {
  const router = useRouter()
  const [titleFormatted, setTitleFormatted] = useState(null)

  useEffect(() => {
    if (!titleToFormat && !isTypedFlow) {
      let theRoute = router.asPath.split("/").at(-1)
      let index = `p${theRoute.split("-")[0]}`
      console.log("index:", index)
      let fullName = DATA_ORG_CheckPaths_Results_D[index].at(-1).fullName[theRoute]

      return setTitleFormatted(fullName)
    }

    const theFirstWordIsPopular = titleToFormat?.split(" ")[0].toLowerCase() === "popular"

    if (theFirstWordIsPopular) {
      return setTitleFormatted(titleToFormat.split(" ").slice(1).join(" "))
    }

    return setTitleFormatted(titleToFormat)
  }, [])

  return { titleFormatted }
}
