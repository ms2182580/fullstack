import Image from "next/image.js"
import { XSvg } from "../../../../assets/Icons/index.js"
import { H2, H3, H4 } from "../../../ui/heading_body_text/HeaderFonts.js"
import { STDetail_Appointment_ModalWrapper } from "./styles/STDetail_Appointment_ModalWrapper.js"

import { useRouter } from "next/router.js"
import { useEffect, useRef } from "react"
import ORG_STDetail_Appointment_Modal_Icon from "../../../../assets/Icons/ORG_STDetail_Appointment_Modal_Icon.png"
import { useCtx_ShowModal } from "../../../../context/Ctx_ShowModal.js"
import { useScrollLock } from "../../../../utils/useScrollLock.js"
import { ButtonMedium } from "../../../ui/buttons/general/index.js"
import { P } from "../../../ui/heading_body_text/DesktopMobileFonts.js"

export const STDetail_Appointment_Modal = ({
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
  unlockScroll
}) => {
  const componentRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (componentRef.current && !componentRef.current.contains(event.target)) {
        handleHideModal()
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [componentRef])

  const { setModalShowedCtx } = useCtx_ShowModal()
  const { unlockScroll: unlockScrollHere } = useScrollLock()
  const { push } = useRouter()

  const handleMoveToSignUp = () => {
    // console.dir("Here")
    handleHideModal()
    // return
    // push("/signup")
  }

  return (
    <STDetail_Appointment_ModalWrapper
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

      {/* <span onClick={handleMoveToSignUp}>
        <button><p>Sign Up</p></button>
      </span> */}
      <span>
        <ButtonMedium>Sign up</ButtonMedium>
      </span>

      <P>
        Already have account?{" "}
        {/* <HyperlinkM
          href=""
          name="Log In"
        />{" "} */}
        <span>Log In</span>
      </P>
    </STDetail_Appointment_ModalWrapper>
  )
}
