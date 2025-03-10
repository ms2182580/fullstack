import Image, { StaticImageData } from "next/image"
import { FC, SVGProps } from "react"
import { CardWrapper } from "./styles/card-wrapper"

export type CardProps = {
  svg: FC<SVGProps<SVGSVGElement>> | StaticImageData
  title:
    | "See Categories"
    | "Get Listing"
    | "Create Content"
    | "Create"
    | "Understand"
    | "Discover"
  listOfOptions: string[]
  allowFocus?: boolean
}

export const Card = ({
  svg: Svg,
  title,
  listOfOptions,
  allowFocus,
}: CardProps) => {
  return (
    <CardWrapper
      tabIndex={allowFocus ? 0 : -1}
      data-content={allowFocus ? "" : `${title} coming soon!`}
      allowFocus={allowFocus}
    >
      <div>
        {typeof Svg === "function" ? (
          <Svg />
        ) : (
          <Image src={Svg} alt={`icon of ${title}`} />
        )}
      </div>

      <h2>{title}</h2>

      <ul>
        {listOfOptions.map((x, index) => {
          return <li key={x}>{x}</li>
        })}
      </ul>
    </CardWrapper>
  )
}
