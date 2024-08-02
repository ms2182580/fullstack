import { ORG_D_Detail_AIChat } from "./ORG_D_Detail_AIChat"
import { ORG_D_Detail_Contact } from "./ORG_D_Detail_Contact"

export const ORG_D_Detail_Header_RightSticky = ({ whichCategory }) => {
  return (
    <>
      <ORG_D_Detail_Contact />
      <ORG_D_Detail_AIChat whichCategory={whichCategory} />
    </>
  )
}
