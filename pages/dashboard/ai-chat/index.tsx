import { AIChat_Plan_Modal } from "@/components/dashboard/ai-chat/AIChat_Plan_Modal"
import { INDEX_D_AICHAT } from "@/components/dashboard/ai-chat/INDEX_D_AICHAT"
import { useDashboard_AIChat_ResponseModal } from "@/context/Dashboard_AIChat_ResponseModal"

export default function AIChat() {
  const { isModalVisibles, showModalToggle } =
    useDashboard_AIChat_ResponseModal()
  return (
    <>
      <INDEX_D_AICHAT showModalToggle={showModalToggle} />
      {isModalVisibles && (
        <AIChat_Plan_Modal showModalToggle={showModalToggle} />
      )}
    </>
  )
}
