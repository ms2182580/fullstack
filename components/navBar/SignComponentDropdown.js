import { ButtonSmall } from "../ui/buttons/general/index.js"
import { SignComponentDropdownWrapper } from "./styles/SignComponentDropdownWrapper.js"

export const SignComponentDropdown = ({ theRef }) => {
  return (
    <SignComponentDropdownWrapper ref={theRef}>
      <div>
        <span>
          <ButtonSmall secondary>Sign Up</ButtonSmall>
        </span>
        <span>
          <ButtonSmall>Sign In</ButtonSmall>
        </span>
      </div>

      <div>
        <span>ICON</span>
        <p>Ask a question</p>
      </div>

      <div>
        <span>ICON</span>
        <p>Upgrade to premium</p>
      </div>

      <div>
        <span>ICON</span>
        <p>User dashboard</p>
      </div>

      <span></span>


      <div>
        <span>ICON</span>
        <p>Help/Contact us</p>
      </div>


      <div>
        <span>ICON</span>
        <p>Settings</p>
      </div>


      <div>
        <span>ICON</span>
        <p>Contrast</p>
      </div>


      <div>
        <span>ICON</span>
        <p>Dictionary</p>
      </div>


      <div>
        <span>ICON</span>
        <p>Tooltip</p>
      </div>


      <div>
        <span>ICON</span>
        <p>Accesibility mode</p>
      </div>



    </SignComponentDropdownWrapper>
  )
}
