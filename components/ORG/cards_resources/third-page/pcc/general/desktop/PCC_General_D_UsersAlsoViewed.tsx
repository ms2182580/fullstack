import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/ORG/DATA_ORG_KeyNamesForCards_D"
import Image from "next/image"
import { Fragment } from "react"
import { PCC_General_D_UsersAlsoViewedWrapper } from "./styles/PCC_General_D_UsersAlsoViewedWrapper"

const tags = ["All", "Similar Price", "Same subject", "Similar class structure", "Also from Kicking the spectrum", "More Tags"]

export const PCC_General_D_UsersAlsoViewed = ({ idInnerbar = "#" }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  return (
    <PCC_General_D_UsersAlsoViewedWrapper id={idInnerbar}>
      <H3>Users also viewed</H3>
      <ul>
        {tags.map((xElement, index) => {
          const isLastIndex = tags.length - 1 !== index

          return (
            <Fragment key={`${xElement}_${index}`}>
              <li tabIndex={isLastIndex && 0}>{xElement}</li>
            </Fragment>
          )
        })}
      </ul>

      <div>
        {thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.OTHER][DATA_ORG_KeyNamesForCards_D_KEYS.GET_FILTER_THIRDPAGE_DATAONOBJECT][
          DATA_ORG_KeyNamesForCards_D_KEYS.USERS_ALSO_VIEWES
        ].map((xElement, index) => (
          <div key={`${xElement.title}_${index}`}>
            <div>
              <Image
                src={xElement.image}
                layout="responsive"
                objectFit="contain"
                objectPosition={"0% 0px"}
                width={1}
                height={1}
              />
            </div>
            <div>
              <p>{xElement.title}</p>
              <StarsRatingReview_D rating={xElement.rating} />

              <div>
                <p>{xElement.review}</p>
                <button tabIndex={-1}>Compare</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p tabIndex={0}>View All</p>
    </PCC_General_D_UsersAlsoViewedWrapper>
  )
}
