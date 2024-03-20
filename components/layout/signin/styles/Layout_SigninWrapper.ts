import { PRIMARY } from "@/assets/Colors"
import styled from "styled-components"
import { defaultWidthWebsite } from "../../index/styles/DefaultWidthWebsite"

type Props = {
  isShowSidebar?: boolean
  colorBottom?: boolean
}
export const Layout_SigninWrapper = styled.div<Props>`
  ${defaultWidthWebsite()};
  display: flex;

  aside {
    width: 290px;
    min-height: 100vh;

    padding: 0px 16px;

    border-radius: 0px 24px 0px 0px;
    background: ${PRIMARY.PRIMARY_CTA};

    padding-top: 32px;

    h3 {
      margin-top: 112px;
      color: #f3f1f3;
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: 54px;
    }
    p {
      color: #f3f1f3;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
  }

  & > :nth-child(2) {
    margin-inline: auto;
    margin-top: 160px;
  }
`
