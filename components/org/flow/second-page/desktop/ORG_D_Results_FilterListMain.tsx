import {
  DATA_ORG_KeyNamesForFilters_D_ENUM,
  FiltersRangeKeys,
} from "@/utils/org/DATA_ORG_KeyNamesForFilters_D"
import { SPECIFIC_DATA_SECOND_PAGE } from "@/utils/org/second-page/desktop/specificData"
import { ORG_D_Results_FilterListMainWrapper } from "./styles/ORG_D_Results_FilterListMainWrapper"

type Props = {
  dataComesFromParent: object[] | any
  reachTypedFlow?: any
}

export const ORG_D_Results_FilterListMain = ({
  dataComesFromParent,
  reachTypedFlow = false,
}: Props) => {
  return (
    <ORG_D_Results_FilterListMainWrapper>
      {!reachTypedFlow &&
      dataComesFromParent?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]?.[
        SPECIFIC_DATA_SECOND_PAGE.FILTERS
      ]
        ? dataComesFromParent?.[SPECIFIC_DATA_SECOND_PAGE.SECOND_PAGE]?.[
            SPECIFIC_DATA_SECOND_PAGE.FILTERS
          ].map((x) => {
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
    </ORG_D_Results_FilterListMainWrapper>
  )
}
