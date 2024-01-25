import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { P } from "../../../../ui/heading_body_text/DesktopMobileFonts"
import { H3, H4 } from "../../../../ui/heading_body_text/HeaderFonts"
import { ORG_D_Detail_AdmissionWrapper } from "./styles/ORG_D_Detail_AdmissionWrapper"

export const ORG_D_Detail_Admission = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <>
      <ORG_D_Detail_AdmissionWrapper id={theIdForComponent}>
        <header>
          <H3>Admissions</H3>
        </header>

        <section className="BorderSection">
          <H4 primary_hover bold>
            Application Cycle
          </H4>

          <P>
            <ul className="ulNoPoint">
              <li>
                <strong>Applications accepted: </strong> September - January
              </li>
              <li>
                <strong>Due date: </strong> January 5th
              </li>
              <li>
                <strong>Financial application due date: </strong>February 10th
              </li>
              <li>
                <strong>Tuition deposit due date: </strong>February 10th
              </li>
            </ul>
          </P>
        </section>

        <section className="BorderSection">
          <H4 primary_hover bold>
            Tuition cost
          </H4>

          <P>
            <ul className="ulNoPoint">
              <li>
                <strong>Base tuition: </strong> $117,232.02
              </li>
            </ul>
          </P>
          <table>
            <thead>
              <tr>
                <th>Tuition Add-ons</th>
              </tr>
              <tbody>
                <tr>
                  <td>Speech therapy</td>
                  <td>$32,000</td>
                </tr>
                <tr>
                  <td>Occupational therapy</td>
                  <td>$24,000</td>
                </tr>
                <tr>
                  <td>Paraprofessional</td>
                  <td>$40,000</td>
                </tr>

                <tr>
                  <td>Assistive technology</td>
                  <td>$14,000</td>
                </tr>
              </tbody>
            </thead>

            <div className="ViewAllLink">
              <P
                hyperlink_normal
                semibold
                underline
                onClick={null}
                onKeyDown={null}
                tabIndex={0}
              >
                View All
              </P>
            </div>
          </table>
        </section>

        <section>
          <H4 primary_hover bold>
            Requirements
          </H4>

          <ul>
            <li>
              {
                "Children with developmental and learning disabilities must have neuropsychological (< 3 years old, preferred)."
              }
            </li>
            <li>Non-DOE approved school, parents willing to pay </li>
            <li>Students must have a IEP, 504 Plans not accepted </li>
          </ul>

          <button>
            Apply Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM7.17574 6.53314C7.06321 6.64566 7 6.79827 7 6.9574V10.5574C7 10.7165 7.06321 10.8691 7.17574 10.9817C7.28826 11.0942 7.44087 11.1574 7.6 11.1574C7.75913 11.1574 7.91174 11.0942 8.02426 10.9817C8.13679 10.8691 8.2 10.7165 8.2 10.5574V6.9574C8.2 6.79827 8.13679 6.64566 8.02426 6.53314C7.91174 6.42061 7.75913 6.3574 7.6 6.3574C7.44087 6.3574 7.28826 6.42061 7.17574 6.53314ZM7.17574 4.17574C7.28826 4.06321 7.44087 4 7.6 4C7.75913 4 7.91174 4.06321 8.02426 4.17574C8.13679 4.28826 8.2 4.44087 8.2 4.6C8.2 4.75913 8.13679 4.91174 8.02426 5.02426C7.91174 5.13679 7.75913 5.2 7.6 5.2C7.44087 5.2 7.28826 5.13679 7.17574 5.02426C7.06321 4.91174 7 4.75913 7 4.6C7 4.44087 7.06321 4.28826 7.17574 4.17574Z"
                fill="#3366CC"
              />
            </svg>
          </button>
        </section>
      </ORG_D_Detail_AdmissionWrapper>
    </>
  )
}
