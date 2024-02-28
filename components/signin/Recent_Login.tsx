import { Sigin_RecentLoginScreen } from "@/assets/icons"
import { useSignup_Ctx } from "@/context/Ctx_Signup"
import Image from "next/image"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { Recent_LoginWrapper } from "./styles/Recent_LoginWrapper"

export const Recent_Login = () => {
  const { setStep, step } = useSignup_Ctx()
  return (
    <Recent_LoginWrapper>
      <header>
        <H3>Recent logins</H3>
        <P>Click your picture or add an account</P>
      </header>

      <div>
        <section>
          <Image
            src={"/images/permobil.png"}
            alt=""
            width={250.956}
            height={265.74}
          />
          <span>Jane Doe</span>
        </section>

        {/*!FH This should be an anchor tag element, because it suposse to move the view of the user to a «login» screen  */}
        <section onClick={() => setStep("login")}>
          <span>
            <Sigin_RecentLoginScreen />
          </span>
          <span>Jane Doe</span>
        </section>
      </div>
    </Recent_LoginWrapper>
  )
}
