import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  
}


*:focus-visible {
  outline: 4px solid #64AFFB;
  border-radius: 8px;
}


html,body{
  font-size: 16px;
  margin-inline:auto;
  
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}



`
export default GlobalStyle
