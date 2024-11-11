import { ArrowRightSvg, LeftArrowSvg } from "@/assets/icons/index"
import { ALL_DATA_ORG_Type } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal"
import { useRef, useState } from "react"
import {
  INDEX_D_HorizontalNavigationNavWrapper,
  LI_Wrapper,
} from "./styles/index-wrapper"

type Props = {
  dataToDisplay: ALL_DATA_ORG_Type
} & UseHorizontalNavigationNavLogic_Return

export const INDEX_D_HorizontalNavigationNav = ({
  dataToDisplay,
  handleShowAll,
  handleShowOneCard,
  singleCardIsSelected,
  matchNameState,
}: Props) => {
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

export type UseHorizontalNavigationNavLogic_Return = {
  singleCardIsSelected: boolean
  matchNameState: string
  handleShowAll: () => void
  handleShowOneCard: (e: any) => void
}

export const useHorizontalNavigationNavLogic =
  (): UseHorizontalNavigationNavLogic_Return => {
    const [singleCardIsSelected, setSingleCardIsSelected] = useState(false)
    const [matchNameState, setMatchNameState] = useState("All")

    const handleShowAll = () => {
      setSingleCardIsSelected(false)
      setMatchNameState("All")
    }

    const handleShowOneCard = (e) => {
      setSingleCardIsSelected(true)
      setMatchNameState(e.target.dataset.name)
    }

    return {
      singleCardIsSelected,
      matchNameState,
      handleShowAll,
      handleShowOneCard,
    }
  }
