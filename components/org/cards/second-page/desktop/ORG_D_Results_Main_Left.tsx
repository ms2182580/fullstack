import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import {
  LAYOUT_RESULTS_MAIN_CARD_VALUES,
  SPECIFIC_DATA_KEY,
} from "@/utils/org/second-page/desktop/specificData"
import Image from "next/image"
import { useMemo } from "react"
import { ORG_D_Results_CardEmail } from "./ORG_D_Results_CardEmail"
import { ORG_D_Results_CardLocation } from "./ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "./ORG_D_Results_CardWebsite"
import { ORG_D_Results_Card_Hearth } from "./ORG_D_Results_Card_Hearth"
import { ORG_D_Results_Cardphone } from "./ORG_D_Results_Cardphone"
import { ORG_D_Results_Main_LeftWrapper } from "./styles/ORG_D_Results_Main_LeftWrapper"

type Props = {
  renderThisCard?: number
  backendData?: any
  theIndex: number
}

export const ORG_D_Results_Main_Left = ({
  renderThisCard = 0,
  backendData,
  theIndex,
}: Props) => {
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData()

  const isVES_Like = useMemo(() => {
    return (
      secondpageDataORG?.[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]?.[
        SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD
      ] === LAYOUT_RESULTS_MAIN_CARD_VALUES.VES_LIKE
    )
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
    const theLayout =
      secondpageDataORG?.[SPECIFIC_DATA_KEY.SPECIFIC_DATA_KEY]?.[
        SPECIFIC_DATA_KEY.LAYOUT_RESULTS_MAIN_CARD
      ] ?? null

    return theLayout
  }, [])

  if (backendData) {
    return (
      <ORG_D_Results_Main_LeftWrapper>
        <div>
          <Image
            src={imagesToUse_backup[theIndex]}
            alt={`Image of ${backendData.recordName}`}
          />
          <ORG_D_Results_Card_Hearth />
        </div>

        <div>
          <ORG_D_Results_Cardphone phoneNumber={"(123)456-7890"} />

          <ORG_D_Results_CardEmail email={"hello@email.com"} />

          <ORG_D_Results_CardWebsite
            backendData={backendData}
            website={"www.website.com"}
          />

          <ORG_D_Results_CardLocation
            backendData={backendData}
            locationCity={"City"}
            locationStreetName_Backend={"Street 888 St"}
            locationState={"ST"}
          />
        </div>
      </ORG_D_Results_Main_LeftWrapper>
    )
  }

  return null
}
