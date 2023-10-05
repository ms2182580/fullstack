import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { DATA_ORG_CheckPaths_Results_D } from "./DATA_ORG_CheckPaths_Results_D"

export const useCheckBreadcrumbs = (titleToFormat) => {
  const router = useRouter()
  const [titleFormatted, setTitleFormatted] = useState(null)

  useEffect(() => {
    if (!titleToFormat) {
      let theRoute = router.asPath.split("/").at(-1)
      console.log('🧡')

      console.log('theRoute:', theRoute)

      let index = `p${theRoute.split("-")[0]}`
      console.log('index:', index)

      console.log('DATA_ORG_CheckPaths_Results_D:', DATA_ORG_CheckPaths_Results_D)
      let fullName = DATA_ORG_CheckPaths_Results_D[index].at(-1).fullName[theRoute]
      console.log('fullName:', fullName)

      setTitleFormatted(fullName)
    } else {

      setTitleFormatted(titleToFormat.split(" ").slice(1).join(" "))

    }
  }, [])

  return { titleFormatted }
}
