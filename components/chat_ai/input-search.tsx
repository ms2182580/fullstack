import SvgMic from "@/assets/icons/org/third-page/mic.svg"
import SvgSend from "@/assets/icons/org/third-page/paper-plane.svg"
import SvgPaperClip from "@/assets/icons/org/third-page/paperclip.svg"
import { useRef } from "react"
import { InputSearchWrapper } from "./styles/input-search-wrapper"

export const InputSearch = ({ theOnchange, theOnKeyDown, dataInputState }) => {
  const theRefInput = useRef<HTMLInputElement>(null)

  const handleFocusInput = (e) => {
    if (e.type === "click" && theRefInput?.current) {
      theRefInput?.current.focus()
    }
  }

  const handleInteractWithClip = (e) => {
    if (e.type === "click" || e.code === "Enter") {
    }
  }

  const handleInteractWithAudio = (e) => {
    if (e.type === "click" || e.code === "Enter") {
    }
  }

  return (
    <InputSearchWrapper
      onClick={handleFocusInput}
      isDataInputStateEmpty={dataInputState !== ""}
    >
      <div>
        <SvgPaperClip
          onClick={handleInteractWithClip}
          onKeyDown={handleInteractWithClip}
          tabIndex={0}
        />
        <SvgMic
          onClick={handleInteractWithAudio}
          onKeyDown={handleInteractWithAudio}
          tabIndex={0}
        />
      </div>
      <input
        ref={theRefInput}
        placeholder="Type or paste a new resource request..."
        onChange={theOnchange}
        onKeyDown={theOnKeyDown}
        value={dataInputState}
      />
      <SvgSend tabIndex={0} />
    </InputSearchWrapper>
  )
}
