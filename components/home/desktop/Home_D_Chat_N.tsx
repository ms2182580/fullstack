import Image from "next/image"
import { Home_D_Chat_NWrapper } from "./styles/Home_D_Chat_NWrapper"
import { Hero_D_ChatSvg } from "@/assets/icons"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const Home_D_Chat_N = () => {
  return (
    <Home_D_Chat_NWrapper>
      <div>
        <span>
          <Hero_D_ChatSvg />
          <span>Chat</span>
        </span>
        <H3>Tap into AI Wisdom for Quick Answers</H3>
        <P>
          Meet your friendly AI guide. It will prompt you with key questions,
          tailoring recommendations and answering any concerns with respect and
          compassion to set up your Care Plan.
        </P>
        <ButtonSmall>Sign Up</ButtonSmall>
      </div>
      <Image
        src={"/background/DashboardChat.png"}
        height={820}
        width={1069}
        alt="MacBook"
      />
    </Home_D_Chat_NWrapper>
  )
}
