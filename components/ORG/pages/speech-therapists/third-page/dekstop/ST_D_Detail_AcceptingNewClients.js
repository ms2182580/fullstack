import { AcceptingNewClientsSvg } from '../../../../../assets/Icons/index.js'
import { ST_D_Detail_AcceptingNewClientsWrapper } from './styles/ST_D_Detail_AcceptingNewClientsWrapper.js'


export const ST_D_Detail_AcceptingNewClients = () => {
  return (
    <ST_D_Detail_AcceptingNewClientsWrapper>
      <AcceptingNewClientsSvg />
      <span>Accepting new clients</span>
    </ST_D_Detail_AcceptingNewClientsWrapper>
  )
}