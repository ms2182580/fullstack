import { CR_D_Results_FilterMoreModalWrapper } from './styles/CR_D_Results_FilterMoreModalWrapper.js'

export const CR_D_Results_FilterMoreModal = ({ theRef, theOnClick, theOnKeyDown }) => {
  return (
    <CR_D_Results_FilterMoreModalWrapper>
      CR_D_Results_FilterMoreModal


      <div>
        <span
          onClick={handleShouldClearAllOptions}
          onKeyDown={handleShouldClearAllOptions}>
          <ButtonSmall secondary>Clear all</ButtonSmall>
        </span>
        <span>
          <ButtonSmall>Apply</ButtonSmall>
        </span>
      </div>
    </CR_D_Results_FilterMoreModalWrapper>
  )
}