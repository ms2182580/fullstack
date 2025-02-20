import {
  SearchInput,
  ContainerWrapper,
  ExtradivWrapper,
  MainContentWrapper,
  TitleWrapper,
  SearchContainerWrapper,
  SearchInputWrapper,
  SearchIconWrapper,
  ButtonContainerWrapper,
} from "./styles/index-wrapper"
import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Breadcrumbs } from "@/components/ui/breadcrumbs/desktop/Breadcrumbs-1"
import { ALL_ROUTES_INTERNAL } from "@/utils/ALL_ROUTES"
export const  INDEX_NewSearch = () => {

  const [inputValue, setInputValue] = useState("")


  return (
    <>
    <ContainerWrapper>
      <ExtradivWrapper>
      <Breadcrumbs />
        <MainContentWrapper>
          <TitleWrapper>
            The ultimate guide to the world's developmental disability resources
          </TitleWrapper>
          <SearchContainerWrapper>
            <label htmlFor="keyword">Keyword</label>
            <SearchInputWrapper>
            <SearchIconWrapper>
             <Image src="/images/MagnifyingGlass.png" alt="Search Icon" width={24} height={24}  />
             </SearchIconWrapper>
              <SearchInput
                id="keyword"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ADHD, speech therapy, NAICS Code 12132 etc."
              />
            </SearchInputWrapper>
          </SearchContainerWrapper>
          <ButtonContainerWrapper>
              <Link href={`${ALL_ROUTES_INTERNAL.NEW_SEARCH}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.RESOURCES}/${ALL_ROUTES_INTERNAL.RESOURCES_SECTION.SECOND}`}>Search Resources</Link>
              <Link href={`${ALL_ROUTES_INTERNAL.NEW_SEARCH}/${ALL_ROUTES_INTERNAL.NEW_SEARCH_SECTIONS.CATEGORIES}`}>Search Categories</Link>
            </ButtonContainerWrapper>
        </MainContentWrapper>
      </ExtradivWrapper>
    </ContainerWrapper>
    </>
  )
}
