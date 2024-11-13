import styled from "styled-components"

export const INDEX_D_CarePlan_TabsWrapper = styled.div`
  /*This padding is here because the component "INDEX_D_CarePlanWrapper" have a "overflow-x: hidden;" on the "grid-area: tabs". This property is there to prevent the overflow of the inner bar. Now, the thing is, the focus have some styles on focus, and with the "overflow-x: hidden;" this styles look bad. So, with this little amount of padding it have space to show it properly    */
  padding-inline: 4px;
  padding-top: 4px;
`
