import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons/index"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import { useRef } from "react"
import {
  INDEX_D_HorizontalNavigationNavWrapper,
  LI_Wrapper,
} from "./styles/index-wrapper"

export const INDEX_D_HorizontalNavigationNav = ({
  dataToDisplay,
  handleShowAll,
  handleShowOneCard,
  singleCardIsSelected,
  matchNameState,
}) => {
  // const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)
  // const [matchNameState, setMatchNameState] = useState("All")

  // const handleShowAll = () => {
  //   setSingleCardIsSelected(false)
  //   setMatchNameState("All")
  // }

  // const handleShowOneCard = (e) => {
  //   setSingleCardIsSelected(true)
  //   setMatchNameState(e.target.dataset.name)
  // }

  const refOfORGSelections = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refOfORGSelections)

  return (
    <INDEX_D_HorizontalNavigationNavWrapper
      shouldDisplayLeftArrow={stateToCss.scrollRight}
      shouldArrowRightBeDisabled={stateToCss.reachFinal}
    >
      <div>
        <div onClick={moveToLeft}>
          <LeftArrowSvg />
        </div>
        <div />
      </div>

      <ul
        ref={(el: any) => {
          setListRef(el)
          refOfORGSelections.current = el
        }}
      >
        <LI_Wrapper
          onClick={handleShowAll}
          isActiveCategory={!singleCardIsSelected}
        >
          <p>All</p>
        </LI_Wrapper>

        {Object.values(dataToDisplay).map(({ CATEGORY }: any, index) => {
          return (
            <LI_Wrapper
              key={`${CATEGORY}_${index}`}
              data-name={CATEGORY}
              onClick={handleShowOneCard}
              isActiveCategory={
                singleCardIsSelected && matchNameState === CATEGORY
              }
            >
              <p data-name={CATEGORY}>{CATEGORY}</p>
            </LI_Wrapper>
          )
        })}
      </ul>

      <div>
        <div onClick={moveToRight}>
          <ArrowRightSvg />
        </div>
      </div>
    </INDEX_D_HorizontalNavigationNavWrapper>
  )
}
