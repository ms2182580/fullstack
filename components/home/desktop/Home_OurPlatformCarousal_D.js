import { ALL_ROUTES } from "@/utils/org/useCheckSlug_ORG"
import Link from "next/link.js"
import { Fragment } from "react"
import {
  Home_OurPlatform_BrainSvg,
  Home_OurPlatform_JetSvg,
  Home_OurPlatform_UserCollaborationSvg,
  LeftArrowTinySvg,
  RightArrowTinySvg,
} from "../../../assets/icons/index.js"
import { useScrollHorizontal } from "../../../utils/useScrollHorizontal.js"
import { H1 } from "../../ui/heading_body_text/HeaderFonts"
import { Home_OurPlatformCarousal_Carousal_D } from "./Home_OurPlatformCarousal_Carousal_D.js"
import { Home_OurPlatformCarousal_DWrapper } from "./styles/Home_OurPlatformCarousal_DWrapper.js"

const DATA_CARD = [
  {
    icon: <Home_OurPlatform_BrainSvg />,
    theFill: "hsl(19.3, 100%, 82.4%)",
    title: "Resources",
    subtitle: "Find and resource, anywhere, at any time.",
    lastButtonText: "Search",
    toWhere: `${ALL_ROUTES.ORG}`,
    isDisabled: false,
  },
  {
    icon: <Home_OurPlatform_BrainSvg />,
    theFill: "hsl(251.8, 100%, 87.1%)",
    title: "Services",
    subtitle: "A step-by-step guide through bureaucracy.",
    lastButtonText: "Start",
    toWhere: "",
    isDisabled: true,
  },
  {
    icon: <Home_OurPlatform_UserCollaborationSvg />,
    theFill: "hsl(136.9, 70.3%, 80.2%)",
    title: "Profiles",
    subtitle: "Identify each need and list each services.",
    lastButtonText: "Create",
    toWhere: "",
    isDisabled: true,
  },
  {
    icon: <Home_OurPlatform_JetSvg />,
    theFill: "hsl(50.4, 100%, 69.2%)",
    title: "Answers",
    subtitle: "Get  the answers you need from our community.",
    lastButtonText: "Ask",
    toWhere: "",
    isDisabled: true,
  },
]

export const Home_OurPlatformCarousal_D = () => {
  const { moveToLeft, moveToRight, stateToCss, setListRef } =
    useScrollHorizontal()

  return (
    <Home_OurPlatformCarousal_DWrapper>
      <div className="LEFT">
        <p>CREATE LIFETIME PLANS WITH US</p>
        <H1>Our platform simplifies care management like never before.</H1>
        <p>
          Get every tool you need to seamlessly draft a care strategy from your
          personal dashboard.
        </p>
        <Link href="#">See your dashboard!</Link>
      </div>

      <div className="RIGHT">
        <ul ref={setListRef}>
          {DATA_CARD.map((xDATA_CARD) => (
            <Fragment key={`${xDATA_CARD.title}`}>
              <Home_OurPlatformCarousal_Carousal_D allData={xDATA_CARD} />
            </Fragment>
          ))}
        </ul>

        <div>
          <span
            onClick={moveToLeft}
            onKeyDown={moveToLeft}
            tabIndex={0}
            className={`${
              stateToCss.scrollRight ? "navBarLeftArrowShouldDisplay" : ""
            }`}
          >
            <LeftArrowTinySvg />
          </span>
          <span
            onClick={moveToRight}
            onKeyDown={moveToRight}
            tabIndex={0}
            className={`${
              stateToCss.reachFinal ? "navBarRightArrowShouldDisable" : ""
            }`}
          >
            <RightArrowTinySvg />
          </span>
        </div>
      </div>
    </Home_OurPlatformCarousal_DWrapper>
  )
}
