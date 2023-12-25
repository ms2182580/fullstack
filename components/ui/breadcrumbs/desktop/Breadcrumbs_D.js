import Breadcrumbs_Home from "@/assets/Icons/Breadcrumbs_Home.svg"
import Link from "next/link.js"
import { Fragment } from "react"
import { ArrowRightSvg } from "../../../../assets/Icons/index.js"
import { useTabIndex } from "../../../../utils/useTabindex.js"
import { Breadcrumbs_DWrapper } from "./styles/Breadcrumbs_DWrapper"

export const Breadcrumbs_D = ({ whichDisplay = [], typedFlow = false }) => {
  const useTab = useTabIndex()

  return (
    <Breadcrumbs_DWrapper typedFlow={typedFlow}>
      <Link
        href="/"
        tabIndex={useTab}>
        <Breadcrumbs_Home />
        Home
      </Link>

      {whichDisplay.map((x) => {
        let defaultRoute = x[1] === "" ? "" : "/" + x[1]

        if (defaultRoute !== "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <Link
                href={defaultRoute}
                tabIndex={useTab}>
                {x[0]}
              </Link>
            </Fragment>
          )
        }

        if (defaultRoute === "") {
          return (
            <Fragment key={x[0]}>
              <ArrowRightSvg />

              <Link
                href="#"
                tabIndex={useTab}>
                {typedFlow && <span>Results for: </span>}
                {x[0]}
              </Link>
            </Fragment>
          )
        }
      })}
    </Breadcrumbs_DWrapper>
  )
}
