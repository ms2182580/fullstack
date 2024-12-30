import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
import { useRouter } from "next/navigation"

export default function PAGES_Teams() {
  const { push } = useRouter()

  push(`/${ALL_ROUTES_INTERNAL.TEAMS}/${ALL_ROUTES_INTERNAL.AUTHENTICATION}`)
}
