import { ST_M_Results_FilterList } from './ST_M_Results_FilterList.js'


import { ST_M_Results_FilterSortbyHeaderWrapper } from "./styles/ST_M_Results_FilterSortbyHeaderWrapper.js"


export const ST_M_Results_FilterSortbyHeader = () => {
  // const { ORGshowFullMapButton, ORGShowFullMapFilter, setORGShowFullMapButton, setORGShowFullMapFilter } =
  //   useORG_CtxShowFiltersDesktop()

  return (
    <ST_M_Results_FilterSortbyHeaderWrapper>
      <ST_M_Results_FilterList />

      <p>Sortby</p>
      <p>How Much show</p>



      {/* 
      //!FH0
      ✅Create the "filter", only the visual thing
      ✅Create the "render cards"
      ✅Style the cards with no filters
      Crete the "How much show", only the visual thing
      Crete the "sortby", only the visual thing
      Create the "Buttons"
      Make the filters work
      Make the "sort by" work
      Make the buttons at the bottom work
      
      
      */}

      {/* <ST_M_Results_FilterList  /> */}
      {/* <ST_D_Results_Sortby /> */}

      {/* <ST_D_Results_HowMuchShowing /> */}

    </ST_M_Results_FilterSortbyHeaderWrapper>
  )
}
