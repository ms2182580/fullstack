import { DownArrowTinySvg, LeftArrowSvg, RightArrowSvg } from "../../../../../assets/Icons/index.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_ScheduleWrapper } from "./styles/ORG_D_Detail_ScheduleWrapper.js"

export const ORG_D_Detail_Schedule = () => {
  return (
    <ORG_D_Detail_ScheduleWrapper>
      <div>
        <div>
          <H3 semibold>Book a class below</H3>
          <P bold>Coming Soon!</P>
        </div>
        <ButtonSmall
          secondary
          preventFocus={-1}>
          See Demo
        </ButtonSmall>
      </div>

      <div>
        <div>
          <H4 medium>Session Type: </H4>
          <ButtonSmall
            secondary
            preventFocus={-1}>
            In-Person <DownArrowTinySvg />
          </ButtonSmall>
        </div>

        <div>
          <H4 medium>Times displayed in:</H4>
          <ButtonSmall
            secondary
            preventFocus={-1}>
            GMT-5:10 Eastern Time (EDT)
            <DownArrowTinySvg />
          </ButtonSmall>
        </div>
      </div>

      <div>
        <LeftArrowSvg />

        <div>
          <H4>Sat</H4>
          <H4>Mar 11</H4>

          <ButtonSmall disabled> 3:00 pm</ButtonSmall>
          <ButtonSmall disabled> 6:00 pm</ButtonSmall>
        </div>

        <div>
          <H4>Sun</H4>
          <H4>Mar 12</H4>
          <ButtonSmall disabled>
            {" "}
            No sessions on
            <br /> Mar 12
          </ButtonSmall>
        </div>

        <div>
          <H4>Mon</H4>
          <H4>Mar 13</H4>

          <ButtonSmall disabled> 9:00 am</ButtonSmall>
          <ButtonSmall disabled> 10:00 am</ButtonSmall>
          <ButtonSmall disabled> 11:00 am</ButtonSmall>
          <ButtonSmall disabled> 1:00 pm</ButtonSmall>
          <ButtonSmall disabled> 4:00 am</ButtonSmall>
        </div>

        <div>
          <H4>Tue</H4>
          <H4>Mar 14</H4>

          <ButtonSmall disabled> 9:00 am</ButtonSmall>
          <ButtonSmall disabled> 10:00 am</ButtonSmall>
          <ButtonSmall disabled> 11:00 am</ButtonSmall>
          <ButtonSmall disabled> 1:00 pm</ButtonSmall>
          <ButtonSmall disabled> 4:00 am</ButtonSmall>
        </div>

        <div>
          <H4>Wed</H4>
          <H4>Mar 15</H4>

          <ButtonSmall disabled> 5:00 pm</ButtonSmall>
          <ButtonSmall disabled> 6:00 pm</ButtonSmall>
        </div>

        <RightArrowSvg />
      </div>

      <ButtonSmall disabled>Next</ButtonSmall>
    </ORG_D_Detail_ScheduleWrapper>
  )
}
