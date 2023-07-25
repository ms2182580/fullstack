import { useRouter } from "next/router"
import { useEffect } from "react"
import { DATA_ORG_D } from "../../../utils/DATA_ORG_D"

export default function INDEX_PAT() {
  const router = useRouter()

  useEffect(() => {
    const getPath = router.asPath.split("/")
    let finIndex = DATA_ORG_D.findIndex((x) => x.acronym === getPath[2])

    router.push(
      {
        pathname: `/ORG`,
        query: { nameFromRoute: DATA_ORG_D[finIndex].nameJSX }
      },
      `/ORG`
    )
  }, [])
}
