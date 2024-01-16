import { ST_M_Results_FilterList } from './ST_M_Results_FilterList.js'
import { ST_M_Results_HowMuchShowing } from './ST_M_Results_HowMuchShowing.js'
import { ST_M_Results_SortBy } from './ST_M_Results_SortBy.js'


import { ST_M_Results_FilterSortbyHeaderWrapper } from "./styles/ST_M_Results_FilterSortbyHeaderWrapper.js"


export const ST_M_Results_FilterSortbyHeader = () => {
  // const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
  //   useORG_CtxShowFiltersDesktop()

  return (
    <ST_M_Results_FilterSortbyHeaderWrapper>
      <ST_M_Results_FilterList />
      <ST_M_Results_SortBy />

      <ST_M_Results_HowMuchShowing />

      {/* <ST_M_Results_FilterList  /> */}
      {/* <ST_D_Results_Sortby /> */}

      {/* <ST_D_Results_HowMuchShowing /> */}

    </ST_M_Results_FilterSortbyHeaderWrapper>
  )
}
