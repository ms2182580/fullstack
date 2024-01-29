import { INDEX_D_AICHATWrapper } from "./styles/INDEX_D_AICHATWrapper"
import { AIChat_D_Header } from "./AIChat_Header"
import { AIChat_Suggestions } from "./AIChat_Suggestions"
import { AICHAT_Form } from "./AIChat_Form"
import { useState } from "react"
import { AIChat_Conversation } from "./AIChat_Conversation"
import { useDashboard_AIChat_HistoryModal } from "@/context/Dashboard_AIChat_HistoryModal"
import { AIChat_History } from "./AIChat_History"
import { useDashboard_AIChat_ResponseModal } from "@/context/Dashboard_AIChat_ResponseModal"
import { AIChat_Plan_Modal } from "./AIChat_Plan_Modal"

type Props = {
  showModalToggle: () => void
}

export const INDEX_D_AICHAT = ({ showModalToggle }) => {
  const [input, setInput] = useState("")
  const { dashboard_AIChat_HistoryModal, openDashboard_AIChat_HistoryToggle } =
    useDashboard_AIChat_HistoryModal()

  return (
    <INDEX_D_AICHATWrapper>
      <AIChat_D_Header
        openDashboard_AIChat_HistoryToggle={openDashboard_AIChat_HistoryToggle}
        dashboard_AIChat_HistoryModal={dashboard_AIChat_HistoryModal}
      />
      {!dashboard_AIChat_HistoryModal ? (
        <>
          {input ? (
            <AIChat_Conversation showModalToggle={showModalToggle} />
          ) : (
            <AIChat_Suggestions />
          )}
          <AICHAT_Form setInput={setInput} input={input} />
        </>
      ) : (
        <AIChat_History />
      )}
    </INDEX_D_AICHATWrapper>
  )
}
