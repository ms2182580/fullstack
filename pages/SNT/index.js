import SNTWrapper from "./styles/SNTWrapper";
import FirstSection from "./SNT_Home/FirstSection.js"
import SecondSection from "./SNT_Home/SecondSection.js"
import ThirdSection from "./SNT_Home/ThirdSection.js"
import FourthSection from "./SNT_Home/FourthSection.js"
import FifthSection from "./SNT_Home/FifthSection.js"
import SixSection from "./SNT_Home/SixSection.js"

const SNT = () => {
  return (
    <SNTWrapper>
      {/* //TODO Change all the svg images for an Image component of next using layout="responsive" */}
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <SixSection/>
      
    </SNTWrapper>
  );
}

export default SNT;