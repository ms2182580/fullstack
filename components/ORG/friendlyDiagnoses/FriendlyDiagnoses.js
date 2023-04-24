import { Caption, P } from '../../ui/heading_body_text/DesktopMobileFonts.js'
import { FriendlyDiagnosesWrapper } from './styles/FriendlyDiagnosesWrapper.js'


export const FriendlyDiagnoses = ({ diagnosis, isMobile = false }) => {
  return (
    <FriendlyDiagnosesWrapper isMobile={isMobile}>
      {diagnosis.map((x) => (
        <div key={x}>
          {isMobile === false ? (
            <>
              <P>{x}</P>{" "}
            </>
          ) : (
            <>
              <Caption>{x}</Caption>{" "}
            </>
          )}
        </div>
      ))}
    </FriendlyDiagnosesWrapper>
  )
}