import {
  LeftArrowTinySvg,
  ORG_D_Search_ViewProfileSvg,
  RightArrowTinySvg,
} from "@/assets/icons"
import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import { useFetchData } from "@/utils/org/useFetchData"
import * as leaflet from "leaflet"
import Image from "next/image"
import { useRouter } from "next/router"
import { Marker, Popup, TileLayer, useMap } from "react-leaflet"
import { StarsRatingReview_D } from "../org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../ui/heading_body_text/HeaderFonts"
import { CardContainer } from "./styles/TileWrapper"
type Props = {
  isFullMap: boolean
  handleIsFullMap: (e) => void
}

export const Tile = ({ isFullMap, handleIsFullMap }: Props) => {
  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const map = useMap()
  const icon = leaflet.icon({
    iconUrl: "/svg/pin.svg",
  })

  const { secondpageDataORG: secondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()
  const { push } = useRouter()

  // const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })

  const theData = useFetchData()
  console.log("theData:", theData)

  // if (theData === null) {
  //   return <LoadingComponent />
  // }

  const Card = ({ xBackendData }: any) => {
    return (
      <CardContainer key={`${xBackendData?.listingType}`}>
        <div>
          <Image
            src={Backup_Image}
            alt={`backup image`}
            // layout="intrinsic"
            // objectFit="initial"
            width={400}
            height={100}
          />
        </div>

        <H3>{xBackendData?.recordName?.toLowerCase() || "Doctor one"}</H3>
        <H4>{xBackendData?.recordSubtype || "Doctor"}</H4>

        {/* <P>{xBackendData?.address[0].city}</P> */}

        <StarsRatingReview_D
          rating={xBackendData?.ratings?.length || 0}
          reviews={xBackendData?.reviews?.length || 0}
        />

        <P>{xBackendData?.reviews?.[1] || "No reviews"}</P>
        <button
          onClick={(event) =>
            handleMoveToThirdPage_Backend({
              event,
              raw: xBackendData,
              secondpageDataORG_Backend,
              setThirdpageDataORG_Backend,
              push,
            })
          }
        >
          <ORG_D_Search_ViewProfileSvg />
          View Profile
        </button>
      </CardContainer>
    )
  }

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={icon}>
        <Popup maxWidth={200}>
          {theData && <Card xBackendData={theData[0] as any} />}
        </Popup>
      </Marker>
      <Marker position={[51.51, -0.11]} icon={icon}>
        <Popup>{theData && <Card xBackendData={theData[1] as any} />}</Popup>
      </Marker>
      <Marker position={[51.515, -0.1]} icon={icon}>
        <Popup>{theData && <Card xBackendData={theData[2] as any} />}</Popup>
      </Marker>
      <button
        onClick={(e) => {
          handleIsFullMap(e)
          setTimeout(() => {
            map.invalidateSize()
          }, 400)
        }}
        tabIndex={0}
      >
        {isFullMap ? (
          <>
            Collapse map
            <RightArrowTinySvg />
          </>
        ) : (
          <>
            <LeftArrowTinySvg />
            Show map
          </>
        )}
      </button>
    </>
  )
}
