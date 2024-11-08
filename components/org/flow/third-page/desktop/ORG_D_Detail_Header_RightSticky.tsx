import { useToggableOnDetails } from "@/utils/useToggableOnDetails"
import { ORG_D_Detail_AIChat } from "./ORG_D_Detail_AIChat"
import { ORG_D_Detail_Cards } from "./ORG_D_Detail_Cards"
import { ORG_D_Detail_Contact } from "./ORG_D_Detail_Contact"

export const ORG_D_Detail_Header_RightSticky = ({ whichCategory }) => {
  return (
    <>
      <ORG_D_Detail_Cards
        title="Contact this organization"
        titleTag={"H2"}
        isToggable={true}
      >
        <ORG_D_Detail_Contact />
      </ORG_D_Detail_Cards>

      <ORG_D_Detail_Cards
        title="AI Chat"
        titleTag={"H2"}
        isToggable={true}
        toggableStateComesFromOutside={useToggableOnDetails}
      >
        <ORG_D_Detail_AIChat whichCategory={whichCategory} />
      </ORG_D_Detail_Cards>
    </>
  )
}
