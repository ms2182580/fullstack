import styled from "styled-components"

export const SaveResource_MainWrapper = styled.div`
  padding-top: 80px;
  padding-left: 128px;

  &.heading {
    color: #312138;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &.description {
    margin-top: 8px;
    color: #312138;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px; /* 168.75% */
  }
  .search-content {
    margin-top: 32px;
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .body-content {
    margin-top: 69px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }
`
// will be moved to common comonents
export const SaveResource_SearchDiv = styled.div`
  display: flex;
  width: 432px;
  padding: 12px 16px;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid #908395;
  background: #fff;
  .search-input {
    width: 100%;
    outline: none;
    border: none;
  }
`
export const SaveResource_Filter = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid #908395;
  background: #fff;
  z-index: 99;

  .filter-menu {
    display: flex;
    min-width: 130px;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    :hover {
      cursor: pointer;
    }
    .text {
      color: #3a343c;
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
  }
  .filter-box {
    min-width: 340px;
    margin-top: 20px;

    position: absolute;
    top: 100%;
    display: inline-flex;
    padding: 32px;
    flex-direction: column;
    gap: 32px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 0px 5px 0px rgba(123, 123, 123, 0.25);

    .filter-item {
      display: flex;
      width: 248px;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      .filter-text {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
      }
      .filter-input {
        input {
          display: inline-block;
          padding: 0 0 0 0px;
          background: red !important;
          height: 32px;
          width: 32px;
          background-size: 50%;
          &:checked {
            background: red !important;
            height: 32px;
            width: 32px;
            display: inline-block;
            background-size: 50%;
          }
        }
      }
    }
    .filter-buttons {
      display: flex;
      gap: 32px;
    }
  }
`
export const CheckBoxContainer = styled.div`
  /* Styles for unchecked checkBox button */
  input:not(:checked) + .checkBox-checkmark {
    background-image: url("./assets/unchecked.svg") !important;
    /* Replace with the URL of your image */
    background-size: cover;
    width: 20px;
    height: 20px;
  }

  /* Styles for checked checkBox button */
  input:checked + .checkBox-checkmark {
    background-image: url("./assets/checked.svg") !important;
    /* Replace with the URL of your image */
    background-size: cover;
    width: 24px;
    height: 24px;
  }
`
export const SaveResource_Card = styled.div`
  display: flex;
  min-width: 400px;
  flex-direction: column;
  overflow: hidden;
  gap: 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  .card-header {
    position: relative;
    img {
      width: 100%;
    }
    .header-label {
      position: absolute;
      right: 16px;
      top: 164px;
      display: flex;
      width: 100px;
      height: 30px;
      padding: 4px 8px;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
      background: #ffea80;
      svg {
        margin-top: 5px;
      }
      .label-text {
        color: #3a343c;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
  .card-body {
    display: flex;
    padding: 24px;
    flex-direction: column;
    gap: 24px;

    .card-text {
      max-width: 350px;
      .title {
        overflow: hidden;
        white-space: nowrap;
        color: #1d1a1e;
        text-overflow: ellipsis;
        font-family: Poppins;
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
      .description {
        color: #3a343c;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
      }
    }
    .country {
      color: #6c6c6c;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 27px;
    }
    .card-footer {
      display: flex;
      gap: 16px;
      span {
        white-space: nowrap;
      }
    }
  }
`
