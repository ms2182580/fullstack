import { HeaderSPList } from "../../HeaderSPList"
import SortBy from "../../SortBy"
import SpeechTherapistListFilter from "../../SpeechTherapistListFilter"
import { STResultsHeaderWrapper } from "./styles/STResultsHeaderWrapper.js"

export const STResultsHeader = () => {
  return (
    <STResultsHeaderWrapper>
      <HeaderSPList />

      <div>
        <SpeechTherapistListFilter />
        <SortBy />
      </div>
    </STResultsHeaderWrapper>
  )
}
