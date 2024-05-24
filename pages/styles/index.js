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
  scrollbar-gutter: stable;
  
  /* 
  * This property «overflow-x: hidden;» was added because a slight overflow on x axis when the browser is close to 1025px. I think the overflow is created by the navigation bar 
  * The problem with «overflow-x: hidden;» is that disable the position:sticky; of the map
   */
  /* overflow-x: hidden; */
  
}

img,
video,
svg {
  display: block;
  max-width: 100%;
  height: auto;
  
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

p, span, li, a {
  text-wrap: pretty;
}



code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}



`
export default GlobalStyle
