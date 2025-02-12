import { reusableButton } from "@/components/ui/buttons/general/styles/ButtonStyled"
import styled from "styled-components"

export const ContainerWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #e6e780e3, #ffffff);
  position: relative;
  overflow: hidden;
  padding-bottom: 100px;
`

export const ExtradivWrapper = styled.div`
  min-height: 100vh;
  background-image: url("/background/newSerchImage.png");
  background-size: 95%;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`

export const NavigationWrapper = styled.nav`
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

export const MainContentWrapper = styled.main`
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

export const TitleWrapper = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  max-width: 800px;
  margin: 0rem auto;
  text-align: center;
  line-height: 1.2;
`

export const SearchContainerWrapper = styled.div`
  background: white;
  margin-top: 4rem;
  padding-top: 1rem;
  padding-bottom: 8px;
  padding-right: 2rem;
  padding-left: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 83%;
`

export const SearchLabel = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #3a343c;
  margin-bottom: 5px;
`

// export const SearchInputWrapper = styled.div`
//   position: relative;
//   width: 100%;
// `

// export const SearchIconWrapper = styled.span`
//   position: absolute;
//   top: 40%;
//   left: 10px;
//   transform: translateY(-50%); /* Vertically center the icon */
//   pointer-events: none; /* So the icon doesn't interfere with input field */
// `

// export const SearchInput = styled.input`
//   width: 100%;
//   padding: 0.75rem 2rem 0.75rem 2.5rem;
//   border: 1px solid #ddd;
//   border-radius: 0.5rem;
//   margin-bottom: 1rem;
//   font-size: 1rem;
//   background-color: white;
//   &::placeholder {
//     color: #999;
//   }

//   &:focus {
//     box-shadow: none;
//     outline: none;
//     border: 1.5px solid #ddd;
//   }
// `

export const SearchInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%); /* Vertically center the icon */
  z-index: 1; /* Ensure the icon is above the input */
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 2.5rem; /* Adjust padding to make space for the icon */
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  background-color: white;
  position: relative; /* Ensure the input is positioned correctly */
  z-index: 2; /* Ensure the input is above the icon */

  &::placeholder {
    color: #999;
  }

  &:focus {
    box-shadow: none;
    outline: none;
    border: 1.5px solid #ddd;
  }
`

export const ButtonContainerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`

export const ButtonPrimaryWrapper = styled.button`
  cursor: pointer;
  ${reusableButton({ secondary: false })}
`
export const ButtonSecondaryWrapper = styled.button`
  cursor: pointer;
  ${reusableButton({ secondary: true })}
`
