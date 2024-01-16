import { useEffect, useRef, useState } from "react"
import { ChatAI_0_LogoSvg } from "../../../assets/icons/index.js"
import { ChatAI_ComingSoon } from "./ChatAI_ComingSoon"
import { ChatShowed } from "./ChatShowed.js"
import { ChatAIWrapper } from "./styles/ChatAIWrapper"

export const ChatAI = () => {
  const [showChat, setShowChat] = useState(false)

  let handleShowChat = (e) => {
    if (
      e.type === "click" ||
      e.code === "F1" ||
      e.code === "Enter" ||
      e.key === "Enter"
    ) {
      // setShowChat(true)
    }
  }

  let handleCloseChat = (e) => {
    if (e.type === "dblclick") {
      // setShowChat(false)
    }
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (
        (event.shiftKey && event.key.toLowerCase() === "a") ||
        event.key === "F1"
      ) {
        // handleShowChat(event)
      }

      if (event.key === "Escape") {
        // setShowChat(false)
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
      // refToChat.current.focus()
    }
  }, [showChat, refToChat])

  /* const [comingSoonText, setComingSoonText] = useState(false)
  const handleShowComingSoonText = (e) => {
    if (e.type === "click" || e.code === "F1" || e.code === "Enter" || e.key === "Enter") {
      setComingSoonText(true)
    }

    if ((e.type === "click" || e.code === "F1" || e.code === "Enter" || e.key === "Enter") && comingSoonText) {
      setComingSoonText(false)
    }
  } */

  /* useEffect(() => {
    if (comingSoonText) {
      const id = setTimeout(() => {
        setComingSoonText(false)
      }, 1500)
    }
  }, [comingSoonText]) */

  const [comingSoonText, setComingSoonText] = useState(false)
  const timeoutRef = useRef<any>(null)
  const handleShowComingSoonText = (e) => {
    if (
      e.type === "click" ||
      e.code === "F1" ||
      e.code === "Enter" ||
      e.key === "Enter"
    ) {
      if (comingSoonText && timeoutRef.current) {
        setComingSoonText(false)
        clearTimeout(timeoutRef.current)
      } else {
        setComingSoonText(true)
      }
    }
  }
  useEffect(() => {
    if (comingSoonText) {
      timeoutRef.current = setTimeout(() => {
        setComingSoonText(false)
      }, 1500)
    } else {
      clearTimeout(timeoutRef.current)
    }

    return () => {
      clearTimeout(timeoutRef.current)
    }
  }, [comingSoonText])

  return (
    <ChatAIWrapper>
      <span
        /* onClick={handleShowChat}
        onDoubleClick={handleCloseChat}
        onKeyDown={handleShowChat} */

        onClick={handleShowComingSoonText}
        onKeyDown={handleShowComingSoonText}
        tabIndex={0}
        // ref={refToChat}
        ref={timeoutRef}
      >
        <ChatAI_0_LogoSvg />
      </span>

      {showChat && (
        <>
          <ChatShowed handleShowChat={handleShowChat} />
        </>
      )}

      {comingSoonText ? (
        <>
          <ChatAI_ComingSoon />
        </>
      ) : null}
    </ChatAIWrapper>
  )
}
