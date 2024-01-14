import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ButtonSmall } from "@/components/ui/buttons/general"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { ORG_M_Detail_ScheduleWrapper } from "./styles/ORG_M_Detail_ScheduleWrapper"
import { useState } from "react"
import { ORG_M_Detail_ScheduleModal } from "./ORG_M_Detail_ScheduleModal"

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
  thirdpageDataORG: any
}

export const ORG_M_Detail_Schedule = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
  thirdpageDataORG,
}: Props) => {
  const {
    theIdForComponent = "#",
    [IS_USABLE_SECTION.KEY]: isUsable = false,
    [HEADER_TITLE.KEY]: headerTitle = "Book a class below",
  } = allProps || {}
  const [showModal, setShowModel] = useState(false)
  return (
    <ORG_M_Detail_ScheduleWrapper
      id={theIdForComponent}
      {...{ [IS_USABLE_SECTION.KEY]: isUsable }}
    >
      <P>Select an avaibale time</P>

      <div>
        <div>
          <H4>Sat Mar 11</H4>
          <div>
            <ButtonSmall {...{ disabled: !isUsable }}>3:00 pm</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 6:00 pm</ButtonSmall>
          </div>
        </div>

        <div>
          <H4>Sun Mar 12 </H4>
          <div>
            <ButtonSmall disabled>
              {" "}
              No sessions on
              <br /> Mar 12
            </ButtonSmall>
          </div>
        </div>

        <div>
          <H4>Mon Mar 13</H4>
          <div>
            <ButtonSmall {...{ disabled: !isUsable }}> 9:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 10:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 11:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 1:00 pm</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 4:00 am</ButtonSmall>
          </div>
        </div>

        <div>
          <H4>Tue Mar 14</H4>
          <div>
            <ButtonSmall {...{ disabled: !isUsable }}> 9:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 10:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 11:00 am</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 1:00 pm</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 4:00 am</ButtonSmall>
          </div>
        </div>

        <div>
          <H4>Wed Mar 15</H4>
          <div>
            <ButtonSmall {...{ disabled: !isUsable }}> 5:00 pm</ButtonSmall>
            <ButtonSmall {...{ disabled: !isUsable }}> 6:00 pm</ButtonSmall>
          </div>
        </div>
      </div>

      <ButtonSmall disabled>View More Availability</ButtonSmall>
      <ButtonSmall goToDynamic={() => setShowModel(!showModal)}>
        Book Appointment
      </ButtonSmall>
      {showModal && (
        <ORG_M_Detail_ScheduleModal
          thirdpageDataORG={thirdpageDataORG}
          handleCloseModal={() => setShowModel(!showModal)}
        />
      )}
    </ORG_M_Detail_ScheduleWrapper>
  )
}
