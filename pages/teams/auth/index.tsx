import { useRouter } from "next/navigation"

export default function PAGES_Auth() {
  const { push } = useRouter()

  push("/teams/auth/tell_us_about_you")

  return null
}
