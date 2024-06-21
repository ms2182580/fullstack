import calendar from "@/assets/icons/org/third-page/calendar.svg"
import clock from "@/assets/icons/org/third-page/clock.svg"
import like from "@/assets/icons/org/third-page/like.svg"
import smile from "@/assets/icons/org/third-page/smile.svg"
import { ORG_D_Detail_Reviews_RatingWrapper } from "./styles/ORG_D_Detail_Reviews_RatingWrapper"

const defaultValues = [
  {
    name: "scheduling",
    rating: "5.0",
    icon: calendar,
  },
  {
    name: "customer service",
    rating: "5.0",
    icon: smile,
  },
  {
    name: "wait times",
    rating: "5.0",
    icon: clock,
  },
  {
    name: "feedback",
    rating: "5.0",
    icon: like,
  },
]

export const ORG_D_Detail_Reviews_Rating = () => {
  return (
    <ORG_D_Detail_Reviews_RatingWrapper>
      <ul>
        {defaultValues.map(({ name, rating, icon }) => {
          const Icon = icon

          return (
            <li key={`${name}_${rating}`}>
              <span>{name}</span>
              <span>{rating}</span>
              <Icon />
            </li>
          )
        })}
      </ul>
    </ORG_D_Detail_Reviews_RatingWrapper>
  )
}
