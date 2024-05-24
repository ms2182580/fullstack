import Breadcrumbs_CaretRight from "@/assets/icons/Breadcrumbs_CaretRight.svg"
import Breadcrumbs_Home from "@/assets/icons/Breadcrumbs_Home.svg"
import { useTabIndex } from "@/utils/useTabindex"
import Link from "next/link.js"
import { Fragment } from "react"
import { Breadcrumbs_DWrapper } from "./styles/Breadcrumbs_DWrapper"

export const Breadcrumbs_D = ({ whichDisplay = [], typedFlow = false }) => {
  const useTab = useTabIndex()

  return (
    <Breadcrumbs_DWrapper typedFlow={typedFlow}>
      <Link href="/" tabIndex={useTab}>
        <Breadcrumbs_Home />
        Home
      </Link>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute !== "") {
          return (
            <Fragment key={x[0]}>
              <Breadcrumbs_CaretRight />

              <Link href={defaultRoute} tabIndex={useTab}>
                {x[0]}
              </Link>
            </Fragment>
          )
        }

        if (defaultRoute === "") {
          return (
            <Fragment key={x[0]}>
              <Breadcrumbs_CaretRight />

              <span>
                {typedFlow && <span>Results for: </span>}

                {x[0]}
              </span>
            </Fragment>
          )
        }
      })}
    </Breadcrumbs_DWrapper>
  )
}
