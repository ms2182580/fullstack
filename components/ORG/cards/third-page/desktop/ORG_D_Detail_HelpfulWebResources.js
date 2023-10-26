import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  ORG_D_Search_ViewProfileSvg,
  ORG_Detail_SearchFAQSSVG,
  ORG_Detail_SearchUsefulResource,
} from "../../../../../assets/Icons/index.js";

import ArrowImage from "../../../../../assets/Icons/DownArrowVector.png"

import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts.js"

import { DATA_PAT_D } from "@/utils/ORG/pat/DATA_PAT_D"

import image1 from "@/assets/images/ORG/attorney-advocates/ORG_AA19.png"
import image2 from "@/assets/images/ORG/attorney-advocates/ORG_AA20.png"
import image3 from "@/assets/images/ORG/attorney-advocates/ORG_AA21.png"

import Image from "next/image.js"
import { ORG_D_Detail_HelpfulWebResourcesWrapper } from "./styles/ORG_D_Detail_HelpfulWebResourcesWrapper.js"

export const ORG_D_Detail_HelpfulWebResources = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  const { card } = thirdpageDataORG

  const [showAll, setShowAll] = useState(false)
  const toMoveTheView = useRef()

  let isSelected = true

  const [howMuchDisplay, setHowMuchDisplay] = useState(1)

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1)
    } else {
      setHowMuchDisplay(DATA_PAT_D.length)
    }
  }, [isSelected])

  return (
    <>
      <ORG_D_Detail_HelpfulWebResourcesWrapper ref={toMoveTheView}>
        <H3 semibold>Helpful web resources  <button className="DesplegateButton"> <Image src={ArrowImage} layout="fixed"></Image>       </button>      </H3>

        <div>
          <ORG_Detail_SearchUsefulResource />
          <input
            type="text"
            placeholder="Search the web"
          />

          <span onClick={null}>
            <ButtonSmall secondary>Bookmark resources</ButtonSmall>
          </span>
        </div>

       

        <div class="HelpfulWebElementsWrapper">

        <div class="row BottomBorderRow">
            <div class="column">
              <div class="ImageColumn">
                <Image
                  src={image1}
                  alt="image1"
                  // width={340}
                  //  height={115}
                  layout="fill"
                  objectFit="contain"
                  //   className="Imagen"
                />
              </div>
            </div>
            <div class="column">
              <div class="DescriptionColumn">
                <div className="WebDescription">
                  <ul>
                    <li>
                      <p>
                        <a
                          target="_blank"
                          href="https://www.ablenrc.org/"
                          className="Link"
                        >
                          ABLE National Resource Center
                        </a>
                        Special Needs Alliance and ABLE National Resource Center collaborate on efforts to educate individuals with disabilities, their families and other stakeholders...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ButtonColumn">
                <span onClick={null}>
                  <button className="Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                    >
                      <path
                        d="M25.7207 1H17.7207M25.7207 1L13.7207 13M25.7207 1V9"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.7207 14.3333V22.3333C25.7207 23.0406 25.4398 23.7189 24.9397 24.219C24.4396 24.719 23.7613 25 23.054 25H4.38737C3.68013 25 3.00185 24.719 2.50175 24.219C2.00165 23.7189 1.7207 23.0406 1.7207 22.3333V3.66667C1.7207 2.95942 2.00165 2.28115 2.50175 1.78105C3.00185 1.28095 3.68013 1 4.38737 1H12.3874"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    Visit site
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div class="row BottomBorderRow">
            <div class="column">
              <div class="ImageColumn">
                <Image
                  src={image2}
                  alt="image2"
                  // width={340}
                  //  height={115}
                  layout="fill"
                  objectFit="contain"
                  //   className="Imagen"
                />
              </div>
            </div>
            <div class="column">
              <div class="DescriptionColumn">
                <div className="WebDescription">
                  <ul>
                    <li>
                      <p>
                        <a
                          target="_blank"
                          href="https://www.affordablecollegesonline.org/college-resource-center/resources-for-students-with-disabilities/"
                          className="Link"
                        >
                          Affordable Colleges Online
                        </a>
                        College resources for students with disabilities
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ButtonColumn">
                <span onClick={null}>
                  <button className="Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                    >
                      <path
                        d="M25.7207 1H17.7207M25.7207 1L13.7207 13M25.7207 1V9"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.7207 14.3333V22.3333C25.7207 23.0406 25.4398 23.7189 24.9397 24.219C24.4396 24.719 23.7613 25 23.054 25H4.38737C3.68013 25 3.00185 24.719 2.50175 24.219C2.00165 23.7189 1.7207 23.0406 1.7207 22.3333V3.66667C1.7207 2.95942 2.00165 2.28115 2.50175 1.78105C3.00185 1.28095 3.68013 1 4.38737 1H12.3874"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    Visit site
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="column">
              <div class="ImageColumn">
                <Image
                  src={image3}
                  alt="image3"
                  // width={340}
                  //  height={115}
                  layout="fill"
                  objectFit="contain"
                  //   className="Imagen"
                />
              </div>
            </div>
            <div class="column">
              <div class="DescriptionColumn">
                <div className="WebDescription">
                  <ul>
                    <li>
                      <p>
                        <a
                          target="_blank"
                          href="https://americanasc.org/"
                          className="Link"
                        >
                          The American Association of Settlement Consultants
                          (AASC)
                        </a>
                        The American Association of Settlement Consultants
                        (AASC) is an industry advocacy group committed to a...
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="ButtonColumn">
                <span onClick={null}>
                  <button className="Button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="27"
                      height="26"
                      viewBox="0 0 27 26"
                      fill="none"
                    >
                      <path
                        d="M25.7207 1H17.7207M25.7207 1L13.7207 13M25.7207 1V9"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.7207 14.3333V22.3333C25.7207 23.0406 25.4398 23.7189 24.9397 24.219C24.4396 24.719 23.7613 25 23.054 25H4.38737C3.68013 25 3.00185 24.719 2.50175 24.219C2.00165 23.7189 1.7207 23.0406 1.7207 22.3333V3.66667C1.7207 2.95942 2.00165 2.28115 2.50175 1.78105C3.00185 1.28095 3.68013 1 4.38737 1H12.3874"
                        stroke="#6C6C6C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                    Visit site
                  </button>
                </span>
              </div>
            </div>
          </div>

          <div className="ViewAllLink">
              <P
                hyperlink_normal
                semibold
                underline
                onClick={null}
                onKeyDown={null}
                tabIndex={0}>
                View All
              </P>
            </div>
  
        </div>
      </ORG_D_Detail_HelpfulWebResourcesWrapper>
    </>
  )
}
