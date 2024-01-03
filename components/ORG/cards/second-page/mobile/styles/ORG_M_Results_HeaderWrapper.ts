import { NEUTRALS } from "@/assets/Colors";
import styled, { css } from "styled-components";

type Props = {
    isTypedFlow?: boolean;
};

export const ORG_M_Results_HeaderWrapper = styled.div<Props>`
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);

    & > :nth-child(2) {
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 200% */
        letter-spacing: 0.12px;
    }
    ${({ isTypedFlow }) =>
        isTypedFlow &&
        css`
            & > :nth-child(1) {
                color: ${NEUTRALS.DARK_GREY};
                font-weight: 700;
            }
        `}
`;
