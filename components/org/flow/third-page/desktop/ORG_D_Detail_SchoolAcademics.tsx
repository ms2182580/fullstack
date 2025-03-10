import bar1 from "@/assets/images/org/special-education-schools/bar_AllStudents.png"
import bar2 from "@/assets/images/org/special-education-schools/bar_StudentsDIsabilities.png"
import { H2, H3 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import {
  CategoriesToDisplay_Data,
  ORG_D_Detail_Bars,
  ORG_D_Detail_Bars_Props,
} from "./ORG_D_Detail_Bars"
import {
  ORG_D_Detail_TableCake,
  ORG_D_Detail_TableCake_Props,
  TableData_Type,
} from "./ORG_D_Detail_TableCake"
import { ORG_D_Detail_SchoolAcademicsWrapper } from "./styles/ORG_D_Detail_SchoolAcademicsWrapper"

const schoolAcademicsUpgradedCurriculum_tableData: TableData_Type = [
  {
    dataTable: "College Programs",
    percentageThisData: 40,
  },
  {
    dataTable: "College Certificado Programs",
    percentageThisData: 24,
  },
  {
    dataTable: "Day Habilitation Program",
    percentageThisData: 26,
  },
  {
    dataTable: "Vocational training",
    percentageThisData: 10,
  },
]

const schoolAcademicsUpgradedCurriculum: ORG_D_Detail_TableCake_Props = {
  tableTitle: "Student Post-graduation  Plans",
  tableData: schoolAcademicsUpgradedCurriculum_tableData,
}

const testScores_Data: CategoriesToDisplay_Data = [
  {
    category: "All Students",
    whichGraphic: bar1,
  },
  {
    category: "Students with disabilities",
    whichGraphic: bar2,
  },
]

const testScores: ORG_D_Detail_Bars_Props = {
  title: "test Scores",
  subtitle:
    "Test scores for the school are above the state average that are given once a year",
  categoriesToDisplay: testScores_Data,
}

export const ORG_D_Detail_SchoolAcademics = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <ORG_D_Detail_SchoolAcademicsWrapper id={theIdForComponent}>
      <header>
        <H2>School Academics</H2>
      </header>

      <div>
        <section>
          <H3>
            Ungraded Curriculum &nbsp;{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5ZM5.21928 6.24935C5.20735 6.21706 5.20193 6.18258 5.20334 6.14804C5.30144 4.33414 6.73469 3.70312 8.04299 3.70312C9.48553 3.70312 10.8031 4.48387 10.8031 6.09992C10.8031 7.25393 10.1474 7.80366 9.51857 8.29885C8.75755 8.89671 8.47565 9.12024 8.47565 9.88815V10.0005C8.47565 10.0714 8.44845 10.1394 8.40004 10.1895C8.35163 10.2397 8.28596 10.2678 8.2175 10.2678H7.38006C7.31231 10.2678 7.24726 10.2403 7.19897 10.191C7.15067 10.1418 7.123 10.0749 7.12191 10.0047L7.11881 9.77264C7.07958 8.7812 7.62995 8.1705 8.32489 7.64751C8.93515 7.17264 9.32135 6.86034 9.32135 6.1812C9.32135 5.29885 8.67287 4.932 7.96451 4.932C7.13637 4.932 6.6717 5.44323 6.57876 6.14484C6.56018 6.29136 6.44659 6.41222 6.30409 6.41222H5.4522C5.41883 6.41283 5.38569 6.40637 5.35482 6.39323C5.32395 6.38008 5.296 6.36054 5.27269 6.3358C5.24938 6.31105 5.2312 6.28163 5.21928 6.24935ZM7.85402 13.3031C7.24995 13.3031 6.8111 12.8817 6.8111 12.3117C6.8111 11.7213 7.24995 11.3063 7.85299 11.3063C8.48184 11.3063 8.91553 11.7213 8.91553 12.3117C8.91553 12.8817 8.48288 13.3031 7.85402 13.3031Z"
                fill="#3366CC"
              />
            </svg>
          </H3>

          <ORG_D_Detail_TableCake
            tableTitle={schoolAcademicsUpgradedCurriculum.tableTitle}
            tableData={schoolAcademicsUpgradedCurriculum.tableData}
          />
        </section>

        <ORG_D_Detail_Bars
          title={testScores.title}
          subtitle={testScores.subtitle}
          categoriesToDisplay={testScores.categoriesToDisplay}
        />
      </div>
    </ORG_D_Detail_SchoolAcademicsWrapper>
  )
}
