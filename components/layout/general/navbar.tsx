import { INDEX_Logo } from "@/components/logo"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { NavbarWrapper } from "./styles/navbar-wrapper"

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div>
        <INDEX_Logo />
        <ul>
          <li>
            <Link href={`/${ALL_ROUTES.ORG}`}>Find a resource</Link>
          </li>
          <li>
            <Link href={`/${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
              Sign in
            </Link>
          </li>
          <li>
            <Link href={`/${ALL_ROUTES.SIGNUP}`}>Sign up</Link>
          </li>
        </ul>
      </div>
    </NavbarWrapper>
  )
}
