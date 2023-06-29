import { useRouter } from "next/router"
import { useORG_Ctx_STDataThirdpage_D } from "../../../../../context/ORG_Ctx_IndividualSpeechtherapist"
import { useORG_Ctx_FetchWithFiltersMobile } from "../../../../../context/ORG_CtxFetchWithFiltersMobile_Provider.js"

import { ButtonSmall } from "../../../../ui/buttons/general"
import { SpeechTherapistsCardMobileWrapper } from "./styles/SpeechTherapistsCardMobileWrapper"
import { ThreeCardsComponents } from "./ThreeCardsComponents"

export const SpeechTherapistsCardWithFilterMobile = () => {
  const router = useRouter()
  const { setSTDataThirdpage_D } = useORG_Ctx_STDataThirdpage_D()
  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_D({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { dataF: userFetched, filtersF: filtersST } = useORG_Ctx_FetchWithFiltersMobile()

  return (
    <>
      {userFetched &&
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let accepts = filtersST[i].accepts.map((x) => x[0].toUpperCase() + x.slice(1))

          let agesServed = filtersST[i].agesServed
          let diagnoses = filtersST[i].diagnoses.map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let languages = filtersST[i].languages.map((x) => x[0].toUpperCase() + x.slice(1))

          let serviceSetting = filtersST[i].serviceSetting.map((x) => x[0].toUpperCase() + x.slice(1))
          return (
            <SpeechTherapistsCardMobileWrapper
              key={`${everySingleValue.name.first}${everySingleValue.name.last}${everySingleValue.email}${i}`}
              isMobile={true}>
              <ThreeCardsComponents
                image={everySingleValue.picture.large}
                alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                firstName={`${everySingleValue.name.first}`}
                lastName={`${everySingleValue.name.last}`}
                howFar={filtersST[i].distance}
                rating={filtersST[i].rating}
                reviews={filtersST[i].reviews}
                diagnoses={diagnoses}
                agesServed={agesServed}
                language={languages}
                yearsOfPractice={filtersST[i].yearsOfPractice}
                serviceSetting={serviceSetting}
                accepts={accepts}
                phoneNumber={everySingleValue.phone}
                email={everySingleValue.email}
                location={everySingleValue.location}
              />
              <span>
                <ButtonSmall
                  goToDynamic={(e) => goToDynamic(e, everySingleValue, filtersST[i])}
                  secondary>
                  See details
                </ButtonSmall>
              </span>
            </SpeechTherapistsCardMobileWrapper>
          )
        })}
    </>
  )
}
