import {
  ChatAIAA2Svg,
  ChatAIAttachSvg,
  ChatAIWWWSvg,
  ChatAI_0_Tiny_LogoSvg,
  ChatAI_D_AccessibilitySvg,
  DownArrowTinySvg,
  EmojiWaveSvg,
  ResizeSvg,
  SendMessageSvg,
  XSvg,
} from "../../../assets/icons/index"
import { H4 } from "../../ui/heading_body_text/HeaderFonts"
import { ChatShowedWrapper } from "./styles/ChatShowedWrapper.js"

export const ChatShowed = ({ handleShowChat }) => {
  return (
    <ChatShowedWrapper>
      <div>
        <div>
          <ChatAI_0_Tiny_LogoSvg />
          <H4 semibold cta>
            Ask a Question
          </H4>
        </div>
        <div>
          <span tabIndex={0}>
            <ResizeSvg />
          </span>
          <span
            tabIndex={0}
            onClick={handleShowChat}
            onKeyDown={handleShowChat}
          >
            <XSvg />
          </span>
        </div>
      </div>

      <div>
        <p className="leftChat">
          <span>
            Hi, <EmojiWaveSvg />
          </span>
          <span>
            I'm your <strong>Inclusive</strong> Assistant.
          </span>
          <span>I'm here to help</span>
          <span>
            <ChatAI_D_AccessibilitySvg />
          </span>
        </p>

        <p className="leftChat">Users often ask:</p>

        <div>
          <button>Is this resource a good fit?</button>
          <button>What is a care plan?</button>
          <button>Can I see my user dashboard?</button>
          <button>View my saved listings</button>
        </div>

        <p className="rightChat">View my saved listings</p>

        <p className="leftChat">
          Your listings are <span tabIndex={0}>here</span>
        </p>

        <p className="leftChat">How did I do?</p>

        <div>
          <span tabIndex={0}>🙂</span>
          <span tabIndex={0}>😐</span>
          <span tabIndex={0}>😕</span>{" "}
        </div>
      </div>

      <div>
        <textarea placeholder="Ask me a question" />
        <span tabIndex={0}>
          {" "}
          <SendMessageSvg />{" "}
        </span>
      </div>

      <footer>
        <div>
          <p tabIndex={0}>
            Service <DownArrowTinySvg />
          </p>
        </div>
        <div>
          <span tabIndex={0}>
            <ChatAIAttachSvg />
          </span>
          <span tabIndex={0}>
            <ChatAIWWWSvg />
          </span>
          <span tabIndex={0}>
            <ChatAIAA2Svg />
          </span>
        </div>
      </footer>
    </ChatShowedWrapper>
  )
}
