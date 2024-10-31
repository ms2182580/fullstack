import Breadcrumbs_CaretRight from "@/assets/icons/Breadcrumbs_CaretRight.svg"
import { SBSG_4Options } from "./sbsg_4-options"
import { SBSG_4Wrapper } from "./styles/SBSG_4Wrapper"

export const SBSG_4 = () => {
  return (
    <SBSG_4Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>Here are the services that best fit your needs:</p>

      <SBSG_4Options />

      <p tabIndex={0}>
        Search the directory instead <Breadcrumbs_CaretRight />
      </p>
    </SBSG_4Wrapper>
  )
}
