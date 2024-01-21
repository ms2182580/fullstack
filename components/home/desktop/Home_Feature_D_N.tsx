import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Home_Feature_D_NWrapper } from "./styles/Home_Feature_D_NWrapper"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Hero_D_ClipboardSvg } from "@/assets/icons"
import Image from "next/image"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const Home_Feature_D_N = () => {
  return (
    <Home_Feature_D_NWrapper>
      <P semibold>OUR FEATURE</P>
      <H2>Simple, yet powerful features for ease of mind</H2>

      <div>
        <div>
          <div>
            <Hero_D_ClipboardSvg />
            <span>Ai Assisted Care Plans</span>
          </div>
          <H3>
            Transform Your Child’s Care In Just A <br /> Few Clicks
          </H3>
          <p>
            Your situation is unique. So is your Care Plan. Inclusive offers a
            thoughtful, tailored plan that guides you step-by-step towards your
            child’s goals or dreams.{" "}
          </p>
          <ButtonSmall>Sign Up</ButtonSmall>
        </div>
        <Image
          src={"/background/MacBook.png"}
          height={820}
          width={1069}
          alt="MacBook"
        />
      </div>
    </Home_Feature_D_NWrapper>
  )
}
