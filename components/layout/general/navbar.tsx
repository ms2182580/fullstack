import { INDEX_Logo } from "@/components/logo"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { NavbarWrapper } from "./styles/navbar-wrapper"

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <INDEX_Logo />

        <div>
          <div>
            <span>Find a resource</span>
            <Link href={`/${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
              Sign in
            </Link>
            <Link href={`/${ALL_ROUTES.SIGNUP}`}>Sign up</Link>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}
