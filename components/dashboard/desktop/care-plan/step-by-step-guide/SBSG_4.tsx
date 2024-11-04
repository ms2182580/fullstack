import Breadcrumbs_CaretRight from "@/assets/icons/Breadcrumbs_CaretRight.svg"
import { useCtxDataCreatePlan } from "@/context/dashboard/care_plan/ctx-create-plan-data"
import { SBSG_4Options } from "./sbsg_4-options"
import { SBSG_4Wrapper } from "./styles/SBSG_4Wrapper"

export const SBSG_4 = () => {
  const {
    dataTabsStateTABS,
    dataActiveTabsTABS,
    handleActiveTabTABS,
    handleRemoveORGTABS,
    handleAddORGTABS,
    handleFocusTargetElementTABSORG,
  } = useCtxDataCreatePlan().TABS

  const theHandleAddORGTABS = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      handleAddORGTABS()
      handleFocusTargetElementTABSORG()

      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <SBSG_4Wrapper>
      <header>
        <h5>Services</h5>
      </header>

      <p>Here are the services that best fit your needs:</p>

      <SBSG_4Options />

      <p
        onClick={theHandleAddORGTABS}
        onKeyDown={theHandleAddORGTABS}
        tabIndex={0}
      >
        Search the directory instead <Breadcrumbs_CaretRight />
      </p>
    </SBSG_4Wrapper>
  )
}
