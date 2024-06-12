import Tooltip from "@/assets/icons/tooltip.svg"
import bar1 from "@/assets/images/org/special-education-schools/bar_AllStudents.png"
import bar2 from "@/assets/images/org/special-education-schools/bar_StudentsDIsabilities.png"
import {
  CategoriesToDisplay_Data,
  ORG_D_Detail_Bars,
  ORG_D_Detail_Bars_Props,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_Bars"
import {
  ORG_D_Detail_TableCake,
  ORG_D_Detail_TableCake_Props,
  TableData_Type,
} from "@/components/org/cards/third-page/desktop/ORG_D_Detail_TableCake"
import { H3, H4 } from "@/components/ui/heading_body_text/HeaderFonts"
import { ArraySection_KEYS } from "@/utils/org/third-page/InnerNavBar"
import { PVES_General_D_GraphicsWrapper } from "./styles/PVES_General_D_GraphicsWrapper"

const cakeLeft_Data: TableData_Type = [
  {
    dataTable: "women",
    percentageThisData: 40,
  },
  {
    dataTable: "men",
    percentageThisData: 24,
  },
  {
    dataTable: "non-binary gender",
    percentageThisData: 26,
  },
  {
    dataTable: "other",
    percentageThisData: 10,
  },
]

const cakeLeft: ORG_D_Detail_TableCake_Props = {
  tableTitle: "Employee gender identities",
  tableData: cakeLeft_Data,
}
const cakeRight_Data: TableData_Type = [
  {
    dataTable: "white",
    percentageThisData: 62,
  },
  {
    dataTable: "hispanic",
    percentageThisData: 14,
  },
  {
    dataTable: "asian or pacific islander",
    percentageThisData: 12,
  },
  {
    dataTable: "black",
    percentageThisData: 10,
  },
  {
    dataTable: "two or more races",
    percentageThisData: 2,
  },
  {
    dataTable: "native american",
    percentageThisData: "<1",
  },
  {
    dataTable: "native hawaiian",
    percentageThisData: "<1",
  },
]

const cakeRight: ORG_D_Detail_TableCake_Props = {
  tableTitle: "Employee Demographics",
  tableData: cakeRight_Data,
}

const bars_Data: CategoriesToDisplay_Data = [
  {
    category: "All employees",
    whichGraphic: bar1,
  },
  {
    category: "Neurodiverse employees",
    whichGraphic: bar2,
  },
]

const bars: ORG_D_Detail_Bars_Props = {
  title: "Neurodiversity & Accessibility",
  shouldDisplayTooltip: true,
  subtitle:
    "This employer is above the national average in it’s neurodiversity hires.",
  categoriesToDisplay: bars_Data,
}

/* 
!FH0
Fix the overflow
*/

export const PVES_General_D_Graphics = ({
  [ArraySection_KEYS.ALL_DATA]: allProps,
}) => {
  const { theIdForComponent = "#" } = allProps || {}

  return (
    <PVES_General_D_GraphicsWrapper id={theIdForComponent}>
      <H3>Employer Diversity, Equity & Inclusion</H3>

      <section>
        <header>
          <H4>Employee demographics</H4>
          <Tooltip />
        </header>
        <ORG_D_Detail_TableCake
          tableTitle={cakeLeft.tableTitle}
          tableData={cakeLeft.tableData}
        />
        <ORG_D_Detail_TableCake
          tableTitle={cakeRight.tableTitle}
          tableData={cakeRight.tableData}
        />
      </section>

      <ORG_D_Detail_Bars
        title={bars.title}
        subtitle={bars.subtitle}
        shouldDisplayTooltip={bars.shouldDisplayTooltip}
        categoriesToDisplay={bars.categoriesToDisplay}
      />
    </PVES_General_D_GraphicsWrapper>
  )
}
