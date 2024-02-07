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
    .ar_divider {
      width: 100%;
      padding: 32px;
    }

    .inner_content {
      width: 880px;
      // height: 834px;
      padding: 16px;
      border: 1px solid #d3ced5;
      background: #f2eaf6;
      .sec_header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .sec_title {
          font-family: Poppins;
          font-size: 28px;
          font-weight: 600;
          line-height: 42px;
          letter-spacing: 0px;
          text-align: left;
          color: #1d1a1e;
        }
      }
      .ride_sec {
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
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
export const Ride_Card = styled.div`
  width: 848px;
  height: 240px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #d3ced5;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0px;
      text-align: left;
      color: #150b19;
    }
    .des_wrapper {
      display: flex;
      align-items: center;
      gap: 24px;
      .desc {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #3a343c;
      }
    }
  }
  .card_body {
    padding: 16px;
    margin-top: 8px;
    .features {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .ft_title {
        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #3a343c;
      }
      .ft_desc {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
        color: #3a343c;
      }
    }
    .action_steps {
      margin-top: 16px;
      .as_header {
        display: flex;
        align-items: center;
        gap: 8px;
        .as_title {
          font-family: Poppins;
          font-size: 14px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 0px;
          text-align: left;
          text-decoration: underline;
          color: #3a343c;
        }
      }
      .as_list {
        padding-left: 16px;
        .as_item {
          font-family: Poppins;
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0px;
          text-align: left;
          color: #3a343c;
        }
      }
    }
  }
`
export const Action_Card = styled.div`
  width: 848px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #d3ced5;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0px;
      text-align: left;
      color: #150b19;
    }
  }
  .card_body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .inner_card {
      width: 784px;
      height: 75px;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      gap: 40px;
      border: 1px solid #d3ced5;
      .in_title {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 600;
        line-height: 27px;
        letter-spacing: 0px;
        text-align: left;
        color: #1d1a1e;
      }
      .in_desc {
        font-family: Poppins;
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0px;
        text-align: left;
        color: #746779;
      }
    }
  }
`

export const Support_Sec = styled.div`
  width: 848px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #d3ced5;
  .card_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-family: Poppins;
      font-size: 20px;
      font-weight: 600;
      line-height: 30px;
      letter-spacing: 0px;
      text-align: left;
      color: #150b19;
    }
  }
  .card_body {
    display: flex;
    gap: 32px;
    justify-content: center;
    margin: 16px 0px;
  }
  .emr_card_body {
    display: flex;
    gap: 32px;
    justify-content: space-between;
    margin: 16px 0px;

    .bd_label {
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      color: #3a343c;
    }
    .bd_desc {
      font-family: Poppins;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0px;
      text-align: left;
      color: #3a343c;
    }
  }
  .meisc_body {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .meisc_color_card {
      width: 796px;
      height: 113px;
      padding: 16px;
      border-radius: 12px;
      background-color: #f3f1f3;
      //styleName: Body/paragraph;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d1a1e;
    }
    .meisc_simple_card {
      width: 796px;
      height: 113px;
      padding: 16px;
      border-radius: 12px;
      border: 2px solid #908395;
      //styleName: Body/paragraph;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 27px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d1a1e;
    }
    .pdf_view {
      display: flex;
      flex-direction: column;
      align-items: center;
      .file_name {
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0.02em;
        text-align: left;
        text-decoration: underline;
        color: #000000;
      }
      .pdf_content {
        margin-top: 24px;
        width: 592.73px;
        height: 695.22px;
        border: 0.7px solid #f1f1f5;
        padding: 80px 45px 45px 45px;
        display: flex;
        flex-direction: column;
        gap: 24px;

        font-family: Poppins;
        font-size: 11px;
        font-weight: 400;
        line-height: 17px;
        letter-spacing: 0.06991198658943176px;
        text-align: left;
        color: #333333;
      }
    }
  }
`
export const Item_Card = styled.div`
  display: flex;
  max-width: 235px;
  flex-direction: column;
  overflow: hidden;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  .card-header {
    position: relative;
    img {
      width: 100%;
    }
    .header-label {
      position: absolute;
      right: 16px;
      top: 62px;
      display: flex;
      width: 100px;
      height: 30px;
      padding: 4px 8px;
      align-items: center;
      gap: 8px;
      border-radius: 8px;
      background: #ffea80;
      svg {
        margin-top: 5px;
      }
      .label-text {
        color: #3a343c;
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
  .item_card_body {
    padding: 24px;
    .title {
      font-family: Poppins;
      font-size: 16px;
      font-weight: 600;
      line-height: 27px;
      letter-spacing: 0px;
      text-align: left;
      color: #1d1a1e;
    }
    .desc {
      margin-top: 4px;
      font-family: Poppins;
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: left;
      color: #746779;
    }
  }
`
