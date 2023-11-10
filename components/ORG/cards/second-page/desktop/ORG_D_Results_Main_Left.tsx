import { Verified } from "@/components/ORG/verified/Verified"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { Layout_MainCard_Search_KEY, Layout_MainCard_Search_VALUE } from "@/utils/ORG/pves/second-page/desktop/specificLayout"
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
  console.log("secondpageDataORG:", secondpageDataORG)

  const isVES_Like = useMemo(() => {
    return secondpageDataORG[Layout_MainCard_Search_KEY.KEY] === Layout_MainCard_Search_VALUE.VES_LIKE
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

  /* 
  !FH0
  ▬ ✅Fix Image → Do something if secondpageDataORG.LAYOUT_MAIN_CARD_SPECIFIC && (renderThisContact === 0 || renderThisContact === 1) {// do something}
    
  ▬ ✅Fix data below the image → if secondpageDataORG.LAYOUT_MAIN_CARD_SPECIFIC {// do something}
  */

  return (
    <ORG_D_Results_Main_LeftWrapper
      isOpenPositionAndThirdPosition={isOpenPositionAndThirdPosition}
      className={isOpenPositionAndThirdPosition && "isOpenPositionAndThirdPosition"}>
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
