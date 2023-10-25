import { ButtonSmall } from "@/components/ui/buttons/general"
import Image from "next/image.js"
import { useRouter } from "next/router"
import ORG_D_Detail_Share_Modal_QRAltIcon from "../../../../../../../../assets/Icons/ORG_D_Detail_Share_Modal_QRAltIcon.png"
import { ORG_D_Detail_MainCardLeftPhotos } from "../../../../../../../../components/ORG/cards/third-page/desktop/ORG_D_Detail_MainCardLeftPhotos.js"
import { P } from "../../../../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3 } from "../../../../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth"
import { ORG_D_Detail_About } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_About.js"
import { ORG_D_Detail_CardEmail } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_CardEmail.js"
import { ORG_D_Detail_CardLocation } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_CardLocation.js"
import { ORG_D_Detail_CardPhone } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_CardPhone.js"
import { ORG_D_Detail_CardWebsite } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_CardWebsite.js"
import { ORG_D_Detail_Card_SecondRow_Info } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_Card_SecondRow_Info"
import { ORG_D_Detail_HighlightBoxes } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_HighlightBoxes.js"
import { ORG_D_Detail_MapComponent } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_MapComponent.js"
import { ORG_D_Detail_Share } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_Share.js"
import { ORG_D_Detail_Tooltip } from "../../../../../../cards/third-page/desktop/ORG_D_Detail_Tooltip.js"
import { StarsRatingReview_D } from "../../../../../../stars-rating-review/desktop/StarsRatingReview_D.js"
import { Verified } from "../../../../../../verified/Verified.js"
import { CC_Karate_D_MainCardWrapper } from "./styles/CC_Karate_D_MainCardWrapper.js"

export const CC_Karate_D_MainCard = ({ thirdpageDataORG }) => {
  const { push } = useRouter()
  let handlePushTo404 = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      push("/404")
    }
  }

  return (
    <CC_Karate_D_MainCardWrapper id="About">
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
            firstName={thirdpageDataORG.card.leftPart.title}
            lastName={""}
          />
          <ORG_D_Detail_CardLocation
            locationCity={thirdpageDataORG.card.leftPart.location.city}
            locationStreetNumber={thirdpageDataORG.card.leftPart.location.locationStreetNumber}
            locationStreetName={thirdpageDataORG.card.leftPart.location.locationStreetName}
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
            <H2 bold>{thirdpageDataORG.card.leftPart.title}</H2>
            <ORG_D_Detail_Tooltip />
          </div>

          <H3>{thirdpageDataORG.card.leftPart.subTitle}</H3>
          <P dark_gray>{thirdpageDataORG.card.leftPart.location.city}</P>

          <StarsRatingReview_D
            rating={thirdpageDataORG.card.leftPart.rating}
            reviews={thirdpageDataORG.card.leftPart.reviews}
          />

          <ORG_D_Detail_HighlightBoxes meetingFormat={thirdpageDataORG.card.rightPart.thirdPageData.card.highlights} />
        </div>

        <div>
          <div>
            <ORG_D_Detail_Card_SecondRow_Info
              title="Practice Areas"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.practiceAreas}
              withBackground
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title={thirdpageDataORG.card.rightPart.typeof.title}
              dataToShow={thirdpageDataORG.card.rightPart.typeof.content}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Ages Served"
              dataToShow={thirdpageDataORG.card.rightPart.agesServed}
            />

            <ORG_D_Detail_Card_SecondRow_Info
              title="Languages"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.languages}
            />

            <ORG_D_Detail_Card_SecondRow_Info
              title="Operation Hours"
              dataToShow={[
                thirdpageDataORG.card.rightPart.thirdPageData.card.operationHours.mondayFriday,
                thirdpageDataORG.card.rightPart.thirdPageData.card.operationHours.saturday,
                thirdpageDataORG.card.rightPart.thirdPageData.card.operationHours.sunday,
              ]}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Class Duration"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.classDuration}
            />
          </div>

          <div>
            <ORG_D_Detail_Card_SecondRow_Info
              title="Payment"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.payment}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Setting"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.setting}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Class Size"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.classSize}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Class Schedule"
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.classSchedule}
            />
            <ORG_D_Detail_Card_SecondRow_Info
              title="Additional Credentials"
              rightRowCredentials
              dataToShow={thirdpageDataORG.card.rightPart.thirdPageData.card.AdditionalCredentials}
            />
          </div>
        </div>

        <ORG_D_Detail_About
          name={thirdpageDataORG.card.leftPart.title}
          lastName={""}
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
    </CC_Karate_D_MainCardWrapper>
  )
}
