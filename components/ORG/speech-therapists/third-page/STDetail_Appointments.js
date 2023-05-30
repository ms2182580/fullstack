import { Fragment, useEffect, useState } from "react"
import { ORG_Detail_getDate } from "../../../../utils/ORG_Detail_getDate.js"
import { ButtonSmall } from "../../../ui/buttons/general/index.js"
import { H2 } from "../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_AppointmentsSchedule } from "./STDetail_AppointmentsSchedule.js"
import { STDetail_AppointmentsWrapper } from "./styles/STDetail_AppointmentsWrapper.js"

export const STDetail_Appointments = () => {
  const [allDataDate, setAllDataDate] = useState(ORG_Detail_getDate())

  const [selectTime, setSelectTime] = useState({ time: undefined, dayName: undefined, year: undefined })
  const [wasSelected, setWasSelected] = useState(false)
  const handleSelectTime = (e, dayName, yearNumber) => {
    setSelectTime({ time: e.target.textContent, dayName: dayName, yearNumber: yearNumber })
    setWasSelected(true)
  }

  useEffect(() => {
    /*_codeHere_*/
    console.log("selectTime:", selectTime)
  }, [selectTime])

  return (
    <STDetail_AppointmentsWrapper id="Appointments">
      <H2>Select an available time</H2>
      <div>
        {allDataDate.map((x, i) => {
          return (
            <Fragment key={`${(x[0], x[1], x[2], i)}`}>
              <STDetail_AppointmentsSchedule
                dayName={x[0]}
                monthName={x[1]}
                dayNumber={x[2]}
                yearNumber={x[3]}
                handleSelectTime={handleSelectTime}
                selectTime={selectTime}
                setWasSelected={setWasSelected}
                wasSelected={wasSelected}
              />
            </Fragment>
          )
        })}
      </div>
      <span>
        <ButtonSmall disabled={wasSelected ? false : true}>Next</ButtonSmall>
      </span>
    </STDetail_AppointmentsWrapper>
  )
}
