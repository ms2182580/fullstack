import { ORG_Pagination_NextSvg, ORG_Pagination_PrevSvg } from "@/assets/icons"
import { ORG_M_Results_Pagination } from "./styles/ORG_M_Result_Pagination"
import { useState } from "react"

export function ORG_M_Result_Pagination() {
  const [pagination, setPagination] = useState(2)
  return (
    <ORG_M_Results_Pagination activeIndex={pagination}>
      <div>
        <button>
          <ORG_Pagination_PrevSvg />
        </button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>
          <ORG_Pagination_NextSvg />
        </button>
      </div>
    </ORG_M_Results_Pagination>
  )
}
