import styled from "styled-components"

export const SavedWrapper = styled.div`
  padding-inline: 3.5rem;

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;

    span:first-child {
      cursor: pointer;
    }
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

    small {
      color: #908395;
    }
  }
`

export const SearchBarWrapper = styled.div`
  width: 25rem !important;
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
  width: 100%;
  border-radius: 8px;
  border-collapse: separate; /* Change to separate */
  border-spacing: 0; /* Ensures no extra spacing */
  background-color: #fff;
  border: 1.5px solid #ddd;
  overflow: hidden; /* Ensures border-radius applies */

  input {
    width: 15px;
    height: 15px;
  }
`

export const TableHeaderWrapper = styled.thead`
  background-color: #f3f1f3;
  width: 100% !important;

  th:first-child {
    width: 15px;
    padding-top: 0.5rem !important;
  }
  th {
    padding-inline: 10px !important;
    text-align: left;
    background-color: #f7f7f7;
    color: #666;
    font-weight: 600;
    top: 0;
    z-index: 1;
    font-size: 0.8rem;
    color: #908395;
    div {
      display: flex;
      justify-content: start;
      gap: 1rem;
      i {
        margin-top: 0.2rem;
      }
    }
    th:last-child {
      text-align: right;
    }
  }
`

export const TableBodyWrapper = styled.tbody`
  position: relative;
  tr {
  }
  td {
    border-bottom: 1px solid #ddd;
    padding-block: 0rem;
    padding-inline: 10px !important;
    div {
      padding: 0rem !important;
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.5rem;
      color: #908395;

      span {
        font-size: 0.8rem;
      }

      small {
        border-radius: 20px;
        background-color: #f2eaf6;
        padding-inline: 0.5rem;
        padding-block: 0.25rem;
      }
    }
  }
  td:last-child {
    position: relative;
    text-align: right;
    span {
      cursor: pointer;
    }
  }
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PageNumbersWrapper = styled.div`
  display: flex;
  color: rgb(80, 80, 80);
  width: 100%;
`

export const PageButtonsWrapper = styled.div`
  width: 100px !important;
  margin-right: 1rem;
  cursor: pointer;
  span {
    font-size: 20px;
    color: rgb(80, 80, 80);
  }
  button {
    background: #006987 !important;
    color: #fff !important;
    border: none;
    padding: 8px 12px;
    border-radius: 5px;
    cursor: pointer;
  }
`

export const ModalContainerWrapper = styled.div`
  position: absolute;
  top: 40px; // Adjust as needed
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
