import {
  DurationSVG,
  InGroupUsersSVG,
  LeftArrowTinySvg,
  MoneySVG,
  SingleUserSVG,
} from "@/assets/icons"
import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { H2 } from "@/components/ui/heading_body_text/HeaderFonts"
import { useRef, useState } from "react"
import { ORG_D_Detail_OverviewDetailsWrapper } from "./styles/ORG_D_Detail_OverviewDetailsWrapper"

const DATA = [
  {
    key: {
      SVG: MoneySVG,
      text: "Price",
    },
    value: [
      "1st week free trial",
      "$50/class (package deals & private lessons)",
    ],
  },
  {
    key: {
      SVG: DurationSVG,
      text: "Duration",
    },
    value: ["30 mins - 1 hour"],
  },
  {
    key: {
      SVG: SingleUserSVG,
      text: "Age",
    },
    value: ["3-21+ years old"],
  },
  {
    key: {
      SVG: InGroupUsersSVG,
      text: "Class Size",
    },
    value: ["4-11 students", "1 teacher", "1 ABA therapist"],
  },
  {
    key: {
      SVG: InGroupUsersSVG,
      text: "Class Size",
    },
    value: ["4-11 students", "1 teacher", "1 ABA therapist"],
  },
  {
    key: {
      SVG: InGroupUsersSVG,
      text: "Class Size",
    },
    value: ["4-11 students", "1 teacher", "1 ABA therapist"],
  },
  {
    key: {
      SVG: InGroupUsersSVG,
      text: "Class Size",
    },
    value: ["4-11 students", "1 teacher", "1 ABA therapist"],
  },
]

const INITIAL_STATE = 4

export const ORG_D_Detail_OverviewDetails = () => {
  const [howMuchShow, setHowMuchShow] = useState<number>(INITIAL_STATE)

  const handleHowMuchShow = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      if (howMuchShow < DATA.length) {
        setHowMuchShow(DATA.length)
      } else {
        setHowMuchShow(INITIAL_STATE)
      }
    }
  }

  const toMoveTheView = useRef<HTMLElement>(null)
  const handleMoveUserView = (e) => {
    if (e.type === "click" || e.code === "Enter" || e.key === "Enter") {
      const position =
        toMoveTheView!.current!.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: position })
    }
  }

  return (
    <ORG_D_Detail_OverviewDetailsWrapper
      ref={toMoveTheView}
      isViewMore={howMuchShow < DATA.length}
    >
      <header>
        <H2>Class Details</H2>
      </header>
      <div>
        <ul>
          {DATA.map(({ key, value }, index) => {
            const TheSVG = key.SVG

            const keyText = key.text
            while (index < howMuchShow) {
              return (
                <li key={`${keyText}_${index}`}>
                  <span>
                    <TheSVG />
                    <P>{keyText}</P>
                  </span>
                  <ul>
                    {value.map((y, i) => (
                      <li key={`${y}_${i}`}>{y}</li>
                    ))}
                  </ul>
                </li>
              )
            }
          })}
        </ul>
        {howMuchShow < DATA.length ? (
          <P
            tabIndex={0}
            data-content="View More"
            onKeyDown={handleHowMuchShow}
            onClick={handleHowMuchShow}
          >
            View More
            <span>
              <LeftArrowTinySvg />
            </span>
          </P>
        ) : (
          <P
            tabIndex={0}
            data-content="View Less"
            onClick={(e) => {
              handleHowMuchShow(e)
              handleMoveUserView(e)
            }}
            onKeyDown={(e) => {
              handleHowMuchShow(e)
              handleMoveUserView(e)
            }}
          >
            View Less
            <span>
              <LeftArrowTinySvg />
            </span>
          </P>
        )}
      </div>
    </ORG_D_Detail_OverviewDetailsWrapper>
  )
}
