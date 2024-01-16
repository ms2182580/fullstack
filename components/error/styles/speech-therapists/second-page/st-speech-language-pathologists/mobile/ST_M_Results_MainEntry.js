import { ST_M_Results_Choisepath } from "./ST_M_Results_Choisepath.js"
import { ST_M_Results_FilterSortbyHeader } from "./ST_M_Results_FilterSortbyHeader.js"
import { ST_M_Results_FinalButtons } from "./ST_M_Results_FinalButtons.js"
import { ST_M_Results_MainEntryWrapper } from "./styles/ST_M_Results_MainEntryWrapper.js"

export const ST_M_Results_MainEntry = () => {
  return (
    <ST_M_Results_MainEntryWrapper>
      <ST_M_Results_FilterSortbyHeader />

      <ST_M_Results_Choisepath />

      <ST_M_Results_FinalButtons />
    </ST_M_Results_MainEntryWrapper>
  )
}
