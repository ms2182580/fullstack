import { Sigin_RecentLoginScreen } from "@/assets/icons"
import recentLoginImage from "@/assets/images/signin/recent-login/recent-login.png"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import Link from "next/link"
import { P } from "../ui/heading_body_text/DesktopMobileFonts"
import { H3 } from "../ui/heading_body_text/HeaderFonts"
import { Recent_LoginWrapper } from "./styles/Recent_LoginWrapper"

export const Recent_Login = () => {
  return (
    <Recent_LoginWrapper>
      <header>
        <H3>Recent logins</H3>
        <P>Click your picture or add an account</P>
      </header>

      <div>
        <Link href={`/${ALL_ROUTES.DASHBOARD}`}>
          <Image
            src={recentLoginImage}
            alt=""
            width={250.956}
            height={265.74}
          />
          <span>Jane Doe</span>
        </Link>

        {/*!FH This should be an anchor tag element, because it suposse to move the view of the user to a «login» screen  */}
        <Link href={`/${ALL_ROUTES.SIGNIN}`}>
          <span>
            <Sigin_RecentLoginScreen />
          </span>
          <span>Jane Doe</span>
        </Link>
      </div>
    </Recent_LoginWrapper>
  )
}
