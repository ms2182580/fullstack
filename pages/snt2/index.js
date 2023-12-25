import { useRouter } from "next/router.js"
import { useEffect } from "react"

const SNT = ({ redirect }) => {
  const { push } = useRouter()

  useEffect(() => {
    push("/404")
  }, [])


  return

  // return (
  //   <SNTWrapper>
  //     {/* //TODO Change all the svg images for an Image component of next using layout="responsive" */}
  //     <FirstSection />
  //     <SecondSection />
  //     <ThirdSection />
  //     <FourthSection />
  //     <FifthSection />
  //     <SixSection />
  //   </SNTWrapper>
  // )
}

export default SNT