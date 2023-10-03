import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { ORG_D_Results_AddtocareplanSvg, ORG_D_Results_RequestConsultationSvg, ORG_D_Results_ViewProfileSvg } from "../../../../../assets/Icons"
import { useORG_Ctx_D_SecondpageData } from "../../../../../context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_ThirdpageData } from "../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { Highlights_D } from "../../../highlights/Highlights_D"
import { StarsRatingReview_D } from "../../../stars-rating-review/desktop/StarsRatingReview_D"
import { Verified } from "../../../verified/Verified"
import { ORG_D_Results_CardEmail } from "./ORG_D_Results_CardEmail"
import { ORG_D_Results_CardLocation } from "./ORG_D_Results_CardLocation"
import { ORG_D_Results_CardWebsite } from "./ORG_D_Results_CardWebsite"
import { ORG_D_Results_Card_Hearth } from "./ORG_D_Results_Card_Hearth"
import { ORG_D_Results_Cardphone } from "./ORG_D_Results_Cardphone"
import { ORG_D_Results_CardWrapper } from "./styles/ORG_D_Results_CardWrapper"

export const ORG_D_Results_CardNoFilters = () => {
  const { setThirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  const { secondpageDataORG } = useORG_Ctx_D_SecondpageData()
  const router = useRouter()

  /* 
  ? With this you move the user to the third page. Think how to make a context that can be used for every third page
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  } */

  // const [cardData, setCardData] = useState(DATA_DAY_D[0].slice(1))


  return (
    <>
      {Array(10)
        .fill(0)
        .map((x, i) => {
          let renderThisCard = i % 3
          let renderThisFilter = i % 3 === 0 ? 0 : 1
          let renderThisContact = i % secondpageDataORG.left.length

          return (
            <ORG_D_Results_CardWrapper key={`${secondpageDataORG.cardData[renderThisCard].reviews}_${i}`}>
              <div className="LEFT-PART">
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
                    firstName={secondpageDataORG.left[renderThisContact].web.fistName}
                    lastName={secondpageDataORG.left[renderThisContact].web.lastName}
                  />

                  <ORG_D_Results_CardLocation
                    locationCity={secondpageDataORG.left[renderThisContact].location.city}
                    locationStreetNumber={secondpageDataORG.left[renderThisContact].location.streetNumber}
                    locationStreetName={secondpageDataORG.left[renderThisContact].location.streetName}
                    locationState={secondpageDataORG.left[renderThisContact].location.state}
                    howFar={secondpageDataORG.left[renderThisContact].location.howFar}
                  />
                </div>
              </div>

              <div className="RIGHT-PART">
                <H3 bold>{secondpageDataORG.cardData[renderThisCard].title}</H3>
                <H4>{secondpageDataORG.cardData[renderThisCard].subtitle}</H4>
                <P dark_gray>{secondpageDataORG.cardData[renderThisCard].city}</P>
                <StarsRatingReview_D
                  rating={secondpageDataORG.cardData[renderThisCard].rating}
                  reviews={secondpageDataORG.cardData[renderThisCard].reviews}
                />

                <Highlights_D highlights={secondpageDataORG.right[renderThisFilter].highlights} />

                <P
                  primary_hover
                  bold>
                  Program Emphasis: <span>{new Intl.ListFormat("en").format(secondpageDataORG.right[renderThisFilter].programEmphasis)}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Price:{" "}
                  <span>{`${secondpageDataORG.right[renderThisFilter].price.currency}${secondpageDataORG.right[renderThisFilter].price.ammount}/${secondpageDataORG.right[renderThisFilter].price.frequency}`}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Activities: <span>{new Intl.ListFormat("en").format(secondpageDataORG.right[renderThisFilter].activities)}</span>
                </P>
                <P
                  primary_hover
                  bold>
                  Languages: <span>{new Intl.ListFormat("en").format(secondpageDataORG.right[renderThisFilter].languages)}</span>
                </P>
              </div>

              <div className="BOTTOM-BUTTONS">
                <div>
                  <ORG_D_Results_ViewProfileSvg />
                  <P white>View Profile</P>
                </div>
                <div>
                  <ORG_D_Results_RequestConsultationSvg />
                  <P white>See Availability</P>
                </div>
                <div>
                  <ORG_D_Results_AddtocareplanSvg />

                  <P white>Add to Care Plan</P>
                </div>
              </div>
            </ORG_D_Results_CardWrapper>
          )
        })}
    </>
  )
}
