import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { DownArrowTinySvg, LeftArrowSvg, RightArrowSvg } from "../../../../../assets/icons/index.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ORG_D_Detail_ScheduleWrapper } from "./styles/ORG_D_Detail_ScheduleWrapper"

export const enum IS_USABLE_SECTION {
  KEY = "IS_USABLE_SECTION_KEY",
}
export const enum HEADER_TITLE {
  KEY = "HEADER_TITLE_KEY",
}

type Props = {
  [ArraySection_KEYS.ALL_DATA]: {
    theIdForComponent: string
    [IS_USABLE_SECTION.KEY]: boolean
    [HEADER_TITLE.KEY]: string
  }
}

export const ORG_D_Detail_Schedule = ({ [ArraySection_KEYS.ALL_DATA]: allProps }: Props) => {
  const { theIdForComponent = "#", [IS_USABLE_SECTION.KEY]: isUsable = false, [HEADER_TITLE.KEY]: headerTitle = "Book a class below" } = allProps || {}

  return (
    <ORG_D_Detail_ScheduleWrapper
      id={theIdForComponent}
      {...{ [IS_USABLE_SECTION.KEY]: isUsable }}>
      <header>
        <div>
          <H3>{headerTitle}</H3>
          {!isUsable ? <P>Coming Soon!</P> : null}
        </div>
        {!isUsable ? (
          <>
            <ButtonSmall
              secondary
              preventFocus={-1}>
              See Demo
            </ButtonSmall>
          </>
        ) : null}
      </header>

      <div>
        <div>
          <H4>Session Type: </H4>
          <ButtonSmall
            secondary
            preventFocus={isUsable ? 0 : -1}>
            In-Person <DownArrowTinySvg />
          </ButtonSmall>
        </div>

        <div>
          <H4>Times displayed in:</H4>
          <ButtonSmall
            secondary
            preventFocus={isUsable ? 0 : -1}>
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

          <ButtonSmall {...{ disabled: !isUsable }}>3:00 pm</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 6:00 pm</ButtonSmall>
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

          <ButtonSmall {...{ disabled: !isUsable }}> 9:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 10:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 11:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 1:00 pm</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 4:00 am</ButtonSmall>
        </div>

        <div>
          <H4>Tue</H4>
          <H4>Mar 14</H4>

          <ButtonSmall {...{ disabled: !isUsable }}> 9:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 10:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 11:00 am</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 1:00 pm</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 4:00 am</ButtonSmall>
        </div>

        <div>
          <H4>Wed</H4>
          <H4>Mar 15</H4>

          <ButtonSmall {...{ disabled: !isUsable }}> 5:00 pm</ButtonSmall>
          <ButtonSmall {...{ disabled: !isUsable }}> 6:00 pm</ButtonSmall>
        </div>

        <RightArrowSvg />
      </div>

      <ButtonSmall disabled>Next</ButtonSmall>
    </ORG_D_Detail_ScheduleWrapper>
  )
}
