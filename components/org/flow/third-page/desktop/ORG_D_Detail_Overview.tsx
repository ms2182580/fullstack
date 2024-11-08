import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { SaveResourceDialog } from "@/components/org/save-resource-hearth/SaveResourceDialog"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified_Detail } from "@/components/org/verified/Verified_Detail"
import { Caption } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2, H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import Image from "next/image"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Detail_About } from "./ORG_D_Detail_About"
import { ORG_D_Detail_MainCardPhotos } from "./ORG_D_Detail_MainCardPhotos"
import { ORG_D_Detail_Share } from "./ORG_D_Detail_Share"
import { ORG_D_Detail_OverviewWrapper } from "./styles/ORG_D_Detail_OverviewWrapper"

export const ORG_D_Detail_Overview = () => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  /* The only purpose of this is display the correct dummy photo */
  const { query } = useRouter()

  const dataOnCard = useMemo(() => {
    const thirdPageData =
      thirdpageDataORG?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ?? null

    const allData = thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]

    const objToReturn = {
      theID:
        thirdPageData?.[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS][0]?.toNavbar
          ?.id ?? "#",
      title: allData.recordName,
      subtitle: allData.recordSubtype,
      location: `${allData.address[0]?.city}, ${allData.address[0]?.state}`,
      rating: {
        stars: 5,
        reviews: 99,
      },
      highlight: "free trial",
      showPhotos: 6,
      about: {
        name: allData.recordName,
        lastName: "last_name",
      },
      lastUpdated: "Last updated February 13, 2024",
    }

    return objToReturn
  }, [thirdpageDataORG])

  return (
    <ORG_D_Detail_OverviewWrapper id={dataOnCard.theID}>
      <H2>overview</H2>
      <article>
        <div>
          <span>
            <span>
              <Image
                src={imagesToUse_backup[Number(query?.whichPhoto)]}
                alt={`Placeholder image`}
              />
              <span>
                <SaveResourceDialog nameOfResource={dataOnCard.title} />
              </span>
              <Verified_Detail />
            </span>

            <ORG_D_Detail_MainCardPhotos
              amountOfPhotos={dataOnCard.showPhotos}
              name={dataOnCard.title}
              lastName={""}
              photo={imagesToUse_backup[Number(query?.whichPhoto)]}
            />
          </span>

          <span>
            <H2>{dataOnCard.title}</H2>
            <H3>{dataOnCard.subtitle}</H3>
            <H4>{dataOnCard.location}</H4>
            <StarsRatingReview_D
              rating={dataOnCard.rating.stars}
              reviews={dataOnCard.rating.reviews}
            />
            <Highlights_D highlights={dataOnCard.highlight} />
          </span>

          <span>
            <ORG_D_Detail_Share
              picture={imagesToUse_backup[Number(query?.whichPhoto)]}
              name={dataOnCard.title}
              lastName={""}
            />
          </span>
        </div>

        <div>
          <H3>Class focus</H3>
          <ul>
            <li title="Punching & Kicking">Punching & Kicking</li>
            <li>Consistent Routines</li>
            <li>Calisthenics</li>
            <li>Stretchinig</li>
          </ul>
        </div>

        <ORG_D_Detail_About
          name={dataOnCard.about.name}
          lastName={dataOnCard.about.lastName}
        />
        <Caption>{dataOnCard.lastUpdated}</Caption>
      </article>
    </ORG_D_Detail_OverviewWrapper>
  )
}
