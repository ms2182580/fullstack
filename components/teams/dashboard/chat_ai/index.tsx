import SvgMagicWand from "@/assets/icons/magic_wand_active.svg"
import SvgMagnifying from "@/assets/icons/magnifying_glass_default.svg"
import ImgLightbulb from "@/assets/images/teams/img-lightbulb.png"
import Image, { StaticImageData } from "next/image"
import { Card, CardProps } from "./card"
import { InputSearch } from "./input-search"
import { INDEX_ChatAIWrapper } from "./styles/index-wrapper"

const cardsData: CardProps[] = [
  {
    svg: ImgLightbulb,
    title: "See Categories",
    listOfOptions: [
      "Categories behavioral health?",
      "10 most popular categories in NYC",
    ],
  },
  {
    svg: SvgMagnifying,
    title: "Get Listing",
    listOfOptions: [
      "Yoga providers in NY, NY 10027",
      "Autism resources in 18302",
    ],
  },
  {
    svg: SvgMagicWand,
    title: "Create Content",
    listOfOptions: [
      "Respond to a FB resource request",
      "Request help from a provider on IG",
    ],
  },
]

type Props = {
  img: StaticImageData
  activeCardProp: CardProps["title"]
  whatUserWantToday: "categories" | "resources"
  alt: string
}

export const INDEX_ChatAI = ({
  img,
  activeCardProp,
  whatUserWantToday,
  alt,
}: Props) => {
  return (
    <INDEX_ChatAIWrapper>
      <Image src={img} alt={alt} />

      <h1>What {whatUserWantToday} do you need today?</h1>
      <ul>
        {cardsData.map(({ svg, title, listOfOptions }, index) => {
          const activeCard = activeCardProp === title

          return (
            <Card
              key={title}
              svg={svg}
              title={title}
              listOfOptions={listOfOptions}
              allowFocus={activeCard}
            />
          )
        })}
      </ul>

      <InputSearch />
    </INDEX_ChatAIWrapper>
  )
}
