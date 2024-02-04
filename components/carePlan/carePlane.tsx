import {
  CardBlack_Icon_SVG,
  LeftArrowSvg,
  Location_Icon_SVG,
  ORG_D_Search_ViewProfileSvg,
  SearchBlack_Icon_SVG,
} from "@/assets/icons"
import Stepper from "../common/stepper/steper"
import { CarePlan_Wrapper, LI_Category, Search_Wrapper } from "./carePlan.style"
import { FirstStep } from "./components/stepper-part/first-step.component"

import { ArrowRightSvg } from "@/assets/icons/index.js"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal.js"
import { useEffect, useRef, useState } from "react"
import { ButtonSmall } from "../ui/buttons/general"
import { StarsRatingReview_D } from "../org/stars-rating-review/desktop/StarsRatingReview_D"
import { H3, H4 } from "../ui/heading_body_text/HeaderFonts"
// import { LI_Category } from "./styles/content-part.style"

interface Step {
  title: string
  content: React.ReactNode
}

const steps: Step[] = [
  { title: "Step 1", content: <FirstStep /> },
  { title: "Step 2", content: <FirstStep /> },
  { title: "Step 3", content: <FirstStep /> },
]

export const CarePlaneComponent = () => {
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

  const refOfORGSelections = useRef<HTMLUListElement | null>(null)

  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal(refOfORGSelections)

  const { setThirdpageDataORG }: any = useORG_Ctx_D_ThirdpageData()

  useEffect(() => {
    setThirdpageDataORG("")
  }, [])

  return (
    <CarePlan_Wrapper>
      <div className="stepper">
        <Stepper steps={steps} />
      </div>
      <div className="content_tabs">
        <div className="tab_title">More recommendations</div>
        <div className="search_content">
          <Search_Wrapper>
            <div>
              <div className="search_label">
                {" "}
                <div>Keyword</div>
                <div>
                  <span>*</span>Diagnosis
                </div>
                <div>Location</div>
              </div>
              <div className="search_input">
                <div className="inner_input">
                  <SearchBlack_Icon_SVG />
                  <input
                    type="text"
                    placeholder="ADHD, speech therapy, music classes, etc."
                  />
                </div>
                <div className="inner_input">
                  <CardBlack_Icon_SVG />

                  <input type="text" placeholder="Diagnosis (Ex: Autism...)" />
                </div>
                <div className="inner_input">
                  <Location_Icon_SVG />
                  <input type="text" placeholder="City or zip code" />
                </div>
              </div>
            </div>
            <div className="search_btn">
              {" "}
              <SearchBlack_Icon_SVG fill="#fff" />
            </div>
          </Search_Wrapper>
        </div>
        <div className="tab_filter">
          <div
            className={`${
              stateToCss.scrollRight ? "navBarLeftArrowShouldDisplay" : ""
            }`}
          >
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
            <LI_Category
              onClick={handleShowAll}
              isActiveCategory={!singleCardIsSelected}
            >
              <P primary_cta semibold>
                All
              </P>
            </LI_Category>

            {Object.values(ALL_DATA).map(({ CATEGORY }, index) => {
              return (
                <LI_Category
                  key={`${CATEGORY}_${index}`}
                  data-name={CATEGORY}
                  onClick={handleShowOneCard}
                  isActiveCategory={
                    singleCardIsSelected && matchNameState === CATEGORY
                  }
                >
                  <P primary_cta semibold data-name={CATEGORY}>
                    {CATEGORY}
                  </P>
                </LI_Category>
              )
            })}
          </ul>

          <div
            className={`${
              stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
            }`}
          >
            <div
              onClick={moveToRight}
              className={`${
                stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
              }`}
            >
              <ArrowRightSvg />
            </div>
            <div />
          </div>
        </div>
        <div className="tab_panel">
          <div className="tab_panel_title">
            Popular wheelchairs and mobility devices
          </div>

          <div className="tab_cards_container">
            <div className="tab_card">
              <div className="tab_card_img">
                <img src="/images/bycycle.png" alt="bycycle" />
              </div>
              <div className="tab_card_body">
                <div className="tab_card_title">Permobil F5 Corpus VS</div>
                <div className="tab_card_subtitle">Power wheelchair </div>
                <div className="tab_card_meta">
                  <StarsRatingReview_D rating={4} reviews={4} />
                </div>
                <div className="tab_card_desc">
                  Permobil combined all the performance features of the F5
                  Corpus with superior...
                </div>
                <div className="tab_card_btn">
                  <ButtonSmall>
                    <ORG_D_Search_ViewProfileSvg />
                    View Profile
                  </ButtonSmall>
                </div>
              </div>
            </div>
            <div className="tab_card">
              <div className="tab_card_img">
                <img src="/images/wheelchair.png" alt="bycycle" />
              </div>
              <div className="tab_card_body">
                <div className="tab_card_title">Rehasense ICON 60</div>
                <div className="tab_card_subtitle">
                  Active rigid wheelchair{" "}
                </div>
                <div className="tab_card_meta">
                  <StarsRatingReview_D rating={4} reviews={4} />
                </div>
                <div className="tab_card_desc">
                  Permobil combined all the performance features of the F5
                  Corpus with superior...
                </div>
                <div className="tab_card_btn">
                  <ButtonSmall>
                    <ORG_D_Search_ViewProfileSvg />
                    View Profile
                  </ButtonSmall>
                </div>
              </div>
            </div>
            <div className="tab_card">
              <div className="tab_card_img">
                <img src="/images/bycycle.png" alt="bycycle" />
              </div>
              <div className="tab_card_body">
                <div className="tab_card_title">Permobil F5 Corpus VS</div>
                <div className="tab_card_subtitle">Power wheelchair </div>
                <div className="tab_card_meta">
                  <StarsRatingReview_D rating={4} reviews={4} />
                </div>
                <div className="tab_card_desc">
                  Permobil combined all the performance features of the F5
                  Corpus with superior...
                </div>
                <div className="tab_card_btn">
                  <ButtonSmall>
                    <ORG_D_Search_ViewProfileSvg />
                    View Profile
                  </ButtonSmall>
                </div>
              </div>
            </div>
          </div>
          <div className="pagingation_btn">
            <ButtonSmall secondary>See all (25) </ButtonSmall>
          </div>
        </div>
      </div>
    </CarePlan_Wrapper>
  )
}
