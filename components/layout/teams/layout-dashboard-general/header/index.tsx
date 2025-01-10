import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/router"
import { Row1 } from "./row-1"
import { Row2 } from "./row-2"

export const INDEX_Header = () => {
  const { asPath } = useRouter()

  const isNewSearchRoute = asPath.includes(`${ALL_ROUTES_INTERNAL.NEW_SEARCH}`)

  return (
    <div>
      <Row1 />
      {isNewSearchRoute && <Row2 />}
    </div>
  )
}
