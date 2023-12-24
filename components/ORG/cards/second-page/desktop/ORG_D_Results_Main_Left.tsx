import { Verified } from "@/components/org/verified/Verified"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { LAYOUT_RESULTS_MAIN_CARD_VALUES, SPECIFIC_DATA_KEY } from "@/utils/org/second-page/desktop/specificData"
import Image from "next/image"
import { useMemo } from "react"
import { ORG_D_Results_CardEmail } from "./ORG_D_Results_CardEmail"
import { ORG_D_Results_CardLocation } from "./ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "./ORG_D_Results_CardWebsite"
import { ORG_D_Results_Card_Hearth } from "./ORG_D_Results_Card_Hearth"
import { ORG_D_Results_Cardphone } from "./ORG_D_Results_Cardphone"
import { ORG_D_Results_Main_LeftWrapper } from "./styles/ORG_D_Results_Main_LeftWrapper"

export const ORG_D_Results_Main_Left = ({ renderThisCard, renderThisContact }) => {
  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()

  const isVES_Like = useMemo(() => {
    return secondpageDataORG?.[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]?.[SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD] === LAYOUT_RESULTS_MAIN_CARD_VALUES.VES_LIKE
  }, [])

  const isOpenPosition = useMemo(() => {
    return Boolean(secondpageDataORG.isOpenPosition)
  }, [])

  const isDefault = useMemo(() => {
    return Boolean(secondpageDataORG.isDefault)
  }, [])

  const isOpenPositionAndThirdPosition = useMemo(() => {
    return isVES_Like && !isDefault && isOpenPosition && renderThisCard > 1
  }, [])

  const layout = useMemo(() => {
    const theLayout = secondpageDataORG?.[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]?.[SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD] ?? null

    return theLayout
  }, [])

  return (
    <ORG_D_Results_Main_LeftWrapper
      isOpenPositionAndThirdPosition={isOpenPositionAndThirdPosition}
      className={isOpenPositionAndThirdPosition && "isOpenPositionAndThirdPosition"}
      LAYOUT_RESULTS_MAIN_CARD={layout}>
      <div>
        <Image
          src={secondpageDataORG.cardData[renderThisCard].imageToUse.src}
          layout={
            isVES_Like && isDefault && !isOpenPosition
              ? "fill"
              : isVES_Like && !isDefault && !isOpenPosition
              ? "fill"
              : isOpenPositionAndThirdPosition
              ? "fill"
              : !isOpenPositionAndThirdPosition
              ? "fill"
              : "responsive"
          }
          objectFit={
            isVES_Like && isDefault && !isOpenPosition
              ? "fill"
              : isVES_Like && !isDefault && !isOpenPosition
              ? "scale-down"
              : isOpenPositionAndThirdPosition
              ? "fill"
              : !isOpenPositionAndThirdPosition
              ? "contain"
              : "contain"
          }
          alt={`Image of ${secondpageDataORG.cardData[renderThisCard].title} ${secondpageDataORG.cardData[renderThisCard].textReview} `}
          width={1}
          height={1}
        />
        <ORG_D_Results_Card_Hearth />

        <Verified />
      </div>

      {isVES_Like ? (
        <>
          <div>
            <ORG_D_Results_CardLocation
              locationCity={secondpageDataORG.left[renderThisContact].location.city}
              locationStreetNumber={secondpageDataORG.left[renderThisContact].location.streetNumber}
              locationStreetName={secondpageDataORG.left[renderThisContact].location.streetName}
              locationState={secondpageDataORG.left[renderThisContact].location.state}
              howFar={secondpageDataORG.left[renderThisContact].location.howFar}
              isVES_Like={true}
            />
          </div>
        </>
      ) : (
        <>
          <div>
            <ORG_D_Results_Cardphone phoneNumber={secondpageDataORG.left[renderThisContact].phone} />

            <ORG_D_Results_CardEmail email={secondpageDataORG.left[renderThisContact].email} />

            <ORG_D_Results_CardWebsite
              firstName={secondpageDataORG.left[renderThisContact].web?.fistName || ""}
              lastName={secondpageDataORG.left[renderThisContact].web?.lastName || ""}
            />

            <ORG_D_Results_CardLocation
              locationCity={secondpageDataORG.left[renderThisContact].location.city}
              locationStreetNumber={secondpageDataORG.left[renderThisContact].location.streetNumber}
              locationStreetName={secondpageDataORG.left[renderThisContact].location.streetName}
              locationState={secondpageDataORG.left[renderThisContact].location.state}
              howFar={secondpageDataORG.left[renderThisContact].location.howFar}
            />
          </div>
        </>
      )}
    </ORG_D_Results_Main_LeftWrapper>
  )
}
