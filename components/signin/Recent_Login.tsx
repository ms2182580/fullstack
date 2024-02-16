import { Sigin_RecentLoginScreen } from "@/assets/icons"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { Recent_LoginWrapper } from "./styles/Recent_LoginWrapper"
import Image from "next/image"
import { useSignup_Ctx } from "@/context/Ctx_Signup"

export const Recent_Login = () => {
  const { setStep, step } = useSignup_Ctx()
  return (
    <Recent_LoginWrapper>
      <H3>Recent logins</H3>
      <span>Click your picture or add an account</span>
      <div>
        <div>
          <Image
            src={"/images/permobil.png"}
            alt=""
            width={250.956}
            height={265.74}
          />
          <span>Jane Doe</span>
        </div>
        <div onClick={() => setStep("login")}>
          <span>
            <Sigin_RecentLoginScreen />
          </span>
          <span>Jane Doe</span>
        </div>
      </div>
    </Recent_LoginWrapper>
  )
}
