import {
  Dashboard_AIChatPopopHistoryBackSvg,
  Dashboard_AIChatPopupModalHistorySvg,
  Dashboard_AIChat_PopupModalFullScreenSvg,
} from "@/assets/icons"
import { useDashboardEditorAIChat_Ctx } from "@/context/Ctx_Dashboard_EditorChatModal"
import { useState } from "react"
import { AIChat_Conversation_Individual } from "../AIChat_Conversation_Individual"
import { AIChat_Conversation_IndividualAudio } from "../AIChat_Conversation_IndividualAudio"
import { AIChat_Conversation_IndividualImage } from "../AIChat_Conversation_IndividualImage"
import { AIChat_Conversation_IndividualImages } from "../AIChat_Conversation_IndividualImages"
import { AIChat_Conversation_IndividualMap } from "../AIChat_Conversation_IndividualMap"
import { AIChat_Conversation_IndividualPdf } from "../AIChat_Conversation_IndividualPdf"
import { AIChat_Conversation_IndividualResource } from "../AIChat_Conversation_IndividualResource"
import { AIChat_Converstaion_IndividualQRCode } from "../AIChat_Converstaion_IndividualQRCode"
import { AIChat_Questions } from "../AIChat_Questions"
import { MessageContainer } from "../styles/AIChat_ConversationWrapper"
import { AIChat_PopupForm } from "./AIChatForm"
import { INDEX_D_AIChatPopupWrapper } from "./styles/INDEX_D_AIChatPopupWrapper"

export const INDEX_D_AIChatPopup = ({ showModalToggle }) => {
  const [input, setInput] = useState("")
  const { setIsExpand, isExpand, isHistory, setIsHistory } =
    useDashboardEditorAIChat_Ctx()
  console.log({ isExpand })
  const data = [
    {
      component: <AIChat_Conversation_IndividualMap />,
      isSender: false,
    },
    {
      component: <AIChat_Converstaion_IndividualQRCode />,
      isSender: false,
    },
    {
      component: <AIChat_Conversation_IndividualResource />,
      isSender: false,
    },
    {
      component: (
        <AIChat_Conversation_Individual
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          isSender={true}
          showModalToggle={showModalToggle}
        />
      ),
      isSender: false,
    },
    {
      component: <AIChat_Conversation_IndividualImages />,
      isSender: false,
    },
    {
      component: <AIChat_Conversation_IndividualImage />,
      isSender: false,
    },
    {
      component: <AIChat_Conversation_IndividualPdf isSender={false} />,
      isSender: false,
    },
    {
      component: <AIChat_Conversation_IndividualPdf isSender={true} />,
      isSender: true,
    },
    {
      component: <AIChat_Conversation_IndividualPdf isSender={true} />,
      isSender: true,
    },
    {
      component: <AIChat_Conversation_IndividualAudio />,
      isSender: true,
    },
    {
      component: (
        <AIChat_Conversation_Individual
          message="Lorem ispum"
          isSender={true}
          showModalToggle={showModalToggle}
        />
      ),
      isSender: false,
    },
    {
      component: <AIChat_Questions />,
      isSender: false,
    },
  ]
  let historyData = [
    {
      component: <AIChat_Conversation_IndividualAudio />,
      isSender: true,
    },
    {
      component: (
        <AIChat_Conversation_Individual
          message="Lorem ispum"
          isSender={true}
          showModalToggle={showModalToggle}
        />
      ),
      isSender: false,
    },
  ]
  return (
    <INDEX_D_AIChatPopupWrapper isFull={isExpand} isHistory={isHistory}>
      <div>
        {isHistory ? (
          <span>
            <Dashboard_AIChatPopopHistoryBackSvg
              onClick={() => setIsHistory(!isHistory)}
            />
            History
          </span>
        ) : (
          <span>Chat</span>
        )}

        <div>
          <Dashboard_AIChatPopupModalHistorySvg
            onClick={() => setIsHistory(!isHistory)}
          />
          <Dashboard_AIChat_PopupModalFullScreenSvg
            onClick={() => setIsExpand(!isExpand)}
          />
        </div>
      </div>
      <div>
        {isHistory
          ? historyData.map((msg, index) => {
              return (
                <MessageContainer isSender={msg.isSender} key={index}>
                  {msg.component}
                </MessageContainer>
              )
            })
          : data.map((msg, index) => {
              return (
                <MessageContainer isSender={msg.isSender} key={index}>
                  {msg.component}
                </MessageContainer>
              )
            })}
      </div>
      <div>
        <AIChat_PopupForm input={input} setInput={setInput} />
      </div>
    </INDEX_D_AIChatPopupWrapper>
  )
}
