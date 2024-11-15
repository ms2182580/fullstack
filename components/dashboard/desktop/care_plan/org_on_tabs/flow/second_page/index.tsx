import UnderConstructionImage from "@/assets/images/UnderConstructionImagePurple.png"
import Image from "next/image"
import { INDEX_D_OrgOnTabsSecondPageWrapper } from "./styles/index-wrapper"

type Props = {
  handleNextComponent?: (e) => void
  handlePreviousComponent?: (e) => void
}

export const INDEX_D_OrgOnTabsSecondPage = ({
  handleNextComponent,
  handlePreviousComponent,
}: Props) => {
  return (
    <INDEX_D_OrgOnTabsSecondPageWrapper>
      <fieldset>
        <legend>
          <h2>Second page ORG on Tabs</h2>
        </legend>
        <button onClick={handleNextComponent}>To Next Component</button>
        <button onClick={handlePreviousComponent}>To Previous Component</button>
        <div>
          <h3>Content here</h3>
          <Image src={UnderConstructionImage} alt="UnderConstructionImage" />
        </div>
      </fieldset>
    </INDEX_D_OrgOnTabsSecondPageWrapper>
  )
}
