import { ArrowDownSvg } from "@/assets/icons"
// import SVGFileUp_Active from "@/assets/icons/file_upload_active.svg"
import { KEYS_DATA_TESTID } from "@/__e2e__/plw/utils/org/keys"
import SVGFileUp_Default from "@/assets/icons/file_upload_default.svg"
import SvgPlus from "@/assets/icons/org/third-page/org_plus.svg"
import SVGSung from "@/assets/icons/sun.svg"
import ImageFamily from "@/assets/images/Dashboard/dashboard_home_family.png"
import IMGEmptyDocuments from "@/assets/images/Dashboard/dashboard_index_emptyDocuments.png"
import { ALL_ROUTES } from "@/utils/ALL_ROUTES"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { INDEX_D_DashboardWrapper } from "./styles/INDEX_D_DashboardWrapper"

export const INDEX_D_Dashboard = () => {
  const { asPath } = useRouter()

  return (
    <INDEX_D_DashboardWrapper
      data-testid={KEYS_DATA_TESTID.INDEX_D_DASHBOARD_HOME}
    >
      <header>
        <h3>
          Nice to meet you, Jane
          <span>
            <SVGSung />
          </span>
        </h3>

        <p>What would you like to do?</p>
      </header>

      <article>
        <div>
          <h2>Use our platform to help create your tailored care plan.</h2>
          <p>
            Create a care plan in minutes. Connect with coordinators faster.
          </p>
          <span>
            <Link href={`${asPath}/${ALL_ROUTES.DASHBOARD_SECTIONS.CARE_PLAN}`}>
              <SvgPlus /> Create Plan
            </Link>{" "}
            <button>
              {" "}
              <SVGFileUp_Default />
              Upload Plan
            </button>
          </span>
        </div>
        <Image src={ImageFamily} alt="image of a family" />
      </article>

      <article>
        <h3>Have a question? Ask our AI Chatbot.</h3>
        <div>
          <input placeholder="Ask me anything..." />
          <button>Ask</button>
        </div>
      </article>

      <section>
        <header>
          <h3>Recent Documents</h3>{" "}
          <Link href={`${asPath}/${ALL_ROUTES.DASHBOARD_SECTIONS.DOCUMENTS}`}>
            View All
            <ArrowDownSvg />
          </Link>
        </header>
        <div>
          <h4>You haven’t created any plans yet! </h4>
          <p>Your AI-generated plans will appear here.</p>
          <Image src={IMGEmptyDocuments} alt="empty documents image" />
        </div>
      </section>
    </INDEX_D_DashboardWrapper>
  )
}
