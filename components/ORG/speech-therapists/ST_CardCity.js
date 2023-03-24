import { P } from "../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_CardCityWrapper } from "./styles/ST_CardCityWrapper.js"

export const ST_CardCity = ({ city }) => {
  return (
    <ST_CardCityWrapper>
      <P dark_gray>{city}</P>
    </ST_CardCityWrapper>
  )
}
