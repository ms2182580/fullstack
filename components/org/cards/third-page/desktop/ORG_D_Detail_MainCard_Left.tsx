import Backup_Image from "@/assets/images/org/backup/backup_image.jpg"
import { PVES_General_D_LeftPart } from "@/components/org/cards_resources/third-page/pves/general/desktop/PVES_General_D_LeftPart"
import { Verified } from "@/components/org/verified/Verified"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { DATA_ORG_D_TYPES_KEYS } from "@/utils/org/DATA_ORG_D"
import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { ORG_D_Results_Card_Hearth } from "../../second-page/desktop/ORG_D_Results_Card_Hearth"
import { ORG_D_Detail_Brand } from "./ORG_D_Detail_Brand"
import { ORG_D_Detail_CardEmail } from "./ORG_D_Detail_CardEmail"
import { ORG_D_Detail_CardLocation } from "./ORG_D_Detail_CardLocation"
import { ORG_D_Detail_CardPhone } from "./ORG_D_Detail_CardPhone"
import { ORG_D_Detail_CardWebsite } from "./ORG_D_Detail_CardWebsite"
import { ORG_D_Detail_MainCardLeftPhotos } from "./ORG_D_Detail_MainCardLeftPhotos"
import { ORG_D_Detail_MapComponent } from "./ORG_D_Detail_MapComponent"
import { ORG_D_Detail_MainCard_LeftWrapper } from "./styles/ORG_D_Detail_MainCard_LeftWrapper"

export const ORG_D_Detail_MainCard_Left = ({ howIsMap, isPVES }: any) => {
  const { thirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()
  const { thirdpageDataORG: thirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()
  const { query } = useRouter()

  const haveSomeBrandToShow = useMemo(() => {
    if (!query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
      let haveSpecificData =
        thirdpageDataORG.other[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]

      if (haveSpecificData) {
        return Boolean(haveSpecificData[SPECIFIC_DATA_KEY.BRAND])
      }

      return false
    }

    return false
  }, [])

  const layout = useMemo(() => {
    if (!query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
      const theLayout =
        thirdpageDataORG.other?.[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]?.[
          SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD
        ] ?? null

      return theLayout
    }

    return null
  }, [])

  if (query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]) {
    return (
      <ORG_D_Detail_MainCard_LeftWrapper isBackend={true}>
        <div>
          <Image
            src={Backup_Image}
            layout="responsive"
            width={1}
            height={0.522}
            alt={`Placeholder image`}
          />

          <ORG_D_Results_Card_Hearth />
          <Verified />
        </div>

        <ORG_D_Detail_MainCardLeftPhotos
          photo={Backup_Image}
          name={
            thirdpageDataORG_Backend[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
              .recordName
          }
          lastName={""}
        />

        <P>Contact Information</P>

        <aside>
          <ORG_D_Detail_CardPhone
            phoneNumber={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].onlinePresence.telephoneNumber
            }
            isBackend={true}
          />
          <ORG_D_Detail_CardEmail
            email={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].onlinePresence.email
            }
          />
          <ORG_D_Detail_CardWebsite
            website={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].onlinePresence.website
            }
            isBackend={true}
          />

          <ORG_D_Detail_CardLocation
            isBackend={true}
            locationCity={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].address[0].city
            }
            locationStreetName_Backend={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].address[0].street
            }
            locationState={
              thirdpageDataORG_Backend[
                DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA
              ].address[0].state
            }
          />
        </aside>

        <ORG_D_Detail_MapComponent howIsMap={howIsMap} />
      </ORG_D_Detail_MainCard_LeftWrapper>
    )
  }
  return (
    <ORG_D_Detail_MainCard_LeftWrapper
      isPVES={isPVES}
      LAYOUT_RESULTS_MAIN_CARD={layout}
    >
      <div>
        <Image
          src={thirdpageDataORG.card.leftPart.photo.src}
          layout="responsive"
          objectFit="contain"
          width={1}
          height={0.522}
          alt={`Image of ${thirdpageDataORG.card.leftPart.title}`}
        />
        <ORG_D_Results_Card_Hearth />
        <Verified />
      </div>

      <ORG_D_Detail_MainCardLeftPhotos
        photo={thirdpageDataORG.card.leftPart.photo.src}
        name={thirdpageDataORG.card.leftPart.title}
        lastName={""}
      />

      <aside>
        {haveSomeBrandToShow && (
          <>
            <ORG_D_Detail_Brand
              brand={
                thirdpageDataORG[DATA_ORG_KeyNamesForCards_D_KEYS.OTHER][
                  SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY
                ][SPECIFIC_DATA_KEY.BRAND]
              }
            />
          </>
        )}

        {isPVES ? (
          <>
            <PVES_General_D_LeftPart
              allData={
                thirdpageDataORG.card.leftPart[
                  SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY
                ][DATA_ORG_KeyNamesForCards_D_KEYS.THIRD_PAGE_DATA]
              }
            />
          </>
        ) : (
          <>
            <ORG_D_Detail_CardPhone
              phoneNumber={thirdpageDataORG.card.leftPart.phone}
            />
            <ORG_D_Detail_CardEmail
              email={thirdpageDataORG.card.leftPart.email}
            />
            <ORG_D_Detail_CardWebsite
              firstName={thirdpageDataORG.fullName.first}
              lastName={thirdpageDataORG.fullName.last}
            />
          </>
        )}

        <ORG_D_Detail_CardLocation
          locationCity={thirdpageDataORG.card.leftPart?.location.city}
          locationStreetNumber={
            thirdpageDataORG.card.leftPart?.location.streetNumber
          }
          locationStreetName={
            thirdpageDataORG.card.leftPart?.location.streetName
          }
          locationState={thirdpageDataORG.card.leftPart?.location.state}
          howFar={thirdpageDataORG.card.leftPart?.location.howFar}
        />
      </aside>

      <ORG_D_Detail_MapComponent howIsMap={howIsMap} />
    </ORG_D_Detail_MainCard_LeftWrapper>
  )
}
