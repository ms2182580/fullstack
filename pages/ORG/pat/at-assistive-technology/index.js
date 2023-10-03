import { INDEX_D_AssistiveTechnology_Results } from "../../../../components/ORG/pages/assistive-technology/second-page/at-assistive-technology/desktop/INDEX_D_AssistiveTechnology_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AT_AssistiveTechnology_Results() {
  const { isMobile } = useCheckUserWidth()

  // const { pathname, query, route, ...allProps } = useRouter()

  return (
    <>
      {isMobile === false ? (
        <>
          {/* 
        //!FH0
        CHange the second page of AT plus create third page. Layout: SAT
        */}
          <INDEX_D_AssistiveTechnology_Results />
        </>
      ) : (
        <>
          {/* Mobile component. We dont have design for this in this path */}
        </>
      )}
    </>
  )
}




