import { LocationResultsSvg } from "../../../../../assets/icons"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { ORG_D_Results_CardLocationWrapper } from "./styles/ORG_D_Results_CardLocationWrapper"

type Props = {
  locationCity: string
  locationStreetNumber?: string
  locationStreetName?: string
  locationState: string
  howFar?: string
  isVES_Like?: boolean
  /*
   * «backendData» and «locationStreetName_Backend» are props that only you can get from the database
   */
  backendData?: boolean
  locationStreetName_Backend?: string
}

export const ORG_D_Results_CardLocation = ({
  locationCity,
  locationStreetNumber,
  locationStreetName,
  locationState,
  howFar = "_",
  isVES_Like = false,
  backendData = false,
  locationStreetName_Backend,
}: Props) => {
  if (backendData) {
    return (
      <ORG_D_Results_CardLocationWrapper>
        <LocationResultsSvg />

        <div>
          <P>{locationStreetName_Backend}</P>
          <P>
            {locationCity}, {locationState}
          </P>
          <P> ({howFar} miles away)</P>
        </div>
      </ORG_D_Results_CardLocationWrapper>
    )
  }

  return (
    <ORG_D_Results_CardLocationWrapper
      isVES_Like={isVES_Like}
    >
      <LocationResultsSvg />

      {!isVES_Like ? (
        <>
          <div>
            <P>
              {locationStreetNumber} {locationStreetName}
            </P>
            <P>
              {locationCity}, {locationState}
            </P>
            <P> ({howFar} miles away)</P>
          </div>
        </>
      ) : (
        <>
          <div>
            <P>
              {locationStreetNumber} {locationStreetName}
            </P>
            <P>{locationCity}</P>
            <P>{locationState}</P>
            <P> ({howFar} miles away)</P>
          </div>
        </>
      )}
    </ORG_D_Results_CardLocationWrapper>
  )
}
