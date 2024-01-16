import ArrowUp from "@/assets/images/arrow_up.png"
import image1 from "@/assets/images/org/attorney-advocates/ORG_AA19.png"
import image2 from "@/assets/images/org/attorney-advocates/ORG_AA20.png"
import image3 from "@/assets/images/org/attorney-advocates/ORG_AA21.png"
import Image from "next/image"
import { ORG_Detail_SearchUsefulResource } from "../../../../../assets/icons/index.js"
import { ButtonSmall } from "../../../../ui/buttons/general/index"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_HelpfulWebResourcesWrapper } from "./styles/ORG_D_Detail_HelpfulWebResourcesWrapper"

export const ORG_D_Detail_HelpfulWebResources = () => {
  return (
    <>
      <ORG_D_Detail_HelpfulWebResourcesWrapper>
        <details open>
          <summary tabIndex={0}>
            <H3>Helpful web resources </H3>
            <span className="DesplegateButton">
              <Image src={ArrowUp} alt="arrow to open or close the text" />
            </span>
          </summary>
          <div>
            <div>
              <ORG_Detail_SearchUsefulResource />
              <input type="text" placeholder="Search the web" />
              <span>
                <ButtonSmall secondary>Bookmark resources</ButtonSmall>
              </span>
            </div>
            <div className="HelpfulWebElementsWrapper">
              <div className="row BottomBorderRow">
                <div className="column">
                  <div className="ImageColumn">
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
                <div className="column">
                  <div className="DescriptionColumn">
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
                            Special Needs Alliance and ABLE National Resource
                            Center collaborate on efforts to educate individuals
                            with disabilities, their families and other
                            stakeholders...
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ButtonColumn">
                    <span>
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
              <div className="row BottomBorderRow">
                <div className="column">
                  <div className="ImageColumn">
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
                <div className="column">
                  <div className="DescriptionColumn">
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
                <div className="column">
                  <div className="ButtonColumn">
                    <span>
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
              <div className="row">
                <div className="column">
                  <div className="ImageColumn">
                    <Image
                      src={image3}
                      alt="image3"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="column">
                  <div className="DescriptionColumn">
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
                            (AASC) is an industry advocacy group committed to
                            a...
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="ButtonColumn">
                    <span>
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
                <P tabIndex={0}>View All</P>
              </div>
            </div>
          </div>
        </details>
      </ORG_D_Detail_HelpfulWebResourcesWrapper>
    </>
  )
}
