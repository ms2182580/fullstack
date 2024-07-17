import { ORG_D_Results_ViewProfileSvg } from "@/assets/icons"
import { StarsRatingReview_D } from "@/components/org/stars-rating-review/desktop/StarsRatingReview_D"
import { useSessionStorage_typedFlow } from "@/context/Ctx_sessionStorage_typedFlow_Provider"
import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData_Backend } from "@/context/ORG_Ctx_D_ThirdpageData_Backend_Provider"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider"
import { imagesToUse_backup } from "@/utils/org/categories/general/imagesToUse_backup"
import { handleMoveToSecondPage_Backend } from "@/utils/org/handleMoveToSecondPage_Backend"
import { handleMoveToThirdPage_Backend } from "@/utils/org/handleMoveToThirdPage_Backend"
import { KEYS_SUGGESTION_KEYWORDS } from "@/utils/org/typed-flow/suggestionKeywords"
import {
  CheckTypeOfData,
  Keys_StructureDataToReturn,
  useTypedFlow_CheckDiagnosisChoosed,
} from "@/utils/org/useTypedFlow_CheckDiagnosisChoosed"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import Image from "next/legacy/image"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import { ORG_D_Results_CardTypedFlow_IndividualsWrapper } from "./styles/ORG_D_Results_CardTypedFlow_IndividualsWrapper"

// [key: string]: string | number
export type TypeOfObjectInProp = { [key: string]: string | number }[]

export type TypeOfDataArrInProp = (string | number)[]

type ORG_D_Results_CardTypedFlow_Individuals_Props = {
  category: string
  allSubcategories: string[]
  allBackendData: object[]
}

export const ORG_D_Results_CardTypedFlow_Individuals = ({
  category,
  allSubcategories,
  allBackendData,
}: ORG_D_Results_CardTypedFlow_Individuals_Props) => {
  const { diagnosisChoosed, setReachTypedFlow }: any =
    useSessionStorage_typedFlow()

  const { formatedDiagnosis, formatedSymptoms } =
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

  // const { setSecondpageFiltersORG }: any = useORG_Ctx_D_SecondpageFilters()
  const { setSecondpageDataORG: setSecondpageDataORG_Backend }: any =
    useORG_Ctx_D_SecondpageData_Backend()

  const { setThirdpageDataORG: setThirdpageDataORG_Backend }: any =
    useORG_Ctx_D_ThirdpageData_Backend()

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  const refUlList = useRef<HTMLUListElement | null>(null)

  const { setListRef } = useScrollHorizontal(refUlList)

  return (
    <ORG_D_Results_CardTypedFlow_IndividualsWrapper>
      <div>
        <h2>{category} for:</h2>
        <span
          onClick={(event) => {
            setReachTypedFlow(false)
            handleMoveToSecondPage_Backend({
              event,
              category,
              theSubcategory: allSubcategories[0],
              raw: allBackendData,
              setSecondpageDataORG_Backend,
              push,
            })
          }}
          tabIndex={0}
        >
          See all (25)
        </span>
      </div>
      <h3>{whichDataReturn && whichDataReturn}</h3>

      <div>
        <ul
          ref={(el: any) => {
            setListRef(el)
            refUlList.current = el
          }}
        >
          {allBackendData &&
            allBackendData.map(
              ({ id, recordName, recordSubtype, address }: any, index) => {
                return (
                  <li key={`key_${id}`}>
                    <article>
                      <div>
                        <span>
                          <Image
                            src={imagesToUse_backup[index]}
                            layout="responsive"
                            objectFit="cover"
                            width={1}
                            height={1}
                            /* !FH change this. Put a proper alt */
                            alt="someImage"
                          />
                        </span>
                        <button
                          onClick={(event) => {
                            setReachTypedFlow(true)

                            handleMoveToThirdPage_Backend({
                              event,
                              raw: allBackendData[index],
                              indexSubcategory: index,
                              category,
                              setThirdpageDataORG_Backend,
                              push,
                              indexBackend: index,
                            })
                          }}
                        >
                          <ORG_D_Results_ViewProfileSvg />
                          View Profile
                        </button>
                      </div>
                      <span>
                        <p>{recordName.toLowerCase()}</p>
                        <span>{recordSubtype.toLowerCase()}</span>
                        <span>{address[0].city || ""}</span>
                        <span>{address[0].state || ""}</span>
                        <StarsRatingReview_D rating={5} reviews={147 + index} />
                      </span>
                    </article>
                  </li>
                )
              }
            )}
        </ul>
      </div>
    </ORG_D_Results_CardTypedFlow_IndividualsWrapper>
  )
}
