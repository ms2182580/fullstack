import Image from "next/image.js"
import { useState } from "react"
import { DATA_AT_D } from "../../../../../../../utils/ORG/pat/DATA_AT_D.js"
import { DATA_AT_D_Filters, DATA_AT_D_Filters_Contact } from "../../../../../../../utils/ORG/pat/DATA_AT_D_Filters.js"
import { ORG_D_Results_CardEmail } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardEmail.js"
import { ORG_D_Results_CardLocation } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardLocation.js"
import { ORG_D_Results_CardWebsite } from "../../../../../cards/second-page/desktop/ORG_D_Results_CardWebsite.js"
import { ORG_D_Results_Card_Hearth } from "../../../../../cards/second-page/desktop/ORG_D_Results_Card_Hearth.js"
import { ORG_D_Results_Cardphone } from "../../../../../cards/second-page/desktop/ORG_D_Results_Cardphone.js"
import { AT_D_Results_CardWrapper } from "./styles/AT_D_Results_CardWrapper.js"

export const AT_D_Results_CardNoFilters = () => {
  /* 
  ? With this you move the user to the third page. Think how to make a context that can be used for every third page
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  } */

  const [cardData, setCardData] = useState(DATA_AT_D[0].slice(1))
  // console.dir('cardData:', cardData)
  const [cardFilters, setCardFilters] = useState(DATA_AT_D_Filters)
  // console.dir('cardFilters:', cardFilters)



  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3 === 0 ? 0 : 1

          return (
            <>
              <AT_D_Results_CardWrapper key={`${cardData[renderThisCard].reviews}_${i}`}

              >
                <div className="LEFT">
                  <div>
                    <Image
                      src={cardData[renderThisCard].imageToUse.src}
                      layout="responsive"
                      objectFit="cover"
                      width="1"
                      height="1"
                      alt={`Image of ${cardData[renderThisCard].title} ${cardData[renderThisCard].textReview} `}
                    />

                    <ORG_D_Results_Card_Hearth />

                  </div>

                  <div>
                    <ORG_D_Results_Cardphone phoneNumber={DATA_AT_D_Filters_Contact.phone} />

                    <ORG_D_Results_CardEmail email={DATA_AT_D_Filters_Contact.email} />

                    <ORG_D_Results_CardWebsite firstName={DATA_AT_D_Filters_Contact.web.fistName} lastName={DATA_AT_D_Filters_Contact.web.lastName} />

                    <ORG_D_Results_CardLocation
                      locationCity={DATA_AT_D_Filters_Contact.location.city}
                      locationStreetNumber={DATA_AT_D_Filters_Contact.location.streetNumber}
                      locationStreetName={DATA_AT_D_Filters_Contact.location.streetName}
                      locationState={DATA_AT_D_Filters_Contact.location.state}
                      howFar={DATA_AT_D_Filters_Contact.location.howFar}

                    />
                  </div>

                </div>

                <div className="RIGHT">
                  <h1>Right</h1>

                  <p>{cardFilters[renderThisFilter].price}</p>
                </div>
              </AT_D_Results_CardWrapper>
            </>
          )
        })}
    </>
  )
}
