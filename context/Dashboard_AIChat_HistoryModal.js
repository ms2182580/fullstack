import { useState } from "react"

export const useDashboard_AIChat_HistoryModal = () => {
  const [dashboard_AIChat_HistoryModal, setDashboard_AIChat_HistoryModal] =
    useState(false)

  const openDashboard_AIChat_HistoryToggle = () => {
    setDashboard_AIChat_HistoryModal(!dashboard_AIChat_HistoryModal)
  }
  return {
    dashboard_AIChat_HistoryModal,
    openDashboard_AIChat_HistoryToggle,
  }
}
