import HowMuchShowing from "./HowMuchShowing.js"
import SortBy from "./SortBy.js"
import { HeaderSPListWrapper } from "./styles/HeaderSPListWrapper.js";

export const HeaderSPList = () => {
  return (
    <HeaderSPListWrapper>
      <HowMuchShowing/>
      <SortBy/>
      
    </HeaderSPListWrapper>
  );
}


