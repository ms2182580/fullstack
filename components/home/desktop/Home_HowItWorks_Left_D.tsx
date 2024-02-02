import DefaultIcon from "@/assets/icons/home/home_how-it-works_1.svg"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { Home_HowItWorks_Left_DWrapper } from "./styles/Home_HowItWorks_Left_DWrapper"

type Props = {
  iconSVG: any /* This is a SVG icon  */
  h4Title: string
  h5Title: string
  paragraph: string
  buttonText: string
}

const paragraphDefaultText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae quasi sapiente dignissimos veritatis recusandae dolorum iste assumenda cupiditate, pariatur in, minima voluptas aliquam totam numquam quia perferendis suscipit doloribus tempore sit. Neque, labore placeat maxime hic, autem assumenda voluptatibus quas libero nam porro vitae esse nemo adipisci ad aperiam quae saepe odio. Cumque, quasi aliquid!"

export const Home_HowItWorks_Left_D = ({
  iconSVG = DefaultIcon,
  h4Title = "title for h4",
  h5Title = "title for h5",
  paragraph = paragraphDefaultText,
  buttonText = "default button text",
}: Props) => {
  const TheIcon = iconSVG

  return (
    <Home_HowItWorks_Left_DWrapper>
      <header>
        <div>
          <TheIcon />
          <H4>{h4Title}</H4>
        </div>
        <h5>{h5Title}</h5>
      </header>
      <P>{paragraph}.</P>
      <button>{buttonText}</button>
    </Home_HowItWorks_Left_DWrapper>
  )
}
