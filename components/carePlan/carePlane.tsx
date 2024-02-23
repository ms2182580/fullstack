import {
  BackArrow_Icon_SVG,
  CardBlack_Icon_SVG,
  Direction_Icon_SVG,
  Info_Icon_SVG,
  Internet_Icon_SVG,
  LeftArrowSvg,
  Location_Icon_SVG,
  Location_filed_Icon_SVG,
  Mail_Icon_SVG,
  ORG_D_Search_ViewProfileSvg,
  Phone_Icon_SVG,
  SearchBlack_Icon_SVG,
} from "@/assets/icons"
import { Stepper } from "../common/stepper/steper"
import {
  CarePlan_Wrapper,
  Item_Desc,
  Item_Title,
  LI_Category,
  Search_Wrapper,
  Tab_Panel_Wrapper,
} from "./carePlan.style"
import { FirstStep } from "./components/stepper-part/first-step.component"

import { ArrowRightSvg } from "@/assets/icons/index.js"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js"
import { ALL_DATA } from "@/utils/org/categories/general/ALL_DATA"
import { useScrollHorizontal } from "@/utils/useScrollHorizontal.js"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { MapComponent } from "../map/map"
import { StarsRatingReview_D } from "../org/stars-rating-review/desktop/StarsRatingReview_D"
import { ButtonSmall } from "../ui/buttons/general"
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
  const [Isdetail, setIsdetail] = useState(false)

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

  const [isFullMap, setIsFullMap] = useState(false)

  const handleIsFullMap = (e: any) => {
    if (e.type === "click" || (e.key === "Enter" && e.type === "keydown")) {
      setIsFullMap((prevState) => !prevState)
    }
  }

  return (
    <CarePlan_Wrapper>
      <div className="stepper">
        <Stepper steps={steps} />
      </div>

      {!Isdetail ? (
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

                    <input
                      type="text"
                      placeholder="Diagnosis (Ex: Autism...)"
                    />
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
                  <div
                    className="tab_card_btn"
                    onClick={() => setIsdetail(true)}
                  >
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
                  <div
                    className="tab_card_btn"
                    onClick={() => setIsdetail(true)}
                  >
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
                  <div
                    className="tab_card_btn"
                    onClick={() => setIsdetail(true)}
                  >
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
      ) : (
        <Tab_Panel_Wrapper>
          <div className="panel_header">
            <div className="back_link" onClick={() => setIsdetail(false)}>
              <Link href="">
                {" "}
                <BackArrow_Icon_SVG /> Back to resource directory
              </Link>
            </div>
            <ButtonSmall>Add to care plan</ButtonSmall>
          </div>
          <div className="inner_content_wrapper">
            <div className="inner_side">
              <div className="img_sec">
                <img src="/images/side_ph.png" alt="side_ph" />
                <div className="img_link">6 photos</div>
              </div>
              <div className="contact_sec">
                <div className="title">Contact Information</div>
                <div className="item">
                  <Phone_Icon_SVG />
                  <div className="item_text">(123)456-7890</div>
                </div>
                <div className="item">
                  <Mail_Icon_SVG />
                  <div className="item_text">info@assistiveware.com</div>
                </div>
                <div className="item">
                  <Internet_Icon_SVG />
                  <div className="item_text">www.assistiveware.com</div>
                </div>
                <div className="item">
                  <Location_filed_Icon_SVG />
                  <div className="item_text">
                    Laurierstraat 193 Amsterdam, null 1016 PL Netherlands
                  </div>
                </div>
              </div>
              <div className="direction_sec">
                <div className="title">
                  Get Directions <Direction_Icon_SVG />
                </div>
                <div className="map">
                  <MapComponent
                    isFullMap={isFullMap}
                    handleIsFullMap={handleIsFullMap}
                  />
                </div>
              </div>
            </div>
            <div className="inner_content">
              <div className="title">
                Permobil F5 Corpus VS <Info_Icon_SVG />
              </div>
              <div className="subtitle">
                Power wheelchair with standing function
              </div>
              <div className="description">
                Permobile corpus Industries, Inc.
              </div>
              <div className="text_card">
                <div className="card_title">Diagnosis Served</div>
                <div className="card_des">
                  Cognitive, Learning, Mobility, Physical
                </div>
              </div>
              <div className="item_wrapper">
                <div className="item_row">
                  <div className="first_col">
                    <Item_Title>Speed</Item_Title>
                    <Item_Desc>7.5 (12kmh)</Item_Desc>
                  </div>
                  <div className="second_col">
                    <Item_Title>Price</Item_Title>
                    <Item_Desc>$36,00 - $37,888</Item_Desc>
                  </div>
                </div>
                <div className="item_row">
                  <div className="first_col">
                    <Item_Title>Range</Item_Title>
                    <Item_Desc>24 miles (40km)</Item_Desc>
                  </div>
                  <div className="second_col">
                    <Item_Title>Max User Weight</Item_Title>
                    <Item_Desc> 300 lbs (136kg)</Item_Desc>
                  </div>
                </div>
                <div className="item_row">
                  <div className="first_col">
                    <Item_Title>Seat Lift</Item_Title>
                    <Item_Desc>35cm</Item_Desc>
                  </div>
                  <div className="second_col">
                    <Item_Title>Additional Information</Item_Title>
                    <Item_Desc>
                      {" "}
                      Available in 24 different colors, Advanced control system
                      with full color LCD display...{" "}
                    </Item_Desc>
                  </div>
                </div>
                <div className="item_row">
                  <div className="first_col">
                    <Item_Title>Seat Tilt</Item_Title>
                    <Item_Desc>50°</Item_Desc>
                  </div>
                </div>
                <div className="item_row">
                  <div>
                    <Item_Title>About</Item_Title>
                    <Item_Desc>
                      Permobil combined all the performance features of the F5
                      Corpus with superior power standing wheelchair
                      functionality. Fully programmable standing sequences allow
                      you to find the perfect position using supine,
                      semi-reclined or sit to stand techniques... show more
                    </Item_Desc>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Tab_Panel_Wrapper>
      )}
    </CarePlan_Wrapper>
  )
}
