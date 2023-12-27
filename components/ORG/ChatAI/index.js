import { ChatAIWrapper } from "./styles/ChatAIWrapper.js"

import { useEffect, useRef, useState } from "react"
import { ChatAI_0_LogoSvg } from "../../../assets/icons/index.js"
import { ChatShowed } from "./ChatShowed.js"

export const ChatAI = () => {
  const [showChat, setShowChat] = useState(false)

  let handleShowChat = (e) => {
    if (e.type === "click" || e.code === "F1" || e.code === "Enter" || e.key === "Enter") {
      setShowChat(true)
    }
  }

  let handleCloseChat = (e) => {
    if (e.type === "dblclick") {
      setShowChat(false)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if ((event.shiftKey && event.key.toLowerCase() === "a") || event.key === "F1") {
        handleShowChat(event)
      }

      if (event.key === "Escape") {
        setShowChat(false)
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [])

  const refToChat = useRef(null)

  useEffect(() => {
    if (showChat && refToChat.current) {
      refToChat.current.focus()
    }
  }, [showChat, refToChat])

  return (
    <ChatAIWrapper>
      <span
        onClick={handleShowChat}
        onDoubleClick={handleCloseChat}
        onKeyDown={handleShowChat}
        tabIndex={0}
        ref={refToChat}>
        <ChatAI_0_LogoSvg />
      </span>

      {showChat && (
        <>
          <ChatShowed handleShowChat={handleShowChat} />
        </>
      )}
    </ChatAIWrapper>
  )
}
