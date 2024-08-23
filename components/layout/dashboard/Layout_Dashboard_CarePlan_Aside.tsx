import FileUp_Active from "@/assets/icons/file_upload_active.svg"
import FileUp from "@/assets/icons/file_upload_default.svg"
import MagicWand_Active from "@/assets/icons/magic_wand_active.svg"
import MagicWand from "@/assets/icons/org/third-page/magic-wand.svg"

import { BackArrow, ChatAILogo } from "@/assets/icons"
import Star_Active from "@/assets/icons/star_active.svg"
import Star_Default from "@/assets/icons/star_default.svg"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Layout_Dashboard_CarePlan_AsideWrapper } from "./styles/Layout_Dashboard_CarePlan_AsideWrapper"

const asideOptions = [
  {
    string: "create",
    svgDefault: MagicWand,
    svgActive: MagicWand_Active,
  },
  {
    string: "upload",
    svgDefault: FileUp,
    svgActive: FileUp_Active,
  },
  {
    string: "saved",
    svgDefault: Star_Default,
    svgActive: Star_Active,
  },
  {
    string: "back",
    svgDefault: BackArrow,
  },
]

export const Layout_Dashboard_CarePlan_Aside = () => {
  const { push } = useRouter()

  return (
    <Layout_Dashboard_CarePlan_AsideWrapper>
      <Link href={ALL_ROUTES.HOME}>
        <span>
          <ChatAILogo />
        </span>
        <p>beta</p>
      </Link>

      <ul>
        {asideOptions.map(({ string, svgDefault, svgActive }) => {
          const SVGDefault = svgDefault
          // const SVGActive = svgActive

          const isBack = string === "back"

          if (isBack) {
            return (
              <li
                key={string}
                tabIndex={0}
                onClick={() => push(`/${ALL_ROUTES.DASHBOARD}`)}
                style={{ cursor: "pointer" }}
              >
                <SVGDefault />
                <p>{string}</p>
              </li>
            )
          }

          return (
            <li key={string} tabIndex={0}>
              <SVGDefault />
              <p>{string}</p>
            </li>
          )
        })}
      </ul>
    </Layout_Dashboard_CarePlan_AsideWrapper>
  )
}
