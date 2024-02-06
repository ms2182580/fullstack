import { useORG_Ctx_D_SecondpageData_Backend } from "@/context/ORG_Ctx_D_SecondpageData_Backend_Provider"
import {
  DATA_ORG_KeyNamesForFilters_D_ENUM,
  FiltersRangeKeys,
} from "@/utils/org/DATA_ORG_KeyNamesForFilters_D"
import { SPECIFIC_DATA_SECOND_PAGE } from "@/utils/org/second-page/desktop/specificData"
import { ORG_D_Results_FilterListMainWrapper } from "./styles/ORG_D_Results_FilterListMainWrapper"

export const ORG_D_Results_FilterListMain = () => {
  const { secondpageDataORG }: any = useORG_Ctx_D_SecondpageData_Backend()

  return (
    <ORG_D_Results_FilterListMainWrapper>
      {secondpageDataORG?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]?.[
        SPECIFIC_DATA_SECOND_PAGE.FILTERS
      ]
        ? secondpageDataORG?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]?.[
            SPECIFIC_DATA_SECOND_PAGE.FILTERS
          ].map((x, index) => {
            let theKey =
              x[DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS][
                FiltersRangeKeys.BUTTON_NAME
              ]

            let TheComponent = x[DATA_ORG_KeyNamesForFilters_D_ENUM.COMPONENT]

            return (
              <li key={theKey}>
                <TheComponent
                  props={x[DATA_ORG_KeyNamesForFilters_D_ENUM.PARAMETERS]}
                />
              </li>
            )
          })
        : null}

      {/* {secondpageFiltersORG && !query[DATA_ORG_D_TYPES_KEYS.IS_FROM_BACKEND]
        ? secondpageFiltersORG.map((x, index) => (
            <Fragment key={`${x.parameters.buttonName}_${index}`}>
              <x.component
                props={x.parameters}
                shouldAddClassName={x.shouldAddClassName}
              />
            </Fragment>
          ))
        : null} */}
    </ORG_D_Results_FilterListMainWrapper>
  )
}
