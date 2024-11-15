import UnderConstructionImage from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { INDEX_D_OrgOnTabsThirdPageWrapper } from "./styles/index-wrapper"

type Props = {
  handleMoveCustom?: ({ customMovement }) => void
  handlePreviousComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsThirdPage = ({
  handleMoveCustom,
  handlePreviousComponent,
}: Props) => {
  const theHandleMoveCustom = ({ event, customMovement }) => {
    if ((event.type === "click" || event.key === "Enter") && handleMoveCustom) {
      return handleMoveCustom({ customMovement })
    }
  }

  return (
    <INDEX_D_OrgOnTabsThirdPageWrapper>
      <fieldset>
        <legend>
          <h2>Third page ORG on Tabs</h2>
        </legend>
        <button
          onClick={(e) => {
            theHandleMoveCustom({ event: e, customMovement: 0 })
          }}
        >
          To first component (1° page: search)
        </button>
        <button onClick={handlePreviousComponent}>
          To Previous Component (2° page: results)
        </button>
        <div>
          <h3>Content here</h3>
          <Image src={UnderConstructionImage} alt="UnderConstructionImage" />
        </div>
      </fieldset>
    </INDEX_D_OrgOnTabsThirdPageWrapper>
  )
}
