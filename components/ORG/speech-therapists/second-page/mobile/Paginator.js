import { PaginatorWrapper } from "./styles/PaginatorWapper"

export const Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
  let dots = []
  let classes = ""
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "dot active" : "dot"
    dots.push(
      <div
        key={index}
        className={classes}
        onClick={() => handlePageChange(index)}></div>
    )
  }
  
  const handleChangeCard = (e, index) => {
    if(e.key === "Enter"){
      handlePageChange(index)
    }
  }
  
  
  return (
    <PaginatorWrapper>
      {dots.map((dot, i) => (
        <span
          key={`${dot}${i}`}
          tabIndex={0}
          onKeyDown={(e) => handleChangeCard(e, i)}
          >
          {dot}
        </span>
      ))}
    </PaginatorWrapper>
  )
}
