import { STResults_FilterList } from "../STResults_FilterList"
import { STResults_HowMuchShowing } from "../STResults_HowMuchShowing"
import { STResults_SortbyDekstop } from "./STResults_SortbyDekstop"
import { STResults_FilterSortbyHeaderDesktopWrapper } from "./styles/STResults_FilterSortbyHeaderDesktopWrapper"

export const STResults_FilterSortbyHeaderDesktop = ({ theRef, setShowFullMap }) => {
  return (
    <STResults_FilterSortbyHeaderDesktopWrapper ref={theRef}>
      <STResults_HowMuchShowing />

      <div>
        <STResults_FilterList setShowFullMap={setShowFullMap} />
        <STResults_SortbyDekstop />
      </div>
    </STResults_FilterSortbyHeaderDesktopWrapper>
  )
}
