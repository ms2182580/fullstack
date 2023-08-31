import { P } from "../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_D_Results_CardCityWrapper } from "./styles/ST_D_Results_CardCityWrapper.js"

export const ST_D_Results_CardCity = ({ city }) => {
  return (
    <ST_D_Results_CardCityWrapper>
      <P dark_gray>{city}</P>
    </ST_D_Results_CardCityWrapper>
  )
}
