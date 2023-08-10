import { useRouter } from "next/router.js"
import { useORG_Ctx_FetchWithFiltersMobile } from '../../../../../../context/ORG_CtxFetchWithFiltersMobile_Provider'
import { useORG_Ctx_STDataThirdpage_M } from "../../../../../../context/ORG_Ctx_STDataThirdpageMobile_Provider.js"
import { ORG_FILTERS_KEYS_M } from '../../../../../../utils/ORG_FiltersCategories'
import { ButtonSmall } from '../../../../../ui/buttons/general'
import { ST_M_Results_CardNoFilters_ThreeCardsComponents } from "./ST_M_Results_CardNoFilters_ThreeCardsComponents.js"
import { ST_M_Results_CardNoFiltersWrapper } from "./styles/ST_M_Results_CardNoFiltersWrapper.js"

export const ST_M_Results_CardWithFilters = () => {
  const router = useRouter()
  const { setSTDataThirdpage_M } = useORG_Ctx_STDataThirdpage_M()

  const goToDynamic = (e, everySingleValue, filters) => {
    setSTDataThirdpage_M({ data: [everySingleValue], filters: [filters] })
    const toWhere = `${router.pathname}/IndividualProvider`
    router.push(toWhere)
  }

  const { pagination, userFetched, setData, filtersST, setFilters, actualSort, } = useORG_Ctx_FetchWithFiltersMobile()

  return (
    <>
      {userFetched &&
        Array.isArray(filtersST) &&
        userFetched.allData.map((everySingleValue, i) => {
          let insurance = filtersST[i][ORG_FILTERS_KEYS_M.insurance.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let agesServed = filtersST[i][ORG_FILTERS_KEYS_M.agesServed.updateState]
          let diagnosis = filtersST[i][ORG_FILTERS_KEYS_M.diagnosis.updateState].map((x) => {
            if (x !== "Other") return `${x} Friendly`
            return x
          })
          let language = filtersST[i][ORG_FILTERS_KEYS_M.language.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )

          let serviceSetting = filtersST[i][ORG_FILTERS_KEYS_M.serviceSetting.updateState].map(
            (x) => x[0].toUpperCase() + x.slice(1)
          )
          return (
            <ST_M_Results_CardNoFiltersWrapper
              key={`${everySingleValue.name.first}${everySingleValue.name.last}${everySingleValue.email}${i}`}>
              <ST_M_Results_CardNoFilters_ThreeCardsComponents
                image={everySingleValue.picture.large}
                alt={`Portrait of ${everySingleValue.name.first} ${everySingleValue.name.last} `}
                firstName={`${everySingleValue.name.first}`}
                lastName={`${everySingleValue.name.last}`}
                howFar={filtersST[i].distance}
                rating={filtersST[i].rating}
                reviews={filtersST[i].reviews}
                diagnosis={diagnosis}
                agesServed={agesServed}
                language={language}
                yearsOfPractice={filtersST[i].yearsOfPractice}
                serviceSetting={serviceSetting}
                insurance={insurance}
                phoneNumber={everySingleValue.phone}
                email={everySingleValue.email}
                location={everySingleValue.location}
              />
              <span
                onClick={(e) => goToDynamic(e, everySingleValue, filtersST[i])}
              >
                <ButtonSmall secondary>See details</ButtonSmall>
              </span>
            </ST_M_Results_CardNoFiltersWrapper>
          )
        })}
    </>
  )
}
