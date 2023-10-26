import { P } from "@/components/ui/heading_body_text/DesktopMobileFonts"
import Image from "next/image"
import Link from "next/link"
import { ORG_D_Detail_AT_SimilarProducts_SectionWrapper } from "./styles/ORG_D_Detail_AT_SimilarProducts_SectionWrapper"

export const ORG_D_Detail_AT_SimilarProducts_Section = ({ image, title, subtitle, linkRef }) => {
  return (
    <ORG_D_Detail_AT_SimilarProducts_SectionWrapper>
      <div>
        <Image
          src={image}
          layout="responsive"
          width={240}
          height={184}
          objectFit="contain"
        />
      </div>

      <P>{title}</P>
      <P>{subtitle}</P>

      <Link href={linkRef}>View Product</Link>
    </ORG_D_Detail_AT_SimilarProducts_SectionWrapper>
  )
}
