import { INDEX_D_Signup_Home } from "@/components/signup/desktop"
import { useWidthSize } from "@/utils/useWidthSize"

export default function INDEX_Signup() {
  const { isMobile } = useWidthSize()

  if (isMobile === undefined) return null

  return <INDEX_D_Signup_Home />
}
