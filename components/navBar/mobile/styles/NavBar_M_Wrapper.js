import { PRIMARY, NEUTRALS } from "@/assets/Colors"
import styled from "styled-components"

export const NavBar_M_Wrapper = styled.div`
    overflow: hidden;
    position: ${({ mustShowFiltersMobile }) =>
      mustShowFiltersMobile ? `fixed` : `relative`};
    visibility: ${({ mustShowFiltersMobile }) =>
      mustShowFiltersMobile ? `hidden` : `visible`};
    background: ${NEUTRALS.OFF_WHITE}
    height: 55px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: between;
    padding: 15px 13px;
    gap: 16px;

    & > :nth-child(1) {
        cursor: pointer;
        color: ${PRIMARY.PRIMARY_LOGO};
        font-weight: 800;
    }

    & > :nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top: -2.25px;
        
        & > :nth-child(1){
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
            & > :nth-child(1) {
                color: ${PRIMARY.PRIMARY_LOGO};
                margin: 10px 2px;
                width:130px;
            }
            & > :nth-child(2) {
                margin-top: -16px;
                & > * {
                    fill: ${PRIMARY.PRIMARY_LOGO};
                }
            }
        }
       
    }
`
