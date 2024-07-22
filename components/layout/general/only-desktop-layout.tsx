import { UnderConstruction } from "@/components/under-construction/UnderConstruction"
import { OnlyDesktopLayoutWrapper } from "./styles/OnlyDesktopLayoutWrapper"

const message = [
  "Please, use the desktop version",
  "This version can used starting at 1025px of width screen",
]

export const OnlyDesktopLayout = () => {
  return (
    <OnlyDesktopLayoutWrapper>
      <UnderConstruction customMessage={message} />
    </OnlyDesktopLayoutWrapper>
  )
}
