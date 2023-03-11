import { H3 } from "../../ui/heading_body_text/HeaderFonts.js"
import { SpecificCardWrapper } from "./styles/SpecificCardWrapper.js"

export const SpecificCard = ({ inProgress = false, title, icon }) => {

  return (
    <SpecificCardWrapper>
      {icon()}
      <H3>{title}</H3>
    </SpecificCardWrapper>
  )
}
