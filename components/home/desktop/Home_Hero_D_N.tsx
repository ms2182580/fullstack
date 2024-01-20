import { Home_D_Hero_NWrapper } from "./styles/Home_D_Hero_NWrapper"
import HeroImg from "@/assets/images/Hero/hero image.png"
import Image from "next/image"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { useRouter } from "next/router"
import { Hero_D_Help_N } from "./Hero_D_Help_N"
import { H1 } from "@/components/ui/heading_body_text/HeaderFonts"

export const Home_Hero_D_N = () => {
  const route = useRouter()

  const handleNavigateORG = (): void => {
    route.push("/org/typed-flow")
  }
  return (
    <Home_D_Hero_NWrapper>
      <div>
        <div>
          <H1>Heading</H1>
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
