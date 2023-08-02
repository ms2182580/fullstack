import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { ST_M_Detail_CardEmail } from "./ST_M_Detail_CardEmail.js"
import { ST_M_Detail_CardLocation } from "./ST_M_Detail_CardLocation.js"
import { ST_M_Detail_CardPhone } from "./ST_M_Detail_CardPhone.js"
import { ST_M_Detail_TwoButtons } from "./ST_M_Detail_TwoButtons.js"
import { ST_M_Detail_ContactWrapper } from "./styles/ST_M_Detail_ContactWrapper.js"

export const ST_M_Detail_Contact = ({
  theRef,
  phoneNumber,
  email,
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  scrollMarginTopState
}) => {
  return (
    <ST_M_Detail_ContactWrapper
      id="Contact"
      ref={theRef}
      scrollMarginTopState={scrollMarginTopState}

    >
      <Caption bolder primary_hover>Contact</Caption>
      <ST_M_Detail_CardLocation
        locationCity={locationCity}
        locationStreetNumber={locationStreetNumber}
        locationStreetName={locationStreetName}
        locationState={locationState}
      />
      <ST_M_Detail_CardPhone phoneNumber={phoneNumber} />
      <ST_M_Detail_CardEmail email={email} />

      <ST_M_Detail_TwoButtons />
    </ST_M_Detail_ContactWrapper>
  )
}
