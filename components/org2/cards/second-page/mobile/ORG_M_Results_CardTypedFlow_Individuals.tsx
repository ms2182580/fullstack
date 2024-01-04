import {
  ORG_M_Result_PaginationSvg,
  ORG_M_Result_ShareSvg,
  ORG_M_Result_ViewCalenderSvg,
  ORG_M_Result_ViewInfoSvg,
  ORG_M_Result_ViewProfileSvg,
} from "@/assets/icons"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_Ctx_D_SecondpageData } from "@/context/ORG_Ctx_D_SecondpageData_Provider"
import { useORG_Ctx_D_SecondpageFilters } from "@/context/ORG_Ctx_D_SecondpageFilters_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { KEYS_SUGGESTION_KEYWORDS } from "@/utils/org/typed-flow/suggestionKeywords"
import {
  CheckTypeOfData,
  Keys_StructureDataToReturn,
  useTypedFlow_CheckDiagnosisChoosed,
} from "@/utils/org/useTypedFlow_CheckDiagnosisChoosed"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import {
  ORG_M_Results_CardTypedFlow_Card,
  ORG_M_Results_CardTypedFlow_IndividualsWrapper,
} from "./styles/ORG_M_Results_CardTypedFlow_IndividualsWrapper"
import { StartsRatingReview_Mobile } from "@/components/ORG/stars-rating-review/mobile/StartsRatingReview_Mobile"

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
  toSecondPageData: object
  categoryPosition: number
}

export const ORG_M_Results_CardTypedFlow_Individuals = ({
  title = "noTitleReceived",
  dataToRender,
  toSecondPageData,
  categoryPosition,
}: Props) => {
  let { diagnosisChoosed }: any = useSessionStorage_typedFlow()
  // console.log({ dataToRender });
  let { formatedDiagnosis, formatedSymptoms } =
    useTypedFlow_CheckDiagnosisChoosed(
      diagnosisChoosed || {
        [KEYS_SUGGESTION_KEYWORDS.DIAGNOSIS]: [],
        [KEYS_SUGGESTION_KEYWORDS.SYMPTOMS]: [],
      }
    )

  const [whichDataReturn, setWhichDataReturn] = useState<any>(null)

  useEffect(() => {
    if (
      formatedDiagnosis[Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF] !==
      CheckTypeOfData.FALSE
    ) {
      setWhichDataReturn(
        formatedDiagnosis[Keys_StructureDataToReturn.RETURNED_DATA]
      )
    }

    if (
      formatedSymptoms[Keys_StructureDataToReturn.RETURNED_DATA_TYPEOF] !==
      CheckTypeOfData.FALSE
    ) {
      setWhichDataReturn(
        formatedSymptoms[Keys_StructureDataToReturn.RETURNED_DATA]
      )
    }
  }, [])

  const { push } = useRouter()

  const { setSecondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG }: any = useORG_Ctx_D_SecondpageData()

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  let P = ({ first, last }) => {
    let fullName = first + " " + last
    let newName = fullName.length > 9 ? fullName.slice(0, 9) + "..." : fullName

    return <p>{newName}</p>
  }
  return (
    <ORG_M_Results_CardTypedFlow_IndividualsWrapper>
      <div>
        {dataToRender.map((x, index) => {
          return (
            <ORG_M_Results_CardTypedFlow_Card key={index}>
              <Image
                src={x.imageToUse}
                layout="responsive"
                objectFit="cover"
                width={1}
                height={1}
                /* !FH change this. Put a proper alt */
                alt="someImage"
              />
              <div>
                <span>
                  <span>
                    <ORG_M_Result_ViewProfileSvg />
                    <P
                      first={x.fullName.first}
                      last={x.fullName.last}
                    />
                    {/* <p>
                      {x.fullName.first} {x.fullName.last}
                    </p> */}
                  </span>
                  <span>
                    <p>(1 miles away)</p>
                    <ORG_M_Result_ViewCalenderSvg />
                  </span>
                </span>
                {/* <button
                                    onClick={(event) =>
                                        handleMoveToThirdPage({
                                            event,
                                            categoryPosition,
                                            subcategoryPosition: 0,
                                            resourcePosition: index,
                                            setThirdpageDataORG,
                                            push,
                                        })
                                    }>
                                    <ORG_D_Results_ViewProfileSvg />
                                    View Profile
                                </button> */}
                <span>
                  <span>{x.subtitle}</span>
                  <span>
                    {x.city} <ORG_M_Result_ViewInfoSvg />{" "}
                  </span>
                  <StartsRatingReview_Mobile
                    rating={x.rating}
                    reviews={x.reviews}
                  />
                  <span>
                    <button>
                      <span>Ausism</span>
                    </button>
                    <button>
                      <span>ADHD Friendly</span>
                    </button>
                  </span>
                </span>
              </div>
              <div>
                <button>
                  <ORG_M_Result_ShareSvg />
                  <span>Share</span>
                </button>
                <ORG_M_Result_PaginationSvg />
              </div>
            </ORG_M_Results_CardTypedFlow_Card>
          )
        })}
      </div>
    </ORG_M_Results_CardTypedFlow_IndividualsWrapper>
  )
}
