import {
  LeftArrowTinySvg,
  ORG_D_Search_ViewProfileSvg,
  RightArrowTinySvg,
} from "@/assets/icons"
import { Marker, Popup, TileLayer, useMap } from "react-leaflet"
import * as leaflet from "leaflet"
import { DATA_PMHSS_D } from "@/utils/org/pmhss/DATA_PMHSS_D"
import { DATA_ORG_D } from "@/utils/org/DATA_ORG_D"
import { DATA_PST_D } from "@/utils/org/pst/DATA_PST_D"
import { DATA_PCC_D } from "@/utils/org/pcc/DATA_PCC_D"
import { DATA_PCMPS_D } from "@/utils/org/pcmps/DATA_PCMPS_D"
import { DATA_PDCTR_D } from "@/utils/org/pdctr/DATA_PDCTR_D"
import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import { trpc } from "@/utils/trpc"
import Image from "next/image"
import { H3, H4 } from "../ui/heading_body_text/HeaderFonts"
import { StarsRatingReview_D } from "../org/stars-rating-review/desktop/StarsRatingReview_D"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { NamesCategories_KEY } from "@/utils/org/categories/general/ALL_DATA"
import { useRouter } from "next/router"
import { CardContainer } from "./styles/TileWrapper"
import { handleMoveToThirdPage } from "@/utils/org/handleMoveToThirdPage"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
type Props = {
  isFullMap: boolean
  handleIsFullMap: (e) => void
}

export const Tile = ({ isFullMap, handleIsFullMap }: Props) => {
  const mentalHealthData = trpc.mentalHealth.getAll.useQuery({ limit: 3 })
  const legal = trpc.legal.getAll.useQuery({ limit: 3 })
  console.log("mentalHealthData", mentalHealthData.data)
  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()
  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const map = useMap()
  const icon = leaflet.icon({
    iconUrl: "/svg/pin.svg",
  })
  let allBackendData = {
    [NamesCategories_KEY["MENTAL HEALTH PROVIDERS & SERVICES"]]:
      mentalHealthData.data,
  }
  const { push } = useRouter()
  const Card = ({ xBackendData }: any) => {
    console.log("xBackendData", xBackendData)

    let indexBackend = 0
    let category = "Assistive Software"
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
            handleMoveToThirdPage({
              event,
              categoryPosition: "Mental Health Providers & Services",
              subcategoryPosition: 0,
              resourcePosition: 0,
              setThirdpageDataORG,
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
  console.log("DATA", legal.data)
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={icon}>
        <Popup maxWidth={200}>
          {legal.data && <Card xBackendData={legal.data[0] as any} />}
        </Popup>
      </Marker>
      <Marker position={[51.51, -0.11]} icon={icon}>
        <Popup>
          {legal.data && <Card xBackendData={legal.data[1] as any} />}
        </Popup>
      </Marker>
      <Marker position={[51.515, -0.1]} icon={icon}>
        <Popup>
          {legal.data && <Card xBackendData={legal.data[2] as any} />}
        </Popup>
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
