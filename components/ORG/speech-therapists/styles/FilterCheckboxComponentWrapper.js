import styled from "styled-components";

const FilterCheckboxComponentWrapper = styled.div`


& > div:nth-child(1), & > div:nth-child(2){
  margin-top: 20px;
  display: flex;
  border-bottom: 1px solid black;
  justify-content: space-between;
}
 
 & > ul {
  list-style: none;
 }
 
`

export default FilterCheckboxComponentWrapper