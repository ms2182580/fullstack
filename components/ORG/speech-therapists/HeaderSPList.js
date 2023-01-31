import HowMuchShowing from "./HowMuchShowing.js"
import SortBy from "./SortBy.js"
import { HeaderSPListWrapper } from "./styles/HeaderSPListWrapper.js"

export const HeaderSPList = ({widthWindow}) => {
  return (
    <HeaderSPListWrapper>
      <HowMuchShowing widthWindow={widthWindow}/>
      {widthWindow > 768 ? <SortBy />: null}
      
    </HeaderSPListWrapper>
  )
}
