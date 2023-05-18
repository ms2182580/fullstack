import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  
  /* outline: 2px solid crimson; */
  
  
}


*:focus-visible {
  outline: 4px solid #64AFFB;
  border-radius: 8px;
}


html,body{
  max-width: 100vw;
  font-size: 16px;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}



`
export default GlobalStyle
