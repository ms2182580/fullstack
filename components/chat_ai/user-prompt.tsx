import { useEffect, useRef } from "react"
import { UserPromptWrapper } from "./styles/user-prompt-wrapper"

type Props = {
  children: string
}

export const UserPrompt = ({ children }: Props) => {
  const refUserPrompt = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (refUserPrompt.current) {
      refUserPrompt.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [children])

  return (
    <UserPromptWrapper ref={refUserPrompt}>
      <p>{children}</p>
    </UserPromptWrapper>
  )
}
