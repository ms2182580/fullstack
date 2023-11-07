import { Verified } from "@/components/ORG/verified/Verified"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { SPECIFIC_DATA } from "@/utils/ORG/DATA_ORG_D"
import { DATA_PAT_D_KEYS } from "@/utils/ORG/pat/DATA_PAT_D"
import Image from "next/image"
import { ORG_D_Results_Card_Hearth } from "../../second-page/desktop/ORG_D_Results_Card_Hearth"
import { ORG_D_Detail_Brand } from "./ORG_D_Detail_Brand"
import { ORG_D_Detail_CardEmail } from "./ORG_D_Detail_CardEmail"
import { ORG_D_Detail_CardLocation } from "./ORG_D_Detail_CardLocation"
import { ORG_D_Detail_CardPhone } from "./ORG_D_Detail_CardPhone"
import { ORG_D_Detail_CardWebsite } from "./ORG_D_Detail_CardWebsite"
import { ORG_D_Detail_MainCardLeftPhotos } from "./ORG_D_Detail_MainCardLeftPhotos"
import { ORG_D_Detail_MapComponent } from "./ORG_D_Detail_MapComponent"
import { ORG_D_Detail_MainCard_LeftWrapper } from "./styles/ORG_D_Detail_MainCard_LeftWrapper"

export const ORG_D_Detail_MainCard_Left = ({ howIsMap }) => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  return (
    <ORG_D_Detail_MainCard_LeftWrapper>
      <div>
        <Image
          src={thirdpageDataORG.card.leftPart.photo.src}
          layout="responsive"
          objectFit="contain"
          objectPosition={"0px 0px"}
          width={1}
          height={1}
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
        {thirdpageDataORG.other[SPECIFIC_DATA.SPECIFIC_DATA] && (
          <>
            <ORG_D_Detail_Brand brand={thirdpageDataORG.other[SPECIFIC_DATA.SPECIFIC_DATA][DATA_PAT_D_KEYS.BRAND_THIRDPAGE_KEY]} />
          </>
        )}

        <ORG_D_Detail_CardPhone phoneNumber={thirdpageDataORG.card.leftPart.phone} />
        <ORG_D_Detail_CardEmail email={thirdpageDataORG.card.leftPart.email} />
        <ORG_D_Detail_CardWebsite
          firstName={thirdpageDataORG.fullName.first}
          lastName={thirdpageDataORG.fullName.last}
        />
        <ORG_D_Detail_CardLocation
          locationCity={thirdpageDataORG.card.leftPart?.location.city}
          locationStreetNumber={thirdpageDataORG.card.leftPart?.location.streetNumber}
          locationStreetName={thirdpageDataORG.card.leftPart?.location.streetName}
          locationState={thirdpageDataORG.card.leftPart?.location.state}
          howFar={thirdpageDataORG.card.leftPart?.location.howFar}
        />
      </aside>

      <ORG_D_Detail_MapComponent howIsMap={howIsMap} />
    </ORG_D_Detail_MainCard_LeftWrapper>
  )
}
