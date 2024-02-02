import Quotation from "@/assets/icons/home/home_quotation.svg"
import Home_2 from "@/assets/images/home/home_2.png"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import Image from "next/image"
import { Home_NewPath_D_ProgressBar } from "./Home_NewPath_D_ProgressBar"
import { Home_NewPath_DWrapper } from "./styles/Home_NewPath_DWrapper"

export const Home_NewPath_D = () => {
  return (
    <Home_NewPath_DWrapper>
      <Home_NewPath_D_ProgressBar />

      <div>
        <Image
          src={Home_2}
          alt="A woman sitting on his laptop with a complain expresion in his face"
        />

        <div>
          <Quotation />
          <P>
            I am at my wits end with his school refusal and not being able to
            help my child by simply explaining that body changes are normal.
          </P>
          <Quotation />
        </div>
      </div>
      <header>
        <H2>A new path in healthcare</H2>
        <H3>Kiyana’s Story</H3>
        <P>
          <span>
            Kiyana feels tired of having to constantly explain and define her
            son’s diagnosis and needs. He is exhibiting violent outbursts at
            school, and Kiyana wonders if this may have to do with him going
            through puberty. She is not sure what to do next to best help her
            son.
          </span>

          <span>
            Looking for advice online leaves her feeling overwhelmed. She wants
            to communicate with her son’s school about his behavior. She also
            wants to be able to explain to him that the changes in his body are
            normal.
          </span>

          <span>
            A few parents from an online community suggest that she try using
            Inclusive, an all-in-one platform for families with intellectual and
            developmental disabilities.
          </span>
        </P>
      </header>
    </Home_NewPath_DWrapper>
  )
}
