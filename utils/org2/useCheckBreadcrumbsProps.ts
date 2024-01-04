import { useEffect, useState } from "react"

type TitleToFormat_Type = string
type isTypedFlow = boolean

export const useCheckBreadcrumbsProps = (titleToFormat: TitleToFormat_Type, isTypedFlow: isTypedFlow = false) => {
  const [titleFormatted, setTitleFormatted] = useState("")

  // ? This is used when the data that arrived is not a string and comes from a query string from useRouter(). This behavior is implemented in "useCheckBreadcrumbs.js"
  // useEffect(() => {
  //   if (!titleToFormat) {
  //     let theRoute = router.asPath.split("/").at(-1)

  //     let index = `p${theRoute.split("-")[0]}`
  //     let fullName = DATA_ORG_CheckPaths_Results_D[index].at(-1).fullName[theRoute]

  //     setTitleFormatted(fullName)
  //   } else {
  //     setTitleFormatted(titleToFormat.split(" ").slice(1).join(" "))
  //   }
  // }, [])

  useEffect(() => {
    if (isTypedFlow) {
      setTitleFormatted(titleToFormat)
    }
  }, [])

  return { titleFormatted }
}
