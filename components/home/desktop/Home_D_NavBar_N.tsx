// import { InclusiveLogo_D_DownArrow } from "@/assets/icons"
// import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
// import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
// import Link from "next/link"
// import { useRouter } from "next/router"
// import { Home_D_NavBar_NWrapper } from "./styles/Home_D_NavBar_NWrapper"

// export const Home_D_NavBar_N = () => {
//   const { push, pathname } = useRouter()

//   return (
//     <Home_D_NavBar_NWrapper>
//       <div>
//         <INDEX_Logo />

//         <div>
//           <span>
//             About Us{" "}
//             <span>
//               <InclusiveLogo_D_DownArrow />
//             </span>
//           </span>
//           <Link href={`/${ALL_ROUTES.ORG}`}>Resource Guide</Link>
//           <Link href={`${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
//             Log in
//           </Link>
//           <Link href={`/${ALL_ROUTES.SIGNUP}`}>Sign up</Link>
//         </div>
//       </div>
//     </Home_D_NavBar_NWrapper>
//   )
// }

import { InclusiveLogo_D_DownArrow } from "@/assets/icons"
import Magic_Wand from "@/assets/icons/home/home_magic_wand.svg"
import { INDEX_Logo } from "@/components/logo/INDEX_Logo"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/router"
import { Home_D_NavBar_NWrapper } from "./styles/Home_D_NavBar_NWrapper"

export const Home_D_NavBar_N = () => {
  const { push, pathname } = useRouter()

  return (
    <Home_D_NavBar_NWrapper>
      <div>
        <INDEX_Logo />

        <div>
          <div>
            <span>
              About Us
              {/* <span>
              <InclusiveLogo_D_DownArrow />
            </span> */}
            </span>
            <span>Businesses</span>
            <span>Pricing</span>
            <Link href={`/${ALL_ROUTES.ORG}`}>Resource Guide</Link>
          </div>
          <div>
            <span>
              <span>
                <Magic_Wand />
              </span>
              AI Chat
            </span>
            <Link href={`${ALL_ROUTES.SIGNIN}/${ALL_ROUTES["RECENT-LOGIN"]}`}>
              Sign in
            </Link>
            <Link href={`/${ALL_ROUTES.SIGNUP}`}>Sign up</Link>
          </div>
        </div>
      </div>
    </Home_D_NavBar_NWrapper>
  )
}
