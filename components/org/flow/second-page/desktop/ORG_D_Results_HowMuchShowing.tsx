import { DATA_ORG_KeyNamesForCards_D_KEYS } from "@/utils/org/DATA_ORG_KeyNamesForCards_D"
import { ORG_D_Results_HowMuchShowingWrapper } from "./styles/ORG_D_Results_HowMuchShowingWrapper"

type Props = {
  dataComesFromParent?: object[] | any
}

export const ORG_D_Results_HowMuchShowing = ({
  dataComesFromParent,
}: Props) => {
  return (
    <ORG_D_Results_HowMuchShowingWrapper>
      <p>
        {dataComesFromParent?.[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
          ? `Showing ${
              dataComesFromParent?.[DATA_ORG_KeyNamesForCards_D_KEYS.ALL_DATA]
                .length
            } results`
          : "Showing 10 of 50 results"}
      </p>
    </ORG_D_Results_HowMuchShowingWrapper>
  )
}
