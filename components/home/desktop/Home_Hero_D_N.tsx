import HeroImg from "@/assets/images/Hero/hero image.png"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/image"
import { useRouter } from "next/router"
import { Hero_D_Help_N } from "./Hero_D_Help_N"
import { Home_D_Hero_NWrapper } from "./styles/Home_D_Hero_NWrapper"

export const Home_Hero_D_N = () => {
  const { push } = useRouter()

  const handleNavigateORG = (): void => {
    push("/org")
  }
  return (
    <Home_D_Hero_NWrapper>
      <div>
        <div>
          <P>
            Inclusive uses AI to simplify and accelerate care coordination for
            families with <br /> Intellectual and developmental disabilities.
          </P>
          <P>Free forever platform created with you in mind.</P>
          <div>
            <ButtonSmall>Demo Product</ButtonSmall>
            <ButtonSmall secondary goToDynamic={handleNavigateORG}>
              Explore All Resource
            </ButtonSmall>
          </div>
        </div>
        <Image src={HeroImg} alt="Hero Image" width={522.98} height={512.182} />
      </div>
      <Hero_D_Help_N />
    </Home_D_Hero_NWrapper>
  )
}
