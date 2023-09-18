import styled from "styled-components"
import { PRIMARY } from "../../../../../assets/Colors"

export const Breadcrumbs_DWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    :not(:last-child) {
      margin-right: 32px;
    }
  }

  & > *:not(svg) {
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      left: 0;
      height: 2px;
      left: 50%;
      bottom: 0;
      background-color: ${PRIMARY.PRIMARY_HOVER};
      transition: all linear 0.2s;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }
    
  }
  
  & > :last-child{
    font-weight: 600;
    
    &::after{
      all:unset;
    }
    
  }
`
