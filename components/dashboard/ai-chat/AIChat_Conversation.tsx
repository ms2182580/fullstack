import {
  AIChat_ConversationWrapper,
  MessageContainer,
} from "./styles/AIChat_ConversationWrapper"
import { AIChat_Conversation_Individual } from "./AIChat_Conversation_Individual"
import { AIChat_Converstaion_IndividualQRCode } from "./AIChat_Converstaion_IndividualQRCode"
import { AIChat_Conversation_IndividualMap } from "./AIChat_Conversation_IndividualMap"
import { AIChat_Conversation_IndividualResource } from "./AIChat_Conversation_IndividualResource"
import { AIChat_Conversation_IndividualImages } from "./AIChat_Conversation_IndividualImages"
import { AIChat_Conversation_IndividualImage } from "./AIChat_Conversation_IndividualImage"
import { AIChat_Conversation_IndividualPdf } from "./AIChat_Conversation_IndividualPdf"
import { AIChat_Conversation_IndividualAudio } from "./AIChat_Conversation_IndividualAudio"
import { AIChat_Questions } from "./AIChat_Questions"
import { AIChat_SuggestionsResponse } from "./AIChat_SuggestionsResponse"

export const AIChat_Conversation = ({ showModalToggle }) => {
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
    {
      component: <AIChat_SuggestionsResponse />,
      isSender: true,
    },
  ]
  return (
    <AIChat_ConversationWrapper>
      <div>
        {data.map((msg, index) => {
          return (
            <MessageContainer isSender={msg.isSender} key={index}>
              {msg.component}
            </MessageContainer>
          )
        })}
      </div>
    </AIChat_ConversationWrapper>
  )
}
