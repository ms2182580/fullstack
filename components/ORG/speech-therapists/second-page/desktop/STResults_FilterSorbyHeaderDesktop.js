import { useWidthWindow1024 } from "../../../../../utils/useWidthWindow1024"
import SpeechTherapistListFilter from "../../SpeechTherapistListFilter"
import { STResults_HowMuchShowing } from "../STResults_HowMuchShowing"
import SortBy from "./STResults_SortbyDekstop"
import { STResults_HeaderWrapper } from "./styles/STResults_HeaderWrapper.js"

export const STResults_FilterSorbyHeaderDesktop = () => {
  const { isMobile } = useWidthWindow1024()

  return (
    <STResults_HeaderWrapper>
      {isMobile === false ? (
        <>
          <STResults_HowMuchShowing />

          <div>
            <SpeechTherapistListFilter />
            <SortBy />
          </div>
        </>
      ) : (
        <>
         <p>Nothing in mobile here...</p>
        </>
      )}
    </STResults_HeaderWrapper>
  )
}
