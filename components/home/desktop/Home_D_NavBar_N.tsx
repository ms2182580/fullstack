import { InclusiveLogo_D_DownArrow } from "@/assets/icons"
import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { Home_D_NavBar_NWrapper } from "./styles/Home_D_NavBar_NWrapper"

export const Home_D_NavBar_N = () => {
  const { push } = useRouter()

  const handleNavigateORG = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      push(`${ALL_ROUTES.HOME}`)
    }
  }
  return (
    <Home_D_NavBar_NWrapper>
      <div>
        <INDEX_Logo />

        <div>
          <span>
            About Us{" "}
            <span>
              <InclusiveLogo_D_DownArrow />
            </span>
          </span>
          <Link href={`/${ALL_ROUTES.ORG}`}>Resource Guide</Link>
          <button>Log In</button>
          <Link href={`/${ALL_ROUTES.SIGNUP}`}>Sign Up</Link>
        </div>
      </div>
    </Home_D_NavBar_NWrapper>
  )
}
