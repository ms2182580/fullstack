import { useRouter } from "next/router"
import { InFrontModal_D_Wrapper } from '../../../../../../components/inFront_D/styles/InFrontModal_D_Wrapper'
import { useCtx_ShowModal } from '../../../../../../context/Ctx_ShowModal'
import { useORG_Ctx_D_ThirdpageData } from "../../../../../../context/ORG_Ctx_D_ThirdpageData_Provider"
import { ST_D_Detail_Appointments } from "./ST_D_Detail_Appointments"
import { ST_D_Detail_FAQS } from "./ST_D_Detail_FAQS"
import { ST_D_Detail_Header } from "./ST_D_Detail_Header"
import { ST_D_Detail_MainCard } from "./ST_D_Detail_MainCard"
import { ST_D_Detail_PageLastUpdated } from "./ST_D_Detail_PageLastUpdated"
import { ST_D_Detail_Reviews } from "./ST_D_Detail_Reviews"
import { INDEX_D_STDetailWrapper } from "./styles/INDEX_D_STDetailWrapper"

export const INDEX_D_STDetail = () => {
  const route = useRouter()
  const { thirdpageDataORG } = useORG_Ctx_D_ThirdpageData()

  if (thirdpageDataORG === "") {
    if (route.isReady) route.push("/ORG/pst/st-speech-language-pathologists")

    return
  }

  const { modalShowedCtx } = useCtx_ShowModal()

  return (
    <>
      <INDEX_D_STDetailWrapper >
        <ST_D_Detail_Header STData={STDataThirdpage_D} />

        <ST_D_Detail_MainCard STData={STDataThirdpage_D} />

        <ST_D_Detail_Appointments
          picture={STDataThirdpage_D.data[0].picture.large}
          name={STDataThirdpage_D.data[0].name.first}
          lastName={STDataThirdpage_D.data[0].name.last}
        />

        <ST_D_Detail_Reviews
          name={STDataThirdpage_D.data[0].name.first}
          lastName={STDataThirdpage_D.data[0].name.last}
          rating={STDataThirdpage_D.filters[0].rating}
          reviews={STDataThirdpage_D.filters[0].reviews}
        />

        <ST_D_Detail_FAQS
          name={STDataThirdpage_D.data[0].name.first}
          lastName={STDataThirdpage_D.data[0].name.last}
          locationCity={STDataThirdpage_D.data[0].location.city}
          locationStreetNumber={STDataThirdpage_D.data[0].location.street.number}
          locationStreetName={STDataThirdpage_D.data[0].location.street.name}
          locationState={STDataThirdpage_D.data[0].location.state}
        />

        <ST_D_Detail_PageLastUpdated
          name={STDataThirdpage_D.data[0].name.first}
          lastName={STDataThirdpage_D.data[0].name.last}
        />

        <InFrontModal_D_Wrapper modalShowedCtx={modalShowedCtx} isInDetail />
      </INDEX_D_STDetailWrapper>
    </>
  )
}
