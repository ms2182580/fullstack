import { Dashboard_AIChatHistorySvg } from "@/assets/icons"
import { AIChat_D_HeaderWrapper } from "./styles/AIChat_D_HeaderWrapper"

export const AIChat_D_Header = ({
  dashboard_AIChat_HistoryModal,
  openDashboard_AIChat_HistoryToggle,
}) => {
  return (
    <AIChat_D_HeaderWrapper isShow={dashboard_AIChat_HistoryModal}>
      <header>
        <span>{dashboard_AIChat_HistoryModal && "Chat History"} </span>
        <span onClick={openDashboard_AIChat_HistoryToggle}>
          <Dashboard_AIChatHistorySvg />
        </span>
      </header>
    </AIChat_D_HeaderWrapper>
  )
}
