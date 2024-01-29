import { useState } from "react"

export const useDashboard_AIChat_ResponseModal = () => {
  const [isModalVisibles, setIsModalVisible] = useState(false)

  const showModalToggle = () => {
    setIsModalVisible(!isModalVisibles)
  }

  return {
    isModalVisibles,
    showModalToggle,
  }
}
