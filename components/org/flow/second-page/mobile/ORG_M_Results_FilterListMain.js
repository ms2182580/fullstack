import { Fragment } from "react"
import { useORG_Ctx_D_SecondpageFilters } from "../../../../../context/ORG_Ctx_D_SecondpageFilters_Provider"
import { ORG_M_Results_FilterListMainWrapper } from "./styles/ORG_M_Results_FilterListMainWrapper"

export const ORG_M_Results_FilterListMain = ({
  refUserViewShowFullMapFilter,
}) => {
  const { secondpageFiltersORG } = useORG_Ctx_D_SecondpageFilters()
  return (
    <ORG_M_Results_FilterListMainWrapper>
      {secondpageFiltersORG.slice(4, 7).map((x, index) => (
        <Fragment key={`${x.parameters.buttonName}_${index}`}>
          <x.component
            props={x.parameters}
            shouldAddClassName={x.shouldAddClassName}
          />
        </Fragment>
      ))}
    </ORG_M_Results_FilterListMainWrapper>
  )
}
