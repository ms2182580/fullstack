import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import { Highlights_D } from "@/components/org/highlights/Highlights_D"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "@/components/org/verified/Verified"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import Image from "next/image"
import { useMemo } from "react"
import { ORG_D_Results_Card_Hearth } from "../../second-page/desktop/ORG_D_Results_Card_Hearth"
import { ORG_D_Detail_MainCard2Wrapper } from "./styles/ORG_D_Detail_MainCard2Wrapper"

/* 
!FH0
- Create the new main card
- This component should be renamed to "Overview"
*/
export const ORG_D_Detail_MainCard2 = () => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData_Backend()

  const theID = useMemo(() => {
    const dataThirdPage =
      thirdpageDataORG?.[DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE] ?? null

    return (
      dataThirdPage?.[DATA_ORG_KeyNamesForCards_D_KEYS.SECTIONS][0].toNavbar
        .id ?? "#"
    )
  }, [thirdpageDataORG])

  return (
    <ORG_D_Detail_MainCard2Wrapper id={theID}>
      <H2>Overview</H2>
      <article>
        <div>
          <span>
            <span>
              <Image src={Backup_Image} alt={`Placeholder image`} />
              <ORG_D_Results_Card_Hearth />
              <Verified />
            </span>
            <p>show 6 photos</p>
          </span>
          <span>
            <h2>Title</h2>
            <h3>sub Title</h3>
            <h3>city</h3>
            <StarsRatingReview_D rating={5} reviews={99} />
            <Highlights_D highlights={"free trial"} />
          </span>
        </div>
        <div>
          <h3>Class focus</h3>
          <ul>
            <li title="Punching">PunchingPunchingPunchingPunching</li>
            <li>Routines RoutinesRoutinesRoutinesRoutinesRoutines</li>
            <li>Calisthenics</li>
            <li>Stretchinig</li>
          </ul>
        </div>
        <div>About here</div>
        <div>Last updated</div>
      </article>
    </ORG_D_Detail_MainCard2Wrapper>
  )
}
