import { useCtx_ShowModal } from "../context/Ctx_ShowModal"
/** 
* This custom hook decide if the user can use the tab when some modal is open

*/

export const useTabIndex = () => {
  const { modalShowedCtx } = useCtx_ShowModal()

  const shouldTab = modalShowedCtx ? -1 : 0
  return shouldTab

}