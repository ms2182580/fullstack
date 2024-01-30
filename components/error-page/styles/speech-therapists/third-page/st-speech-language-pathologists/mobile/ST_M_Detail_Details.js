import { ST_M_Detail_CardInfo } from "./ST_M_Detail_CardInfo.js"
import { ST_M_Detail_Separator } from "./ST_M_Detail_Separator.js"
import { ST_M_Detail_DetailsWrapper } from "./styles/ST_M_Detail_DetailsWrapper.js"

export const ST_M_Detail_Details = ({
  theRef,
  languages,
  serviceSettings,
  meetingFormat,
  insurance,
  agesServed,
  qualifications,
  additionalCredentials,
  scrollMarginTopState
}) => {
  return (
    <ST_M_Detail_DetailsWrapper
      id="Details"
      ref={theRef}
      scrollMarginTopState={scrollMarginTopState}

    >
      <ST_M_Detail_CardInfo
        title="Languages"
        dataToShow={languages}
      />
      <ST_M_Detail_CardInfo
        title="Practice Setting"
        dataToShow={serviceSettings}
      />
      <ST_M_Detail_CardInfo
        title="Meeting Format"
        dataToShow={meetingFormat}
      />
      <ST_M_Detail_CardInfo
        title="Insurance"
        dataToShow={insurance}
      />
      <ST_M_Detail_CardInfo
        title="Ages Served"
        dataToShow={agesServed}
      />

      <>
        <ST_M_Detail_Separator />
      </>

      <ST_M_Detail_CardInfo
        title="Qualifications"
        dataToShow={qualifications}
        withoutComa={true}
      />
      <ST_M_Detail_CardInfo
        title="Additional Credentials"
        dataToShow={additionalCredentials}
        withoutComa={true}
      />
    </ST_M_Detail_DetailsWrapper>
  )
}
