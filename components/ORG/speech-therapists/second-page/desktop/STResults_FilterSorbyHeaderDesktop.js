import { STResults_FilterList } from "../STResults_FilterList"
import { STResults_HowMuchShowing } from "../STResults_HowMuchShowing"
import { STResults_SortbyDekstop } from "./STResults_SortbyDekstop"
import { STResults_FilterSortbyHeaderDesktopWrapper } from "./styles/STResults_FilterSortbyHeaderDesktopWrapper"

export const STResults_FilterSortbyHeaderDesktop = () => {

  return (
    <STResults_FilterSortbyHeaderDesktopWrapper>
      <STResults_HowMuchShowing />

      <div>
        <STResults_FilterList />
        <STResults_SortbyDekstop />
      </div>
    </STResults_FilterSortbyHeaderDesktopWrapper>
  )
}
