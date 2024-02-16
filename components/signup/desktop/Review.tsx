import {
  Signup_ReviewAddProfileSvg,
  Signup_ReviewPencilIcon,
  Signup_ReviewSvg,
} from "@/assets/icons"
import { SignupLayout } from "./Layout"
import { ReviewWrapper } from "./styles/ReviewWrapper"

export const Review = () => {
  return (
    <SignupLayout>
      <ReviewWrapper>
        <div>
          <span>
            <Signup_ReviewSvg />
            <span>Kohlil Doe</span>
          </span>
          <span>
            <span>Edit</span>
            <Signup_ReviewPencilIcon />
          </span>
        </div>
        <div>
          <span>
            <Signup_ReviewAddProfileSvg />
            <span>Kohlil Doe</span>
          </span>
        </div>
      </ReviewWrapper>
    </SignupLayout>
  )
}
