import SVGArrow from "@/assets/icons/arrow_up.svg"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { UserPromptWrapper } from "./styles/user-prompt-wrapper"

type Props = {
  children: string
}

export const UserPrompt = ({ children }: Props) => {
  const refUserPrompt = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (refUserPrompt.current) {
      /* const contentHeight = refUserPrompt.current.offsetHeight
      console.log("contentHeight:", contentHeight)
      
      if (contentHeight < 500) {
        refUserPrompt.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
    
      }  */

      refUserPrompt.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [children])

  return (
    <UserPromptWrapper ref={refUserPrompt}>
      <p>{children}</p>
      <Link href={`/teams/new-search/resources/first`}>
        <p>Search selected categories for resources</p> <SVGArrow />
      </Link>
    </UserPromptWrapper>
  )
}
