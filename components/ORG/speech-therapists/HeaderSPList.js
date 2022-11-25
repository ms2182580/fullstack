import HowMuchShowing from "./HowMuchShowing.js"
import SortBy from "./SortBy.js"
import { HeaderSPListWrapper } from "./styles/HeaderSPListWrapper.js"

export const HeaderSPList = ({userFetched, filtersST, setData, setFilters, handleSetData, handleSetFilters }) => {
  return (
    <HeaderSPListWrapper>
      <HowMuchShowing />
      <SortBy
        userFetched={userFetched}
        filtersST={filtersST}
        setData={setData}
        setFilters={setFilters}
        handleSetData={handleSetData}
handleSetFilters={handleSetFilters}
      />
    </HeaderSPListWrapper>
  )
}
