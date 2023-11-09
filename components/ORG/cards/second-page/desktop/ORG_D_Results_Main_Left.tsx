import { Verified } from "@/components/ORG/verified/Verified"
import Image from "next/image"
import { ORG_D_Results_CardEmail } from "./ORG_D_Results_CardEmail"
import { ORG_D_Results_CardLocation } from "./ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "./ORG_D_Results_CardWebsite"
import { ORG_D_Results_Card_Hearth } from "./ORG_D_Results_Card_Hearth"
import { ORG_D_Results_Cardphone } from "./ORG_D_Results_Cardphone"
import { ORG_D_Results_Main_LeftWrapper } from "./styles/ORG_D_Results_Main_LeftWrapper"

export const ORG_D_Results_Main_Left = ({ secondpageDataORG, renderThisCard, renderThisContact }) => {
  // const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()

  return (
    <ORG_D_Results_Main_LeftWrapper>
      <div>
        <Image
          src={secondpageDataORG.cardData[renderThisCard].imageToUse.src}
          layout="fill"
          objectFit="cover"
          alt={`Image of ${secondpageDataORG.cardData[renderThisCard].title} ${secondpageDataORG.cardData[renderThisCard].textReview} `}
        />

        <ORG_D_Results_Card_Hearth />

        <Verified />
      </div>

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
    </ORG_D_Results_Main_LeftWrapper>
  )
}
