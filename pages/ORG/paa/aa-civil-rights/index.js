import { INDEX_D_CivilRights_Results } from "../../../../components/ORG/pages/attorney-advocates/second-page/aa-civil-rights/desktop/INDEX_D_CivilRights_Results"
import { useCheckUserWidth } from "../../../../context/CheckUserWidth"

export default function ORG_INDEX_AA_AttorneyAdvocates_Results({ repo }) {
  // console.log('repo:', repo)
  const { isMobile } = useCheckUserWidth()

  // if (isMobile === false) {
  //   return "desktop"
  // } else {
  //   return "mobile"
  // }

  return (
    <>
      {isMobile === false ? (
        <>
          <INDEX_D_CivilRights_Results />
        </>
      ) : (
        <>{/* // Nothing code yet */}</>
      )}
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch("https://api.inclusive.io/ORG")
  const repo = await res.json()
  return { props: { repo } }
}
