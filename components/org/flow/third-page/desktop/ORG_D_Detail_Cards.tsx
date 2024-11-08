import ArrowUp from "@/assets/images/arrow_up.png"
import Image, { StaticImageData } from "next/image"
import { FunctionComponent, ReactElement, SVGProps, useMemo } from "react"
import { CSSProp } from "styled-components"
import { ORG_D_Detail_CardsWrapper } from "./styles/ORG_D_Detail_CardsWrapper"

/* 
Should have:
  * Title → string
  * Is toggable → Boolean
  * Icon → Boolean
  * custom icon → SVG
  * Children → ReactElement
*/

type IconToToggle_Type = {
  img?: StaticImageData
  svg?: FunctionComponent<SVGProps<SVGSVGElement>>
}

export type IconToToggleShouldRotate = boolean

export type ToggleCustomStyles = () => CSSProp

type ORG_D_Detail_CardsProps = {
  title: string
  titleTag: keyof typeof titleTags | HTMLTitleElement
  isToggable?: boolean
  toggableStateComesFromOutside?: (() => boolean) | null
  inToggableShouldDisplayIcon?: boolean
  iconToToggle?: IconToToggle_Type
  iconToToggleShouldRotate?: IconToToggleShouldRotate
  toggleCustomStyles?: ToggleCustomStyles
  children: ReactElement
}

const titleTags = {
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
}

export const ORG_D_Detail_Cards = ({
  title = "Title Component",
  titleTag = "H2",
  isToggable = false,
  toggableStateComesFromOutside = null,
  inToggableShouldDisplayIcon = false,
  iconToToggle = {
    img: ArrowUp,
  },
  iconToToggleShouldRotate = false,
  toggleCustomStyles,
  children,
}: ORG_D_Detail_CardsProps) => {
  const TitleTag = useMemo(() => {
    return titleTags[`${titleTag}`]
  }, [])

  return (
    <ORG_D_Detail_CardsWrapper
      iconToToggleShouldRotate={iconToToggleShouldRotate}
      toggleCustomStyles={toggleCustomStyles}
    >
      {isToggable ? (
        <details
          open={
            toggableStateComesFromOutside
              ? toggableStateComesFromOutside()
              : true
          }
        >
          <summary tabIndex={0}>
            <TitleTag>
              {title}{" "}
              {inToggableShouldDisplayIcon && (
                <span>
                  {iconToToggle.img /* Add an alt to image */ ? (
                    <Image
                      src={iconToToggle.img}
                      alt="Icon image to toggle the component"
                    />
                  ) : (
                    iconToToggle.svg && <iconToToggle.svg />
                  )}
                </span>
              )}
            </TitleTag>
          </summary>
          <div>{children}</div>
        </details>
      ) : (
        <div>
          <TitleTag>{title}</TitleTag>

          <article>{children}</article>
        </div>
      )}
    </ORG_D_Detail_CardsWrapper>
  )
}
