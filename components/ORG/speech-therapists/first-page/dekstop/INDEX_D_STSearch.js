import { useORG_Ctx_FetchNoFiltersDesktop } from "../../../../../context/ORG_CtxFetchNoFiltersDesktop_Provider"
import { useFetchNoFiltersDesktop } from "../../../../../utils/useFetchNoFiltersDesktop"
import { ButtonSmall } from "../../../../ui/buttons/general"
import { Caption } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Cards } from "../../../home/desktop/ORG_D_Cards"
import { INDEX_D_STSearchWrapper } from "./styles/INDEX_D_STSearchWrapper"

export const INDEX_D_STSearch = ({ isSelected = false }) => {

  const { shouldFetchDesktopNoFilters } = useORG_Ctx_FetchNoFiltersDesktop()


  const { data: userFetched, filters: filtersST } = useFetchNoFiltersDesktop(1, 6, "landingThreeCardsHere → 3", shouldFetchDesktopNoFilters)

  return (
    <INDEX_D_STSearchWrapper>
      <H2 semi_bold>Popular Speech Language Pathologists</H2>
      <div>Some cards here </div>
      <div>Some cards here </div>
      <div>Some cards here </div>

      <ButtonSmall secondary >
        <Caption bold>See all </Caption>{" "}
        <Caption
          bold
          dark_gray>
          (25)
        </Caption>
      </ButtonSmall>


      {/* <ST_D_Search_CardsLanding /> */}

      {isSelected && <ORG_D_Cards />}
    </INDEX_D_STSearchWrapper>
  )
}
