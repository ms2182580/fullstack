import { PhoneResultsSvg } from "../../../../../assets/icons/index"
import { ORG_D_Results_CardPhoneWrapper } from "./styles/ORG_D_Results_CardPhoneWrapper"

type Props = {
  phoneNumber: string
}

export const ORG_D_Results_Cardphone = ({ phoneNumber = "_" }: Props) => {
  return (
    <>
      <ORG_D_Results_CardPhoneWrapper>
        <PhoneResultsSvg />
        <p tabIndex={0}>{phoneNumber}</p>
      </ORG_D_Results_CardPhoneWrapper>
    </>
  )
}
