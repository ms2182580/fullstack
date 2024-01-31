import styled from "styled-components"

export const SideBarWrapper = styled.div`
  display: flex;
  width: 64px;
  height: 1024px;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
  gap: 55px;
  border-right: 1px solid #d3ced5;
  background: #fff;
  .sidebar-logo {
    display: flex;
    height: 77px;
    padding-top: 16px;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
  .logo-text {
    color: #3a343c;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  .sidbar-menu {
    display: flex;
    width: 64px;
    flex-direction: column;
    gap: 16px;
    .item-active {
      display: flex;
      width: 64px;
      flex-direction: column;
      align-items: center;
      padding: 8px 0px;
      align-items: center;
      background: #e3d1eb;
      .item-text {
        color: #6e3a82;
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
    }
    .item {
      display: flex;
      width: 64px;
      flex-direction: column;
      align-items: center;
      padding: 8px 0px;
      align-items: center;
      .item-text {
        color: #6e3a82;
        text-align: center;
        font-family: Poppins;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
      }
      &:hover {
        cursor: pointer;
        background: #e3d1eb;
      }
    }
  }
`
