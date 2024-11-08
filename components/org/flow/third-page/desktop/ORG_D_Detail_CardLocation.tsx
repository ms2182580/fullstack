import { LocationSvg } from "../../../../../assets/icons/index"
import { Caption, P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Detail_CardLocationWrapper } from "./styles/ORG_D_Detail_CardLocationWrapper"

type Props = {
  locationCity?: string
  locationStreetNumber?: string
  locationStreetName?: string
  locationState?: string
  howFar?: string
  isBackend?: boolean
  locationStreetName_Backend?: string
}

export const ORG_D_Detail_CardLocation = ({
  locationCity = "",
  locationStreetNumber = "",
  locationStreetName = "",
  locationState = "",
  howFar = "_",
  isBackend = false,
  locationStreetName_Backend,
}: Props) => {
  if (isBackend) {
    return (
      <ORG_D_Detail_CardLocationWrapper>
        <div>
          <LocationSvg />
          <P>Location: </P>{" "}
        </div>
        <div>
          <P>{locationCity}</P>
          <P>{locationStreetName_Backend}</P>
          <P>{locationState} </P>

          {howFar !== "_" ? (
            <>
              <Caption> ({howFar} miles away)</Caption>
            </>
          ) : null}
        </div>
      </ORG_D_Detail_CardLocationWrapper>
    )
  }

  return (
    <ORG_D_Detail_CardLocationWrapper>
      <div>
        <LocationSvg />
        <P>Location: </P>{" "}
      </div>
      <div>
        <P>{locationCity}</P>
        <P>
          {locationStreetNumber} {locationStreetName}
        </P>
        <P>{locationState} </P>

        {howFar !== "" && (
          <>
            <Caption> ({howFar} miles away)</Caption>
          </>
        )}
      </div>
    </ORG_D_Detail_CardLocationWrapper>
  )
}
