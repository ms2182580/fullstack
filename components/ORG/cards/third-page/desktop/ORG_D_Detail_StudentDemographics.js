import { useORG_Ctx_D_ThirdpageData } from "@/context/ORG_Ctx_D_ThirdpageData_Provider.js";
import { useEffect, useRef, useState } from "react";
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts.js";
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts.js";
import { DATA_PAT_D } from "@/utils/ORG/pat/DATA_PAT_D";
import { ORG_D_Detail_SchoolAcademicsWrapper } from "./styles/ORG_D_Detail_SchoolAcademicsWrapper.js";
import imageGraph from "@/assets/images/ORG/special-education-schools/pieGraph.png";
import bar1 from "@/assets/images/ORG/special-education-schools/bar_AllStudents.png";
import bar2 from "@/assets/images/ORG/special-education-schools/bar_StudentsDIsabilities.png";
import Image from "next/image";
import { ORG_D_Detail_StudentDemographicsWrapper } from "./styles/ORG_D_Detail_StudentDemographicsWrapper.js";

export const ORG_D_Detail_StudentDemographics = () => {
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData();

  const { card } = thirdpageDataORG;

  const [showAll, setShowAll] = useState(false);
  const toMoveTheView = useRef();

  let isSelected = true;

  const [howMuchDisplay, setHowMuchDisplay] = useState(1);

  useEffect(() => {
    if (!isSelected) {
      setHowMuchDisplay(1);
    } else {
      setHowMuchDisplay(DATA_PAT_D.length);
    }
  }, [isSelected]);

  return (
    <>
      <ORG_D_Detail_StudentDemographicsWrapper ref={toMoveTheView}>
        <header>
          <H3>Student Demographics</H3>
        </header>

        <section>
          <div className="sectionRow">
            <div className="ElementsBackground">
              <table className="ShadowTable">
                <thead>
                  <tr>
                    <th>Student Demographics</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>White</td>
                      <td>62%</td>
                    </tr>
                    <tr>
                      <td>Hispanic</td>
                      <td>14%</td>
                    </tr>
                    <tr>
                      <td>Asian or Pacific Islander</td>
                      <td>12%</td>
                    </tr>
                    <tr>
                      <td>Black</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Two or more Races</td>
                      <td>2%</td>
                    </tr>
                    <tr>
                      <td>Native Hawaiian </td>
                      <td>{"<1%"}</td>
                    </tr>
                    <tr>
                      <td>Native American</td>
                      <td>{"<1%"}</td>
                    </tr>
                  </tbody>
                </thead>
              </table>

              <Image src={imageGraph} alt="image2" objectFit="contain" width={200} />
            </div>

            <div className="ElementsBackground">
              <table className="ShadowTable">
                <thead>
                  <tr>
                    <th>Economic breakdowns</th>
                  </tr>
                  <tbody>
                    <tr>
                      <td>{"> $1 Million "}</td>
                      <td>62%</td>
                    </tr>                 
                    <tr>
                      <td>$500,000 - $999, 999</td>
                      <td>14%</td>
                    </tr>
                    <tr>
                      <td>$100,000 - $499,999</td>
                      <td>12%</td>
                    </tr>
                    <tr>
                      <td>$75, 000 - $120,000</td>
                      <td>2%</td>
                    </tr>
                    <tr>
                      <td>{"<< $74,999%"}</td>
                      <td>2%</td>
                    </tr>
                    <tr>
                      <td>Unknown</td>
                      <td>{"<1%"}</td>
                    </tr>
                  </tbody>
                </thead>
              </table>

              <Image src={imageGraph} alt="image2" objectFit="contain" width={200} />
            </div>
          </div>
        </section>
      </ORG_D_Detail_StudentDemographicsWrapper>
    </>
  );
};
