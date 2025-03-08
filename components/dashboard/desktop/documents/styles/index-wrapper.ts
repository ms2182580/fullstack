import styled from 'styled-components'

export const SavedWrapper = styled.div`
  padding-inline: 3.5rem;

  & > :nth-child(1) {
    margin-top: 1rem;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-block: 1rem;

    h2 {
      color: #908395;
      font-size: 2rem;
      font-weight: 600;
    }

    button {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      border: 2px solid #006987;
      color: #006987;
      background: none;
      border-radius: 7px;

      &:hover {
        background-color: #e0e0e0;
      }
    }
  }

  small {
    color: #908395;
  }
`
export const SearchBarWrapper = styled.div`
  width: 25rem;
  margin-bottom: 20px;
  border: 1.5px solid #908395;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  input {
    border-radius: 8px;
    width: 100%;
    border: none;

    &:focus {
      outline: none;
      box-shadow: none;
      border: none;
    }
  }
`

export const TableWrapper = styled.table`
  padding-inline: 3.5rem;
  width: 100%;
`
export const StyleTableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid var(--Neutrals-Background-light, #d3ced5);
`

// export const TableHeaderWrapper = styled.thead`
//   background-color: #f3f1f3;
//   border-bottom: 2px solid #908395;
//   width: 100%;

//   & > tr {
//     // background-color: red;
//     color: #908395;
//     padding: 10px;
//     text-align: left;
//     width: 100%;
//     display: flex;
//     justify-content: space-between;

//     & > th > div > div {
//       display: flex;

//       justify-content: center;
//       align-items: center;
//       gap: 15px;
//     }
//   }
// `

export const TableHeaderWrapper = styled.thead`
  color: green;
  width: 100%;
  border-radius: 8px !important;
  border-bottom: 1px solid #d3ced5;

  background-color: #f3f1f3;
`
export const HeaderRowWrapper = styled.tr`
  background-color: F3F1F3;
  height: 56px;
  width: 100%;
`

export const HeaderHeadWrapper = styled.th`
  padding: 10px;

  & > div {
    color: #908395;
    display: flex;
    align-items: center;
    gap: 15px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
  }
`
export const TableBodyWrapper = styled.tbody`
  width: 100%;
  border-radius: 10px;
`

export const TableRow = styled.tr`
  color: white;
  width: 100% !important;
  height: 56px;

  // border: 1px solid green !important;
`

export const TableCell = styled.td`
  color: var(--Neutrals-Text-Icons-caption, #908395);

  & > div {
    font-family: Poppins;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0px;
    color: var(--Neutrals-Text-Icons-caption, #908395);
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 16px;

  margin-bottom: 25px;
`

export const PageNumbersWrapper = styled.div`
  display: flex;
  color: rgb(80, 80, 80);
  width: 100%;
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0px;
`

export const PageButtonsWrapper = styled.div`
  width: 100px !important;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  span {
    font-size: 20px;

    color: red;
  }
  button {
    background: #006987 !important;
    color: #fff !important;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
    width: 44px;
    height: 44px;

    border-radius: 8px;
    padding: 10px;
  }
`

export const ModalContainerWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 0%;
  width: 240px !important;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ddd;
  z-index: 1;
  display: flex;
  flex-direction: column;

  small {
    border: none;
    height: 4px;
    background-color: red !important;
  }
`

export const ModalItemWrapper = styled.div`
  display: flex;
  align-items: start !important;
  justify-content: start !important;
  gap: 0.5rem !important;
  color: #908395 !important;
  margin-bottom: 0 !important;
  padding: 0px 16px !important;
  font-size: 14px;
  color: #555;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin: 0 !important;

  span {
    align-self: center;
  }
  &:hover {
    background-color: #f5f5f5;
  }

  &.danger {
    color: #e74c3c;

    &:hover {
      background-color: #ffe6e6;
    }
  }

  &:last-child {
    border-top: 1px solid #ddd;
  }
`

export const IconWrapper = styled.div`
  font-size: 16px;
  width: 20px !important;
  color: inherit;
`
export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  align-items: center;
  padding: 20px;
  margin-top: 40px;
  margin-bottom: 50px;
  flex-direction: column;
  & > :nth-child(1) {
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0px;
    color: #1d1a1e;
  }
  & > :nth-child(2) {
    font-family: Poppins;
    & > :nth-child(1) {
      font-family: Poppins;
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      letter-spacing: 0%;
      text-decoration: underline;
      text-decoration-style: solid;
      text-decoration-offset: 0%;
      text-decoration-thickness: 0%;
    }
  }
`
