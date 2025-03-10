import { useRouter } from "next/router"
import { useEffect } from "react"
import { ALL_ROUTES } from "../ALL_ROUTES"
import { DATA_ORG_D } from "./DATA_ORG_D"

export const useMoveToORG = () => {
  const router = useRouter()

  useEffect(() => {
    const getPath = router.asPath.split("/")
    // console.log('getPath:', getPath)
    let finIndex = DATA_ORG_D.findIndex((x) => x.acronym === getPath[2])
    // console.log('finIndex:', finIndex)

    router.push(
      {
        pathname: `/${ALL_ROUTES.ORG}`,
        query: { nameFromRoute: DATA_ORG_D[finIndex].nameJSX },
      },
      `/${ALL_ROUTES.ORG}`
    )
  }, [])
}
