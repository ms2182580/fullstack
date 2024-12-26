import { INDEX_Signin } from "@/components/signin"
import { SigninWrapper } from "./styles/index-wrapper"

export const Signin = () => {
  return (
    <>
      <SigninWrapper>
        <INDEX_Signin customSigninRoute="/teams" />
      </SigninWrapper>
    </>
  )
}
