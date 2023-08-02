import { Fragment, useState } from "react"
import { useCtx_ShowModal } from "../../../../../context/Ctx_ShowModal.js"
import { ORG_Detail_getDate } from "../../../../../utils/ORG_Detail_getDate.js"
import { useScrollLock } from "../../../../../utils/useScrollLock.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index.js"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_AppointmentModal } from "./ST_D_Detail_AppointmentModal.js"
import { ST_D_Detail_AppointmentsSchedule } from "./ST_D_Detail_AppointmentsSchedule.js"
import { ST_D_Detail_AppointmentsWrapper } from "./styles/ST_D_Detail_AppointmentsWrapper.js"

export const ST_D_Detail_Appointments = ({ picture, name, lastName }) => {
  const [allDataDate, setAllDataDate] = useState(ORG_Detail_getDate())

  const [selectTime, setSelectTime] = useState({
    time: undefined,
    dayName: undefined,
    dayNumber: undefined,
    monthName: undefined,
    yearNumber: undefined
  })
  const [wasSelected, setWasSelected] = useState(false)
  const handleSelectTime = (e, dayName, dayNumber, monthName, yearNumber) => {
    setSelectTime({ time: e.target.textContent, dayName, dayNumber, monthName, yearNumber })
    setWasSelected(true)
  }

  const [showModal, setShowModal] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()
  const { setModalShowedCtx } = useCtx_ShowModal()

  const handleShowModal = () => {
    lockScroll()
    setShowModal(true)
    setModalShowedCtx(true)
  }

  const handleHideModal = () => {
    unlockScroll()
    setShowModal(false)
    setModalShowedCtx(false)
  }

  return (
    <ST_D_Detail_AppointmentsWrapper id="Appointments">
      <H2>Select an available time</H2>
      <div>
        {allDataDate.map((x, i) => {
          return (
            <Fragment key={`${(x[0], x[1], x[2], i)}`}>
              <ST_D_Detail_AppointmentsSchedule
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
      <span onClick={handleShowModal}>
        <ButtonSmall disabled={wasSelected ? false : true}>Next</ButtonSmall>
        {showModal && (
          <ST_D_Detail_AppointmentModal
            showModal={showModal}
            handleHideModal={handleHideModal}
            picture={picture}
            name={name}
            lastName={lastName}
            time={selectTime.time}
            dayName={selectTime.dayName}
            dayNumber={selectTime.dayNumber}
            monthName={selectTime.monthName}
            yearNumber={selectTime.yearNumber}

          />
        )}
      </span>
    </ST_D_Detail_AppointmentsWrapper>
  )
}
