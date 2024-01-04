import { ChatTextWrapper } from "./styles/ChatTextWrapper.js"

export const ChatText = ({ textToShow, leftOrRight = "left" }) => {
  return (
    <ChatTextWrapper className={leftOrRight === "left" ? "leftChat" : "rightChat"}>
      {typeof textToShow === "string" ? (
        <>{textToShow}</>
      ) : Array.isArray(textToShow) ? (
        <>
          {textToShow.map((xTextToShow, index) => (
            <>
              <span key={xTextToShow}>{xTextToShow}</span>
            </>
          ))}
        </>
      ) : null}
    </ChatTextWrapper>
  )
}
