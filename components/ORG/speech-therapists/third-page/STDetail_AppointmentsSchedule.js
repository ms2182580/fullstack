import { useState } from "react"
import { DownArrowSvg } from "../../../../assets/Icons/index.js"
import { ORG_Detail_getAppointments } from "../../../../utils/ORG_Detail_getAppointments.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3 } from "../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_AppointmentsScheduleWrapper } from "./styles/STDetail_AppointmentsScheduleWrapper.js"

export const STDetail_AppointmentsSchedule = ({
  dayName,
  dayNumber,
  monthName,
  yearNumber,
  handleSelectTime,
  setWasSelected,
  selectTime
}) => {
  const [defaultShow, setDefaultShow] = useState(ORG_Detail_getAppointments())
  const [howMuchShow, setHowMuchShow] = useState(4)
  const [disabled, setdisabled] = useState(false)

  const handleShowEverything = () => {
    if (!disabled) {
      setHowMuchShow(13)
      setdisabled(true)
    }
    setWasSelected(true)
  }

  return (
    <STDetail_AppointmentsScheduleWrapper>
      <H3>{dayName.substring(0, 3)}</H3>
      <H3 bold>
        {monthName.substring(0, 3)} {dayNumber}
      </H3>
      <div>
        {defaultShow.map((x, i) => {
          while (i <= howMuchShow) {
            if (x === null || dayName === "Sunday") {
              return (
                <div
                  key={`${x}${i}`}
                  className="noDateAvailable">
                  --
                </div>
              )
            }

            return (
              <P
                key={`${x}${i}`}
                semibold
                onClick={(e) => {
                  handleSelectTime(e, dayName, yearNumber)
                }}
                className={x === selectTime.time && dayName === selectTime.dayName && "isClicked"}>
                {x}
              </P>
            )
          }
        })}
      </div>
      <span onClick={handleShowEverything}>
        <DownArrowSvg />
      </span>
    </STDetail_AppointmentsScheduleWrapper>
  )
}
