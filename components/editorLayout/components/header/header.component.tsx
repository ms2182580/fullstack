import { Header_Editor_Options, Header_Wrapper } from "./header.style"
import { ButtonSmall } from "@/components/ui/buttons/general"

export const EditorHeader = () => {
  return (
    <>
      <Header_Wrapper>
        <div className="title-area">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 8C0 3.58172 3.58172 0 8 0H36C40.4183 0 44 3.58172 44 8V36C44 40.4183 40.4183 44 36 44H8C3.58172 44 0 40.4183 0 36V8Z"
              fill="white"
            />
            <path
              d="M30.5153 19.7268L23.0153 12.6506C23.0116 12.6474 23.0082 12.6439 23.005 12.6403C22.7289 12.3892 22.369 12.25 21.9958 12.25C21.6225 12.25 21.2627 12.3892 20.9866 12.6403L20.9763 12.6506L13.4847 19.7268C13.3319 19.8674 13.2099 20.0381 13.1265 20.2282C13.043 20.4183 13 20.6236 13 20.8312V29.4984C13 29.8962 13.158 30.2778 13.4393 30.5591C13.7206 30.8404 14.1022 30.9984 14.5 30.9984H19C19.3978 30.9984 19.7794 30.8404 20.0607 30.5591C20.342 30.2778 20.5 29.8962 20.5 29.4984V24.9984H23.5V29.4984C23.5 29.8962 23.658 30.2778 23.9393 30.5591C24.2206 30.8404 24.6022 30.9984 25 30.9984H29.5C29.8978 30.9984 30.2794 30.8404 30.5607 30.5591C30.842 30.2778 31 29.8962 31 29.4984V20.8312C31 20.6236 30.957 20.4183 30.8735 20.2282C30.7901 20.0381 30.6681 19.8674 30.5153 19.7268ZM29.5 29.4984H25V24.9984C25 24.6006 24.842 24.2191 24.5607 23.9377C24.2794 23.6564 23.8978 23.4984 23.5 23.4984H20.5C20.1022 23.4984 19.7206 23.6564 19.4393 23.9377C19.158 24.2191 19 24.6006 19 24.9984V29.4984H14.5V20.8312L14.5103 20.8218L22 13.7484L29.4906 20.82L29.5009 20.8293L29.5 29.4984Z"
              fill="#1D1A1E"
            />
          </svg>
          <div className="title-text">Untitled Document</div>
        </div>
        <div className="button-area">
          <ButtonSmall secondary>
            <span>Share</span>
          </ButtonSmall>
        </div>
      </Header_Wrapper>
      <Header_Editor_Options>
        <div className="content-wrapper">
          <div className="text"></div>
          <div className="icons"></div>
        </div>
      </Header_Editor_Options>
    </>
  )
}
