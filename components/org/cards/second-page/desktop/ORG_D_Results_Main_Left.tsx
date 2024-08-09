import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import Image from "next/image"
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

          <ORG_D_Results_CardEmail email={`hello${theIndex + 1}@email.com`} />

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
