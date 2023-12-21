import { ORG_D_Results_ViewProfileSvg } from "@/assets/Icons"
import { StarsRatingReview_D } from "@/components/ORG/stars-rating-review/desktop/StarsRatingReview_D"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { KEYS_SUGGESTION_KEYWORDS } from "@/utils/ORG/typed-flow/suggestionKeywords"
import { CheckTypeOfData, Keys_StructureDataToReturn, useTypedFlow_CheckDiagnosisChoosed } from "@/utils/ORG/useTypedFlow_CheckDiagnosisChoosed"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { ORG_D_Results_CardTypedFlow_IndividualsWrapper } from "./styles/ORG_D_Results_CardTypedFlow_IndividualsWrapper"

// [key: string]: string | number
export type TypeOfObjectInProp = { [key: string]: string | number }[]

export type TypeOfDataArrInProp = (string | number)[]

type ImageInfo = {
  src: string
  height: number
  width: number
  blurDataURL: string
  blurWidth: number
  blurHeight: number
}
type FullName = {
  first: string
  last: string
}
type Item = {
  imageToUse: ImageInfo
  title: string
  fullName: FullName
  subtitle: string
  city: string
  rating: number
  reviews: number
  textReview: string
  goToThirdPage: {
    folder_name: string
    id: number
  }
}

export type Props = {
  title: string
  dataToRender: Item[]
}

/* 
!FH0
- Hard code this thing to allow the user to reach the second page and the third page as it was in the first page of ORG. Is the same behavior
- Do not make things complicated (do not follow the flow of how it would be), hard code this part
*/

export const ORG_D_Results_CardTypedFlow_Individuals = ({ title = "noTitleReceived", dataToRender }: Props) => {
  let { diagnosisChoosed } = useSessionStorage_typedFlow()

  let { formatedDiagnosis, formatedSymptoms } = useTypedFlow_CheckDiagnosisChoosed(
    diagnosisChoosed || {
      [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: [],
      [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: [],
    },
  )

  const [whichDataReturn, setWhichDataReturn] = useState(null)

  useEffect(() => {
    if (formatedDiagnosis[Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF] !== CheckTypeOfData.FALSE) {
      setWhichDataReturn(formatedDiagnosis[Keys_StructureDataToReturn.RETURNED_DATA])
    }

    if (formatedSymptoms[Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF] !== CheckTypeOfData.FALSE) {
      setWhichDataReturn(formatedSymptoms[Keys_StructureDataToReturn.RETURNED_DATA])
    }
  }, [])

  const { push } = useRouter()

  const handleGoToThirdPage = (goToThirdPage_folder_name: string, id_folder_resource: number) => {
    // console.log("id_folder_resource:", id_folder_resource)
    // push({
    //   pathname: `/ORG/${goToThirdPage_folder_name}/details`,
    //   query: { id: id_folder_resource },
    // })
  }

  return (
    <ORG_D_Results_CardTypedFlow_IndividualsWrapper>
      <div>
        <h2>{title} for:</h2>
        <span tabIndex={0}>See all (25)</span>
      </div>
      <h3>{whichDataReturn && whichDataReturn}</h3>

      <div>
        <div>
          {dataToRender.map((x, index) => {
            return (
              <Fragment>
                <article>
                  <div>
                    <span>
                      <Image
                        src={x.imageToUse}
                        layout="responsive"
                        objectFit="cover"
                        width={1}
                        height={1}
                      />
                    </span>
                    <button onClick={() => handleGoToThirdPage(x.goToThirdPage.folder_name, x.goToThirdPage.id)}>
                      <ORG_D_Results_ViewProfileSvg />
                      View Profile
                    </button>
                  </div>
                  <span>
                    <p>
                      {x.fullName.first} {x.fullName.last}
                    </p>

                    <span>{x.subtitle}</span>
                    <span>{x.city}</span>

                    <StarsRatingReview_D
                      rating={x.rating}
                      reviews={x.reviews}
                    />
                  </span>
                </article>
              </Fragment>
            )
          })}
        </div>
      </div>
    </ORG_D_Results_CardTypedFlow_IndividualsWrapper>
  )
}
