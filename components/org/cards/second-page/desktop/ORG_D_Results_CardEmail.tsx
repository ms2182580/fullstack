import { EmailResultsSvg } from "@/assets/icons"
import { ORG_D_Results_CardEmailWrapper } from "./styles/ORG_D_Results_CardEmailWrapper"

type Props = {
  email?: string
}

export const ORG_D_Results_CardEmail = ({ email = "_" }: Props) => {
  return (
    <>
      {email !== "_" && (
        <>
          <ORG_D_Results_CardEmailWrapper shouldBeDisplayed={email !== "_"}>
            <EmailResultsSvg />
            <p tabIndex={0}>{email}</p>
          </ORG_D_Results_CardEmailWrapper>
        </>
      )}
    </>
  )
}
