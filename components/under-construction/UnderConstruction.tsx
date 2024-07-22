import Image from "next/image.js"
import { Fragment } from "react"
import UnderConstructionImage from "../../assets/images/UnderConstructionImage.png"
import { H1, H3 } from "../ui/heading_body_text/HeaderFonts"
import { UnderConstructionWrapper } from "./styles/UnderConstructionWrapper.js"

const defaultMessage = [
  "Our online navigation tool will revolutionize",
  "how parents can more easily get services",
]

export const UnderConstruction = (
  { customMessage }: { customMessage?: string[] } = {
    customMessage: defaultMessage,
  }
) => {
  return (
    <UnderConstructionWrapper>
      <div>
        <Image src={UnderConstructionImage} alt="under construccion image" />
      </div>
      <H1>Under Construction...</H1>
      <H3>
        {customMessage?.map((x) => {
          return (
            <Fragment key={x}>
              {x}
              <br />
            </Fragment>
          )
        })}
      </H3>
      <H1>Coming Soon</H1>
    </UnderConstructionWrapper>
  )
}
