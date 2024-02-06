import styled from "styled-components"

export const ViewPlan_Wrapper = styled.div`
  display: flex;

  .chat_card {
    position: relative;
    margin: 24px;
    max-width: 350px;
    height: 706.68px;
    padding-top: 16px;
    background-color: #ffffff;
    border: 1px solid #d3ced5;
    border-radius: 5px;
    padding: 17px;

    .card_header {
      display: flex;
      justify-content: space-between;
      .card_header_title {
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        color: #1d1a1e;
      }
      .card_header_subtitle {
        font-size: 16px;
        font-weight: 600;
        line-height: 27px;
        color: #1d1a1e;
      }
    }
    .card_body {
      margin-top: 24px;
      .body_heading {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: left;
        color: #1d1a1e;
      }
      .body_des {
        margin-top: 16px;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: left;
        color: #3a343c;
      }
    }
    .card_footer {
      margin-top: 24px;
    }
  }
  .content_tabs {
    margin-top: 24px;
    min-height: 100vh;
    width: 100%;
    padding: 72px 64px;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #d3ced5;

    .inner_content {
      width: 880px;
      height: 834px;
      padding: 16px;
      border: 1px solid #d3ced5;
      background: #f2eaf6;
      .profile {
        display: flex;
        gap: 16px;
        align-items: center;
      }
      .card_container {
        margin-top: 16px;
        display: flex;
        flex-wrap: nowrap;
        gap: 16px;
      }
    }
  }
`
export const Profile_Card = styled.div`
  width: 356px;
  height: 201px;
  padding: 47px 24px;
  background-color: #fff;
  border: 1px solid #d3ced5;
  box-shadow: 0px 0px 10px 0px #0000000a;

  .inner_card {
    display: flex;
    gap: 24px;
    .img_sec {
      position: relative;
      width: 110px;
      background-color: #f3f1f3;
      height: 106px;
      padding: 40px 0px 34px 0px;
      border-radius: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      .add_icon {
        position: absolute;
        bottom: 0px;
        right: -5px;
      }
    }
    .text_sec {
      display: flex;
      flex-direction: column;
      .title {
        font-family: Poppins;
        font-size: 20px;
        font-weight: 600;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
        color: #1d1a1e;
      }
      .inner_wrapper {
        margin-top: 8px;
        .sec_row {
          display: flex;
          align-items: center;
          gap: 12px;
          .first_col {
            font-family: Poppins;
            font-size: 12px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
            color: #3a343c;
          }
          .second_col {
            font-family: Poppins;
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0px;
            text-align: left;
            color: #3a343c;
            white-space: nowrap;
          }
        }
      }
    }
  }
`
interface StyledDivProps {
  height?: string
}

export const Text_Card = styled.div<StyledDivProps>`
  width: 100%;
  min-height: ${(props) => (props.height ? props.height : "285px")};
  padding: 24px;
  box-shadow: 0px 0px 10px 0px #0000000a;
  border: 1px solid #d3ced5;
  background-color: #ffffff;
  .tex_card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d1a1e;
    }
  }
  .desc {
    margin-top: 10px;
    p {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #3a343c;
    }
  }
`
