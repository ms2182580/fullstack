import { NEUTRALS } from "@/assets/Colors"
import { DownArrowTinySvg } from "@/assets/icons"
import SVG_AI_Chat_Default from "@/assets/icons/ai_chat_default.svg"
import SVG_add_attachment from "@/assets/icons/editor/add_attachment.svg"
import SVG_add_hyperlink from "@/assets/icons/editor/add_hyperlink.svg"
import SVG_add_image from "@/assets/icons/editor/add_image.svg"
import SVG_add_signature from "@/assets/icons/editor/add_signature.svg"
import SVG_align_center from "@/assets/icons/editor/align_center.svg"
import SVG_align_left from "@/assets/icons/editor/align_left.svg"
import SVG_align_right from "@/assets/icons/editor/align_right.svg"
import SVG_arrow_next from "@/assets/icons/editor/arrow_next.svg"
import SVG_arrow_previous from "@/assets/icons/editor/arrow_previous.svg"
import SVG_list_bullets from "@/assets/icons/editor/list_bullets.svg"
import SVG_text_bold from "@/assets/icons/editor/text_bold.svg"
import SVG_text_italic from "@/assets/icons/editor/text_italic.svg"
import SVG_text_underline from "@/assets/icons/editor/text_underline.svg"
import SVG_translate from "@/assets/icons/editor/translate.svg"
import { SVGProps } from "react"
import { css } from "styled-components"
import {
  Editor_Header_Row2_LI_Props,
  Editor_Header_Row2_LIWrapper,
  Editor_Header_Row2Wrapper,
} from "./styles/Editor_Header_Row2Wrapper"

/* 
!FH1
- Create this component
- https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-7869&node-type=frame&t=QQetIBOlT8rKmrY4-0
*/

type TheSVG_Type = (props: SVGProps<SVGSVGElement>) => JSX.Element
type TheSVGStructure = {
  svgToUI: TheSVG_Type
  svgNameToTitle: string
}

type EditorTools_Type = {
  text?: string
  customTitle?: string
  svg?: TheSVGStructure | TheSVGStructure[]
  customStyles?: Editor_Header_Row2_LI_Props["customStyles"]
}[]

const customStylesCollection = {
  0: () => css`
    background-color: ${NEUTRALS.OFF_WHITE_2};

    display: flex;
    justify-content: center;

    gap: 12px;

    padding-block: 5px;
    padding-inline: clamp(4px, 3.9vw - 36px, 20px);

    border-radius: 8px;
  `,
  1: () => css`
    background-color: ${NEUTRALS.OFF_WHITE_2};

    display: flex;
    justify-content: center;

    padding-block: 5px;
    padding-inline: clamp(4px, 2vw - 16px, 12px);

    border-radius: 8px;

    & > :nth-child(1) {
      order: 1;
    }
  `,
  2: () => css`
    display: flex;
    align-items: center;

    border: 1px solid ${NEUTRALS.DARK_GREY_3};

    padding: 3px 8px;

    border-radius: 8px;
  `,
}

