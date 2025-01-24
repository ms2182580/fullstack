import SVGArrow from "@/assets/icons/arrow_up.svg"
import { FunctionComponent, SVGProps } from "react"
import { CardWrapper } from "./styles/card-wrapper"

export type CardType = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
  title: string
  paragraph: string
  buttonIsPrimary?: boolean
}

export const Card = ({
  icon: SVG,
  title,
  paragraph,
  buttonIsPrimary = true,
}: CardType) => {
  return (
    <CardWrapper buttonIsPrimary={buttonIsPrimary} tabIndex={0}>
      <div>
        <span>
          <SVG />
        </span>
        <h2>{title}</h2>
        <span>
          <SVGArrow />
        </span>
      </div>
      <p>{paragraph}</p>
    </CardWrapper>
  )
}
