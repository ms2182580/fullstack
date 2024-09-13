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
import { format_string } from "@/utils/format_string"
import { SVGProps } from "react"
import { css } from "styled-components"
import {
  Editor_Header_Row2_LI_Props,
  Editor_Header_Row2_LIWrapper,
  Editor_Header_Row2Wrapper,
} from "./styles/Editor_Header_Row2Wrapper"

/* 
!FH0
- Create this component
- https://www.figma.com/design/dQTBLDVXlAMPMI5zeAmC4b/Jill-1%2C2%2C3%2C4-(Copy)?node-id=1-7869&node-type=frame&t=QQetIBOlT8rKmrY4-0
*/

type TheSVG_Type = (props: SVGProps<SVGSVGElement>) => JSX.Element

type EditorTools_Type = {
  text?: string
  svg?: TheSVG_Type | TheSVG_Type[]
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
  },
  {
    svg: [SVG_arrow_previous, SVG_arrow_next],
    customStyles: customStylesCollection[3],
  },
  {
    svg: [SVG_text_bold, SVG_text_italic, SVG_text_underline],
    customStyles: customStylesCollection[3],
  },
  {
    text: "size",
    svg: DownArrowTinySvg,
    customStyles: customStylesCollection[2],
  },
  {
    svg: [SVG_align_left, SVG_align_center, SVG_align_right],
    customStyles: customStylesCollection[3],
  },
  {
    svg: SVG_list_bullets,
    customStyles: customStylesCollection[3],
  },
  {
    svg: [SVG_add_hyperlink, SVG_add_attachment, SVG_add_image],
    customStyles: customStylesCollection[3],
  },
  {
    svg: [SVG_translate, SVG_add_signature],
    customStyles: customStylesCollection[3],
  },
  {
    text: "view",
    svg: DownArrowTinySvg,
    customStyles: customStylesCollection[2],
  },
  {
    text: "optimize",
    customStyles: customStylesCollection[0],
  },
  {
    text: "AI Chat",
    svg: SVG_AI_Chat_Default,
    customStyles: customStylesCollection[1],
  },
]

export const Editor_Header_Row2 = () => {
  return (
    <Editor_Header_Row2Wrapper>
      <ul>
        {editorTools.map((tool, index_editorTools) => {
          const { text, svg: TheSVG = null, customStyles = null } = tool

          if (text && TheSVG === null) {
            return (
              <>
                <Editor_Header_Row2_LIWrapper
                  key={text}
                  customStyles={customStyles}
                  title={text}
                  tabIndex={0}
                >
                  {text}
                </Editor_Header_Row2_LIWrapper>
              </>
            )
          }

          if (!text && Array.isArray(TheSVG)) {
            return (
              <Editor_Header_Row2_LIWrapper
                key={index_editorTools}
                customStyles={customStyles}
              >
                {TheSVG.map((svg, index_TheSVG) => {
                  const SVG_Deep1 = svg
                  const svgName = format_string({
                    stringToFormat: SVG_Deep1.name,
                    removeSequence: "Svg",
                  }) //Remove the SVG at the beginning of the string

                  return (
                    <span title={svgName} tabIndex={0}>
                      <SVG_Deep1 key={index_TheSVG} />
                    </span>
                  )
                })}
              </Editor_Header_Row2_LIWrapper>
            )
          }

          if (text && TheSVG && !Array.isArray(TheSVG)) {
            return (
              <Editor_Header_Row2_LIWrapper
                key={text}
                customStyles={customStyles}
                title={text}
                tabIndex={0}
              >
                <span>{text}</span>
                <TheSVG />
              </Editor_Header_Row2_LIWrapper>
            )
          }
        })}
      </ul>
    </Editor_Header_Row2Wrapper>
  )
}
