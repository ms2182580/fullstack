import { createGlobalStyle } from "styled-components"
// import Extrabold from "../../assets/Fonts/Poppins/Poppins-ExtraBold.ttf"
// import Regular from "../../assets/Fonts/Poppins/Poppins-Regular.ttf"
// import Semibold from "../../assets/Fonts/Poppins/Poppins-SemiBold.ttf"

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

html{
  font-size: 16px;
}

body {
  /* background-color: #282c34; */
  /* background-color: hsl(37.9, 65.5%, 94.3%); */
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}



`
export default GlobalStyle