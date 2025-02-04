// import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
// import styled from "styled-components"

// export const INDEX_NewsearchWrapper = styled.div`
//   display: grid;
//   gap: 16px;

//   border: 2px solid black;

//   & > div {
//     display: flex;

//     gap: 16px;

//     & > :nth-child(1) {
//       ${reusableButton()}
//     }

//     & > :nth-child(2) {
//       ${reusableButton({ secondary: true })}
//     }

//     a {
//       padding: 8px 16px;
//     }
//   }
// `


import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #E6E780E3, #FFFFFF);
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
`

export const Extradiv = styled.div`
  min-height: 100vh; 
  background-image: url('/background/newSerchImage.png');
  background-size: 95%; 
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`

export const Navigation = styled.nav`
  padding: 1rem 2rem;
  
  a {
    color: #333;
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Breadcrumb = styled.span`
  color: #666;
  font-size: 0.9rem;
`

export const MainContent = styled.main`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 2rem;
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  max-width: 800px;
  margin: 0rem auto;
  text-align: center;
  line-height: 1.2;
`

export const SearchContainer = styled.div`
  background: white;
  margin-top:4rem;
  padding-top:1rem;
  padding-bottom:8px;
  padding-right:2rem;
  padding-left:2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 83%;
`

export const SearchLabel = styled.label`
  display: block;
  fontSize:16px;
  font-weight:400;
  margin-bottom: 0.5rem;
  color: #3A343C;
  margin-bottom:5px;
`

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 40%;
  left: 10px;
  transform: translateY(-50%); /* Vertically center the icon */
  pointer-events: none; /* So the icon doesn't interfere with input field */
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  
  margin-bottom: 1rem;
  font-size: 1rem;
  background-color: white;
  &::placeholder {
    color: #999;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`

export const Button = styled.button<{ primary?: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${(props) =>
    props.primary
      ? `
    background-color: #008080;
    color: white;
    border: none;
    &:hover {
      background-color: #006666;
    }
  `
      : `
    background-color: white;
    color: #008080;
    border: 1px solid #008080;
    
    &:hover {
      background-color: #f0f0f0;
    }
  `}
`

