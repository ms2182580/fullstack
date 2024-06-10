import imageGraph from "@/assets/images/org/special-education-schools/pieGraph.png"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import Image from "next/legacy/image"
import { ORG_D_Detail_StudentDemographicsWrapper } from "./styles/ORG_D_Detail_StudentDemographicsWrapper"

export const ORG_D_Detail_StudentDemographics = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <ORG_D_Detail_StudentDemographicsWrapper id={theIdForComponent}>
      <header>
        <H2>Student Demographics</H2>
      </header>

      <section>
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

          <Image
            src={imageGraph}
            alt="image2"
            objectFit="contain"
            width={200}
          />
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

          <Image
            src={imageGraph}
            alt="image2"
            objectFit="contain"
            width={200}
          />
        </div>
      </section>
    </ORG_D_Detail_StudentDemographicsWrapper>
  )
}
