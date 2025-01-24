import SvgMagicWand from "@/assets/icons/magic_wand_active.svg"
import SvgMagnifying from "@/assets/icons/magnifying_glass_default.svg"

import ImgCategories from "@/assets/images/teams/img-categories.png"
import ImgLightbulb from "@/assets/images/teams/img-lightbulb.png"
import Image from "next/image"
import { Card, CardProps } from "./card"
import { InputSearch } from "./input-search"
import { INDEX_CategoriesWrapper } from "./styles/index-wrapper"

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

export const INDEX_Categories = () => {
  return (
    <INDEX_CategoriesWrapper>
      <Image src={ImgCategories} alt="image of a family" />

      <h1>What categories do you need today?</h1>
      <ul>
        {cardsData.map(({ svg, title, listOfOptions }, index) => {
          const allowFocus = index === 0
          return (
            <Card
              key={title}
              svg={svg}
              title={title}
              listOfOptions={listOfOptions}
              allowFocus={allowFocus}
            />
          )
        })}
      </ul>

      <InputSearch />
    </INDEX_CategoriesWrapper>
  )
}
