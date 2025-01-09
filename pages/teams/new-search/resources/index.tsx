import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/navigation"

export default function PAGE_Resources() {
  const { push } = useRouter()

  push(
    `/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.NEW_SEARCH}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.FIRST}`
  )
}
