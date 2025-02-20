import styled from "styled-components"

export const BreadcrumbNav = styled.nav`
  font-size: 14px;
  color: #3A343C;
  margin-top: 30px;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BreadcrumbList = styled.ul`
  list-style: none;
  display: flex;
  gap: 5px;
  margin: 0;
  padding: 0;
`

export const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
`

export const BreadcrumbButton = styled.button`
  background: none;
  border: none;
  color: #000;
  cursor: pointer;
`

export const Separator = styled.span`
  margin: 0 5px;
`
