import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import { Layout_Signup_ProgressWrapper } from "./styles/Layout_Signup_ProgressWrapper"

export type Layout_Signup_Progress_Props = 1 | 2 | 3 | 4 | null

export type Props = {
  actualProgress: Layout_Signup_Progress_Props
}

export const Layout_Signup_Progress = ({ actualProgress = 1 }: Props) => {
  return (
    <Layout_Signup_ProgressWrapper>
      <progress
        max="4"
        value={actualProgress !== null ? actualProgress : 1}
        aria-labelledby="progress bar"
      />
      <ol>
        <li>
          <P>who are you</P>{" "}
        </li>
        <li>
          <P>Create profile</P>
        </li>
        <li>
          <P>tell us your story</P>
        </li>
        <li>
          <P>review and safe</P>
        </li>
      </ol>
    </Layout_Signup_ProgressWrapper>
  )
}
