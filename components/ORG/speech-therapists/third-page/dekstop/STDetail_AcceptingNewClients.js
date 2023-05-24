import { AcceptingNewClientsSvg } from '../../../../../assets/Icons/index.js'
import { STDetail_AcceptingNewClientsWrapper } from './styles/STDetail_AcceptingNewClientsWrapper.js'


export const STDetail_AcceptingNewClients = () => {
  return (
    <STDetail_AcceptingNewClientsWrapper>
      <AcceptingNewClientsSvg />
      <span>Accepting new clients</span>
    </STDetail_AcceptingNewClientsWrapper>
  )
}