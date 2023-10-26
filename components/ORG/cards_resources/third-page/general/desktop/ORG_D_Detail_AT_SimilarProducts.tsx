import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts.js"
import { Fragment } from "react"
import { ORG_D_Detail_AT_SimilarProducts_Section } from "./ORG_D_Detail_AT_SimilarProducts_Section"
import { ORG_D_Detail_AT_SimilarProductsWrapper } from "./styles/ORG_D_Detail_AT_SimilarProductsWrapper"

export const enum Grid_KEYS {
  KEYS = "KEYS",
}

// export type CategoriesOfProducts_Types = {
//   key: string
//   values: {
//     value?: string | number
//     component?: {
//       toRender: "component_StarsRatingReview_D"
//       props: {
//         rating?: number
//         reviews?: number
//         isDetail?: boolean
//       }
//     }
//   }[]
// }[]

// const categoriesOfProducts: CategoriesOfProducts_Types = [
//   {
//     key: "Customer rating",
//     values: [
//       {
//         component: {
//           toRender: "component_StarsRatingReview_D",
//           props: {
//             rating: generateRandomNumber(4, 5),
//             reviews: generateRandomNumber(44, 99),
//           },
//         },
//       },
//       {
//         component: {
//           toRender: "component_StarsRatingReview_D",
//           props: {
//             rating: generateRandomNumber(4, 5),
//             reviews: generateRandomNumber(44, 99),
//           },
//         },
//       },
//       {
//         component: {
//           toRender: "component_StarsRatingReview_D",
//           props: {
//             rating: generateRandomNumber(4, 5),
//             reviews: generateRandomNumber(44, 99),
//           },
//         },
//       },
//     ],
//   },
//   {
//     key: "Price",
//     values: [
//       {
//         value: 1231,
//       },
//       {
//         value: 1232,
//       },
//       {
//         value: 1233,
//       },
//     ],
//   },
//   {
//     key: "Speed",
//     values: [
//       {
//         value: "Quality recertified_1",
//       },
//       {
//         value: "Quality recertified_2",
//       },
//       {
//         value: "Quality recertified_3",
//       },
//     ],
//   },
//   {
//     key: "Range",
//     values: [
//       {
//         value: "16 GB_1",
//       },
//       {
//         value: "16 GB_2",
//       },
//       {
//         value: "16 GB_3",
//       },
//     ],
//   },
//   {
//     key: "Seat lift",
//     values: [
//       {
//         value: "core i7_A",
//       },
//       {
//         value: "core i7_B",
//       },
//       {
//         value: "core i7_C",
//       },
//     ],
//   },
// ]

export const ORG_D_Detail_AT_SimilarProducts = ({ cardFirstRow, cardSecondRow }) => {
  return (
    <ORG_D_Detail_AT_SimilarProductsWrapper>
      <header>
        <H3>Similar products</H3>
      </header>

      <div>
        <div>
          {cardFirstRow.map((xcardFirstRow, index) => {
            return (
              <Fragment key={index}>
                <ORG_D_Detail_AT_SimilarProducts_Section
                  image={xcardFirstRow.image}
                  title={xcardFirstRow.title}
                  subtitle={xcardFirstRow.subtitle}
                  linkRef={xcardFirstRow.linkRef}
                />
              </Fragment>
            )
          })}
        </div>

        <ul className={Grid_KEYS.KEYS}>
          {cardSecondRow.map((xCategories, indexCategories) => {
            let isOdd = indexCategories % 2 === 0

            return (
              <li
                key={`${xCategories.key}_${indexCategories}`}
                className={isOdd ? "isOdd" : "isEven"}>
                <span>{xCategories.key}</span>

                <span>
                  {xCategories.values.map((xValues, indexValues) => {
                    if (Boolean(xValues.component)) {
                      return (
                        <Fragment key={`${xValues.component.toRender}_${indexValues}`}>
                          <StarsRatingReview_D
                            rating={xValues.component.props.rating}
                            reviews={xValues.component.props.reviews}
                          />
                        </Fragment>
                      )
                    }

                    return (
                      <Fragment key={`${xValues.value}_${indexValues}`}>
                        <span>{xValues.value}</span>
                      </Fragment>
                    )
                  })}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      <span>
        <P tabIndex={0}>View more details</P>
      </span>
    </ORG_D_Detail_AT_SimilarProductsWrapper>
  )
}
