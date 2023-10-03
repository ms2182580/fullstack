import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment } from "react"
import ORG_D_Detail_Share_Modal_QRAltIcon from "../../../../../assets/Icons/ORG_D_Detail_Share_Modal_QRAltIcon.png"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2, H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Highlights_2_D } from "../../../highlights/Highlights_2_D"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../verified/Verified"
import { ORG_D_Results_Card_Hearth } from "../../second-page/desktop/ORG_D_Results_Card_Hearth"
import { ORG_D_Detail_About } from "./ORG_D_Detail_About"
import { ORG_D_Detail_CardEmail } from "./ORG_D_Detail_CardEmail"
import { ORG_D_Detail_CardLocation } from "./ORG_D_Detail_CardLocation"
import { ORG_D_Detail_CardPhone } from "./ORG_D_Detail_CardPhone"
import { ORG_D_Detail_CardWebsite } from "./ORG_D_Detail_CardWebsite"
import { ORG_D_Detail_Card_SecondRow_Info } from "./ORG_D_Detail_Card_SecondRow_Info"
import { ORG_D_Detail_HighlightBoxes } from "./ORG_D_Detail_HighlightBoxes"
import { ORG_D_Detail_MainCardLeftPhotos } from "./ORG_D_Detail_MainCardLeftPhotos"
import { ORG_D_Detail_MapComponent } from "./ORG_D_Detail_MapComponent"
import { ORG_D_Detail_Share } from "./ORG_D_Detail_Share"
import { ORG_D_Detail_Tooltip } from "./ORG_D_Detail_Tooltip"
import { ORG_D_Detail_MainCardWrapper } from "./styles/ORG_D_Detail_MainCardWrapper"

export const ORG_D_Detail_MainCard = ({ thirdpageDataORG }) => {
  console.dir("thirdpageDataORG:", thirdpageDataORG)
  const { push, query } = useRouter()
  let handlePushTo404 = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      push("/404")
    }
  }

  return (
    <ORG_D_Detail_MainCardWrapper id="About">
      <div className="LEFT">
        <div>
          <Image
            src={thirdpageDataORG.card.leftPart.photo.src}
            layout="responsive"
            objectFit="contain"
            objectPosition={"0px 0px"}
            width={1}
            height={1}
            alt={`Image of ${thirdpageDataORG.card.leftPart.title}`}
          />

          <ORG_D_Results_Card_Hearth />

          <Verified />
        </div>

        <ORG_D_Detail_MainCardLeftPhotos
          photo={thirdpageDataORG.card.leftPart.photo.src}
          name={thirdpageDataORG.card.leftPart.title}
          lastName={""}
        />

        <div>
          <ORG_D_Detail_CardPhone phoneNumber={thirdpageDataORG.card.leftPart.phone} />
          <ORG_D_Detail_CardEmail email={thirdpageDataORG.card.leftPart.email} />
          <ORG_D_Detail_CardWebsite
            firstName={thirdpageDataORG.fullName.first}
            lastName={thirdpageDataORG.fullName.last}
          />
          <ORG_D_Detail_CardLocation
            locationCity={thirdpageDataORG.card.leftPart.location.city}
            locationStreetNumber={thirdpageDataORG.card.leftPart.location.streetNumber}
            locationStreetName={thirdpageDataORG.card.leftPart.location.streetName}
            locationState={thirdpageDataORG.card.leftPart.location.state}
            howFar={thirdpageDataORG.card.leftPart.location.howFar}
          />
        </div>

        <ORG_D_Detail_MapComponent />
      </div>

      <div className="RIGHT">
        <div>
          <div>
            <ORG_D_Detail_Share
              picture={thirdpageDataORG.card.leftPart.photo.src}
              name={thirdpageDataORG.card.leftPart.title}
              lastName={""}
            />
          </div>

          <div>
            <H2 bold>
              {thirdpageDataORG.fullName.first} {thirdpageDataORG.fullName.last} CCC-SLP
            </H2>

            <ORG_D_Detail_Tooltip />
          </div>

          <H3>{query.subTitle}</H3>
          <P dark_gray>{thirdpageDataORG.card.leftPart.city}</P>

          <StarsRatingReview_D
            rating={thirdpageDataORG.card.leftPart.rating}
            reviews={thirdpageDataORG.card.leftPart.reviews}
          />

          <div className={!thirdpageDataORG.card.rightPart.highlightsPlus && !thirdpageDataORG.card.rightPart.highlights && "NO_HIGHLIGHT"}>
            <Highlights_2_D highlights={thirdpageDataORG.card.rightPart.highlightsPlus} />
            <ORG_D_Detail_HighlightBoxes meetingFormat={thirdpageDataORG.card.rightPart.highlights} />
          </div>
        </div>

        <div>
          {Object.entries(thirdpageDataORG.card.rightPart.thirdPageData.card).map((x, index) => {
            if (x[0] === "withBackground") {
              return (
                <div key={`${x[1].key}_${x[1].data.join(", ")}`}>
                  <ORG_D_Detail_Card_SecondRow_Info
                    title={x[1].key}
                    dataToShow={x[1].data}
                    withBackground
                  />
                </div>
              )
            }
          })}

          <div>
            {Object.entries(thirdpageDataORG.card.rightPart.thirdPageData.card.left).map((x, index) => {
              console.log("x:", x)

              return (
                <Fragment key={`${x[1].key}_${x[1].data.join(", ")}`}>
                  <ORG_D_Detail_Card_SecondRow_Info
                    title={x[1].key}
                    dataToShow={x[1].data}
                  />
                </Fragment>
              )
            })}
          </div>

          <div>
            {Object.entries(thirdpageDataORG.card.rightPart.thirdPageData.card.right).map((x, index) => (
              <Fragment key={`${x[1].key}_${x[1].data.join(", ")}`}>
                <ORG_D_Detail_Card_SecondRow_Info
                  title={x[1].key}
                  dataToShow={x[1].data}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <ORG_D_Detail_About
          name={thirdpageDataORG.fullName.first}
          lastName={thirdpageDataORG.fullName.last}
          aboutRef={null}
        />

        <div>
          <span
            onClick={handlePushTo404}
            onKeyDown={handlePushTo404}
            tabIndex={0}>
            <ButtonSmall>Add to Care Plan</ButtonSmall>
          </span>

          <Image
            src={ORG_D_Detail_Share_Modal_QRAltIcon}
            layout="fixed"
            width={48}
            height={48}
          />
        </div>
      </div>
    </ORG_D_Detail_MainCardWrapper>
  )
}
