import { useRouter } from "next/router"
import { NavBar_D_OnlyDefault } from "./NavBar_D_OnlyDefault.js"
import { NavBar_D_OnlyHome } from "./NavBar_D_OnlyHome.js"
import { NavBar_D_OnlyORG } from "./NavBar_D_OnlyORG.js"

export const INDEX_NavBar_D = () => {
  const route = useRouter()

  if (route.pathname === "/") {
    return (
      <>
        <NavBar_D_OnlyHome />
      </>
    )
  }

  if (route.pathname !== "/" && route.pathname === "/ORG") {
    return (
      <>
        <NavBar_D_OnlyORG />
      </>
    )
  }

  if (route.pathname !== "/" && route.pathname !== "/ORG") {
    return (
      <>
        <NavBar_D_OnlyDefault />
      </>
    )
  }
}
