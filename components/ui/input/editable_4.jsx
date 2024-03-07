import styled from "styled-components"

const StyledContainer = styled.div`
  position: relative;
  align-items: center;
  width: 100%;
  border-radius: 8 8 0 0;
  background-color: #eff2f7;

  display: flex;

  & > * {
    display: inline;
  }
`

const StyledInnerLabel = styled.p`
  /* position: sticky; */
  top: 3px;
  color: #b6bbc6;

  &.prefix {
    /* max-width: 100px; */
    position: sticky;
    left: 0;
    width: fit-content;
    padding-left: 16px;
  }
  &.suffix {
    max-width: fit-content;
    padding-right: 16px;
    right: 0;
  }
`

const StyledInput = styled.input`
  width: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 2;
  /* padding-right: 100px; */
  /* padding-left: 100px; */
`

export const InputWithInnerLabel = () => {
  return (
    <StyledContainer>
      <StyledInnerLabel className="prefix">
        Left Label Left Label Left Label Left Label Left Label Left Label Left
        Label Left Label Left Label Left Label Left Label Left Label Left Label
        Left Label Left Label Left Label Left Label Left Label Left Label Left
        Label Left Label Left Label{" "}
      </StyledInnerLabel>{" "}
      <StyledInput type="text" />
      <StyledInnerLabel className="suffix"> Right Label</StyledInnerLabel>
    </StyledContainer>
  )
}