const editorTools: EditorTools_Type = [
  {
    text: "file",
    customTitle: "upload a file | ctrl/cmd + o",
  },
  {
    svg: [
      {
        svgToUI: SVG_arrow_previous,
        svgNameToTitle: "previous | ctrl/cmd + z ",
      },
      { svgToUI: SVG_arrow_next, svgNameToTitle: "next | ctrl/cmd + y" },
    ],
    customStyles: customStylesCollection[3],
  },
  {
    svg: [
      {
        svgToUI: SVG_text_bold,
        svgNameToTitle: "bold the text | ctrl/cmd + b",
      },
      {
        svgToUI: SVG_text_italic,
        svgNameToTitle: "italic the text | ctrl/cmd + i",
      },
      {
        svgToUI: SVG_text_underline,
        svgNameToTitle: "underline the text | ctrl/cmd + u",
      },
    ],
    customStyles: customStylesCollection[3],
  },
  {
    text: "size",
    svg: {
      svgToUI: DownArrowTinySvg,
      svgNameToTitle: "change font size | ctrl/cmd + s",
    },
    customStyles: customStylesCollection[2],
  },
  {
    svg: [
      {
        svgToUI: SVG_align_left,
        svgNameToTitle: "align to left | ctrl/cmd + j",
      },
      {
        svgToUI: SVG_align_center,
        svgNameToTitle: "align to center | ctrl/cmd + k",
      },
      {
        svgToUI: SVG_align_right,
        svgNameToTitle: "align to right | ctrl/cmd + l",
      },
    ],
    customStyles: customStylesCollection[3],
  },
  {
    svg: {
      svgToUI: SVG_list_bullets,
      svgNameToTitle: "list bullets | ctrl/cmd + a",
    },
    customStyles: customStylesCollection[3],
  },
  {
    svg: [
      {
        svgToUI: SVG_add_hyperlink,
        svgNameToTitle: "add hyperlink | ctrl/cmd + d",
      },
      {
        svgToUI: SVG_add_attachment,
        svgNameToTitle: "add attachment | ctrl/cmd + f",
      },
      { svgToUI: SVG_add_image, svgNameToTitle: "add image | ctrl/cmd + g" },
    ],
    customStyles: customStylesCollection[3],
  },
  {
    svg: [
      {
        svgToUI: SVG_add_signature,
        svgNameToTitle: "add signature | ctrl/cmd + r",
      },
      { svgToUI: SVG_translate, svgNameToTitle: "translate | ctrl/cmd + t" },
    ],
    customStyles: customStylesCollection[3],
  },
  {
    text: "view",
    svg: {
      svgToUI: DownArrowTinySvg,
      svgNameToTitle: "toggle sections | ctrl/cmd + w",
    },
    customStyles: customStylesCollection[2],
  },
  {
    text: "optimize",
    customStyles: customStylesCollection[0],
  },
  {
    text: "AI Chat",
    svg: {
      svgToUI: SVG_AI_Chat_Default,
      svgNameToTitle: "Chat with AI | f1",
    },
    customStyles: customStylesCollection[1],
  },
]

export const Editor_Header_Row2 = () => {
  return (
    <Editor_Header_Row2Wrapper>
      <ul>
        {editorTools.map((tool, index_editorTools) => {
          const {
            text,
            customTitle = null,
            svg: TheSVG = null,
            customStyles = null,
          } = tool

          if (text && TheSVG === null) {
            return (
              <Editor_Header_Row2_LIWrapper
                key={text}
                title={customTitle || text}
                data-content={customTitle || text}
                customStyles={customStyles}
                tabIndex={0}
              >
                {text}
              </Editor_Header_Row2_LIWrapper>
            )
          }

          if (!text && TheSVG && Array.isArray(TheSVG)) {
            return (
              <Editor_Header_Row2_LIWrapper
                key={index_editorTools}
                customStyles={customStyles}
              >
                {TheSVG.map(({ svgToUI, svgNameToTitle }) => {
                  const SVG_Deep1 = svgToUI

                  return (
                    <span
                      key={svgNameToTitle}
                      title={svgNameToTitle}
                      data-content={svgNameToTitle}
                      tabIndex={0}
                    >
                      <SVG_Deep1 />
                    </span>
                  )
                })}
              </Editor_Header_Row2_LIWrapper>
            )
          }

          if (
            text &&
            TheSVG &&
            !Array.isArray(TheSVG) &&
            typeof TheSVG === "object" &&
            TheSVG !== null
          ) {
            const { svgToUI, svgNameToTitle } = TheSVG

            const TheSVGToUI = svgToUI

            return (
              <Editor_Header_Row2_LIWrapper
                key={text}
                title={svgNameToTitle}
                data-content={svgNameToTitle}
                customStyles={customStyles}
                tabIndex={0}
              >
                <span>{text}</span>
                <TheSVGToUI />
              </Editor_Header_Row2_LIWrapper>
            )
          }
        })}
      </ul>
    </Editor_Header_Row2Wrapper>
  )
}
