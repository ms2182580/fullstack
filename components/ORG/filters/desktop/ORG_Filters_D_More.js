import { CR_D_Results_FilterMoreModalWrapper } from './styles/CR_D_Results_FilterMoreModalWrapper.js'

export const ORG_Filters_D_More = ({ theRef, theOnClick, theOnKeyDown }) => {
  return (
    <CR_D_Results_FilterMoreModalWrapper >



      <span onClick={handleShowFilter}>
        {!mustShowFilter ? <ButtonSmall secondary>{buttonName}</ButtonSmall> : <ButtonSmall>{buttonName}</ButtonSmall>}
      </span>


      <div ref={theRef}>
        <p>Here range input</p>
        <p>Here checkbox input</p>
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
      </div>
    </CR_D_Results_FilterMoreModalWrapper>
  )
}