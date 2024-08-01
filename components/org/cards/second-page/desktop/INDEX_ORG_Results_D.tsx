import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { ORG_D_Results_Header } from "./ORG_D_Results_Header"
import { ORG_D_Results_MainEntry } from "./ORG_D_Results_MainEntry"
import { INDEX_ORG_Results_DWrapper } from "./styles/INDEX_ORG_Results_DWrapper.js"

export const INDEX_ORG_Results_D = () => {
  return (
    <INDEX_ORG_Results_DWrapper
      data-testid={KEYS_DATA_TESTID.INDEX_D_ORG_RESULTS}
    >
      <ORG_D_Results_Header />

      <ORG_D_Results_MainEntry />
    </INDEX_ORG_Results_DWrapper>
  )
}
