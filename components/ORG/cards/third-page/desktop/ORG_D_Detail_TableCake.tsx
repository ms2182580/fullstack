import pieGraph from "@/assets/images/ORG/special-education-schools/pieGraph.png"
import Image, { StaticImageData } from "next/image"
import { ORG_D_Detail_TableCakeWrapper } from "./styles/ORG_D_Detail_TableCakeWrapper"

export type TableData_Type = {
  dataTable: string
  percentageThisData: number
}[]

export type ORG_D_Detail_TableCake_Props = {
  tableTitle: string
  tableData: TableData_Type
  whichGraphic?: StaticImageData
}

export const ORG_D_Detail_TableCake = ({ tableTitle = "Table Title: NOT PROVIDED", tableData, whichGraphic = pieGraph }: ORG_D_Detail_TableCake_Props) => {
  return (
    <ORG_D_Detail_TableCakeWrapper>
      <span>
        <h2>{tableTitle}</h2>

        <ul>
          {tableData.map((x, index) => {
            return (
              <li key={`${x.dataTable}_${x.percentageThisData}`}>
                <span>{x.dataTable}</span>
                <span>{x.percentageThisData}%</span>
              </li>
            )
          })}
        </ul>
      </span>

      <Image
        src={whichGraphic}
        alt={`Graphic data for ${tableTitle}`}
      />
    </ORG_D_Detail_TableCakeWrapper>
  )
}
