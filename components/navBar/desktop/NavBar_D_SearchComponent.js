import { useRouter } from "next/router"
import { SearchSVG } from "../../../assets/Icons"
import { ButtonSmall } from '../../../components/ui/buttons/general/index.js'
import { NavBar_D_InputAge } from "./NavBar_D_InputAge"
import { NavBar_D_InputKeyword } from "./NavBar_D_InputKeyword"
import { NavBar_D_InputLocation } from "./NavBar_D_InputLocation"
import { NavBar_D_SearchComponentWrapper } from "./styles/NavBar_D_SearchComponentWrapper.js"

export const NavBar_D_SearchComponent = () => {
  // const router = useRouter()
  // const shouldTab = useShouldTab()

  const { push } = useRouter()
  const handleMoveUser = () => {
    push("/ORG")
  }

  /* 
  !FH0
  Make the button at the rigth stay like 
  */

  return (
    <NavBar_D_SearchComponentWrapper>
      <NavBar_D_InputKeyword />
      <NavBar_D_InputLocation />
      <NavBar_D_InputAge />

      <span onClick={handleMoveUser}>
        <ButtonSmall>
          <SearchSVG />
        </ButtonSmall>
      </span>
    </NavBar_D_SearchComponentWrapper>
  )
}
