import SvgMagnifyingGlassDefault from "@/assets/icons/magnifying_glass_default.svg"
import SvgMagicWand from "@/assets/icons/org/third-page/magic-wand.svg"
import SvgTeamsDashboard from "@/assets/images/teams/teams-dashboard.svg"
import { Card, CardType } from "./card"
import { IndexWrapper } from "./styles/index-wrapper"

/* 
!FH0

https://www.figma.com/design/bF5zcHk2wGGueHZHHTtkoi/12.2024---Directory---Search-Listing-and-Yellow-Pages-app---upload?node-id=203-33354&t=HAq2gWcjKvWlLEez-4
*/

const cardsData: CardType[] = [
  {
    icon: SvgMagnifyingGlassDefault,
    title: "Search the ORG",
    paragraph:
      "Share a provider request and find the best local providers, services or products",
    buttonIsPrimary: true,
  },
  {
    icon: SvgMagicWand,
    title: "Discover categories",
    paragraph:
      "Share a family’s resource request and find perfect support options just for them",
    buttonIsPrimary: false,
  },
]

export const INDEX_TeamsDashboard = () => {
  return (
    <IndexWrapper>
      <header>
        <div>
          <h1>
            Hi there,
            <br />
            How will you help a family today?
          </h1>
        </div>

        <SvgTeamsDashboard />
      </header>

      <ul>
        {cardsData.map(({ icon, title, paragraph, buttonIsPrimary }, index) => {
          return (
            <li key={index}>
              <Card
                icon={icon}
                title={title}
                paragraph={paragraph}
                buttonIsPrimary={buttonIsPrimary}
              />
            </li>
          )
        })}
      </ul>
    </IndexWrapper>
  )
}
