import { Dashboard_D_SunSvg } from "@/assets/icons"
import { useDashboardAIChat_Ctx } from "@/context/Ctx_Dashboard_AIChat"
import { useDashboardAIChatUploadFile_Ctx } from "@/context/Ctx_Dashboard_CarePlanUploadFile"
import { useDashboardEditorAIChat_Ctx } from "@/context/Ctx_Dashboard_EditorChatModal"
import { Dashboard_D_ChatBot } from "./Dashboard_D_ChatBox"
import { Dashboard_D_PlanList } from "./Dashboard_D_PlanList"
import { Dashboard_D_PlatformBox } from "./Dashboard_D_PlatformBox"
import { INDEX_D_AIChatPopup } from "./ai-chat/popup/INDEX_D_AIChatPopup"
import { Index_D_Editor } from "./editor/INDEX_D_Editor"
import { INDEX_D_DashboardWrapper } from "./styles/INDEX_D_DashboardWrapper"
import { INDEX_D_UploadFile } from "./upload-file/INDEX_D_UploadFile"

const patchHotFix = () => {
  return "Please, fix this"
}

export const INDEX_D_Dashboard = () => {
  const { isPlan } = useDashboardAIChat_Ctx()
  const { isChat } = useDashboardEditorAIChat_Ctx()
  const { isUpload, setIsUpload } = useDashboardAIChatUploadFile_Ctx()
  return (
    <INDEX_D_DashboardWrapper isCreatePlan={isPlan}>
      {!isPlan ? (
        <>
          <h6>
            Nice to meet you, Jane <Dashboard_D_SunSvg />
          </h6>
          <p>What Would you like to do?</p>
          <Dashboard_D_PlatformBox />
          <Dashboard_D_ChatBot />
          <Dashboard_D_PlanList />
        </>
      ) : (
        <>
          <Index_D_Editor />
        </>
      )}
      {isChat && <INDEX_D_AIChatPopup showModalToggle={patchHotFix} />}
      {isUpload && <INDEX_D_UploadFile />}
    </INDEX_D_DashboardWrapper>
  )
}
