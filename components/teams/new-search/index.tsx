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
export const  INDEX_NewSearch = () => {

  const [inputValue, setInputValue] = useState("")
  const theInputRef = useRef<HTMLInputElement>(null)

  const handleClickInput = () => {
    if (theInputRef.current) {
      theInputRef.current.focus()
    }
  }

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
                ref={theInputRef}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="ADHD, speech therapy, NAICS Code 12132 etc."
                onClick={handleClickInput}
              />
            </SearchInputWrapper>
          </SearchContainerWrapper>
          <ButtonContainerWrapper>
              <Link href="/teams/new-search/resources/second">Search Resources</Link>
              <Link href="/teams/new-search/categories">Search Categories</Link>
            </ButtonContainerWrapper>
        </MainContentWrapper>
      </ExtradivWrapper>
    </ContainerWrapper>
    </>
  )
}
