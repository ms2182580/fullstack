import styled from "styled-components";

export const ORG_M_Results_FilterSortbyHeaderWrapper = styled.div`
    margin-bottom: ${(x) => (x.ORGShowFullMapFilter ? `112px` : `48px`)};
    padding-inline: clamp(16px, calc(10vw - 80px), 96px);

    & > :nth-child(1) {
        display: flex;
        justify-content: flex-end;
    }
    & > :nth-child(2) {
        display: grid;
        margin-top: 10px;
        grid-template-columns: auto auto auto auto;
    }
`;
