import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import { Aboutyou } from "./aboutyou"
import { Comments } from "./comments"
import { Contribute } from "./contribute"
import { Hero } from "./hero"
import { Organization } from "./organization"
import { Quickhelp } from "./quickhelp"
import { Steps } from "./steps"
import { INDEX_HomeWrapper } from "./styles/index-wrapper"

export const INDEX_Home = () => {
  return (
    <INDEX_HomeWrapper data-testid={KEYS_DATA_TESTID.INDEX_D_HOME}>
      <Hero />
      <Quickhelp />
      <Steps />
      <Comments />
      <Contribute />
      <Organization />
      <Aboutyou />
    </INDEX_HomeWrapper>
  )
}
