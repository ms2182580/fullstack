import styled from "styled-components"

export const First_Step_Wrapper = styled.div`
  padding: 24px 16px;
  .step_header {
    display: flex;
    justify-content: space-between;
    .step_header_title {
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      color: #1d1a1e;
    }
    .step_header_subtitle {
      font-size: 16px;
      font-weight: 600;
      line-height: 27px;
      color: #1d1a1e;
    }
  }
  .step_body{
      .step_description {
        padding-top: 16px;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        color: #312138;
      }
      .body_content{
        display:flex;
        flex-direction: column;
        gap:16px;
        padding-top: 16px;

            .step_card{
              padding: 16px;
              display:flex;
              justify-content: space-between;
              align-items: center;
              box-shadow: 0px 0px 4px 0px #90839580;
              border-radius:8px;
              .card_content {
                display:flex;
                gap:16px;
              
                .card_text{
                  display:flex;
                  flex-direction: column;
                  gap:8px;
                  .card_title{
                    
                    
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 27px;
                    color: #1D1A1E;
      
                  }
                  .card_subtitle{
                    
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #3A343C;
      
                  }
                  .card_des{
                    font-family: Poppins;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 20px;
                    color: #746779;
      
                  }
                }
              }
            }
            .end_link{
              a{
                display:flex;
                gap:10px;
              }
            }
      }
     
  
 
  }

}
`
