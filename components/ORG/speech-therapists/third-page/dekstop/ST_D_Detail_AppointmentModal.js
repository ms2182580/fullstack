import Image from "next/image.js"
import { useRouter } from "next/router.js"
import { useEffect, useRef } from "react"
import ORG_STDetail_Appointment_Modal_Icon from '../../../../../assets/Icons/ORG_STDetail_Appointment_Modal_Icon.png'
import { XSvg } from "../../../../../assets/Icons/index.js"
import { ButtonMedium } from "../../../../ui/buttons/general/index.js"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H2, H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js"
import { ST_D_Detail_AppointmentModalWrapper } from "./styles/STDetail_Appointment_ModalWrapper.js"

export const ST_D_Detail_AppointmentModal = ({
  showModal,
  handleHideModal,
  picture,
  name,
  lastName,
  time,
  dayName,
  dayNumber,
  monthName,
  yearNumber,
}) => {
  const { push } = useRouter()
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if ((componentRef.current && !componentRef.current.contains(event.target)) || event.target.tagName === "svg") {
        handleHideModal()
      } else if (event.target.textContent === "Sign up") {
        handleHideModal()
        push("/signup")
      } else if (event.target.textContent === "Log In") {
        handleHideModal()
        push("/login")
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])

  return (
    <ST_D_Detail_AppointmentModalWrapper
      ref={componentRef}
      showModal={showModal}>
      <span onClick={handleHideModal}>
        <XSvg />
      </span>
      <H2 bold>Please sign up to confirm your appointment with:</H2>
      <div>
        <Image
          src={picture}
          layout="fixed"
          width="115"
          height="86"
        />
        <H3>
          {name} {lastName} CCC-SLP
        </H3>
      </div>

      <div>
        <div>
          <Image
            src={ORG_STDetail_Appointment_Modal_Icon}
            layout="fixed"
            width={40}
            height={44}
          />
        </div>
        <div>
          <div>
            <H3 bold>
              {monthName} {dayNumber}, {yearNumber}
            </H3>
          </div>

          <H3>{dayName}</H3>
          <H4>{time}</H4>
        </div>
      </div>

      <span>
        <ButtonMedium>Sign up</ButtonMedium>
      </span>

      <P>
        Already have account? <span>Log In</span>
      </P>
    </ST_D_Detail_AppointmentModalWrapper>
  )
}
