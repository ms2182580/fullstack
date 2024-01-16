import { ST_M_Results_CardNoFilters_PaginatorWrapper } from "./styles/ST_M_Results_CardNoFilters_PaginatorWrapper"

export const ST_M_Results_CardNoFilters_Paginator = ({ dataLength, activeIndex, handlePageChange }) => {
  let dots = []
  let classes = ""
  for (let index = 0; index < dataLength; index++) {
    classes = activeIndex === index ? "dot active" : "dot"
    dots.push(
      <div
        key={index}
        className={classes}
        onClick={() => handlePageChange(index)}></div>,
    )
  }

  const handleChangeCard = (e, index) => {
    if (e.key === "Enter") {
      handlePageChange(index)
    }
  }

  return (
    <ST_M_Results_CardNoFilters_PaginatorWrapper>
      {dots.map((dot, i) => (
        <span
          key={`${dot}${i}`}
          tabIndex={0}
          onKeyDown={(e) => handleChangeCard(e, i)}>
          {dot}
        </span>
      ))}
    </ST_M_Results_CardNoFilters_PaginatorWrapper>
  )
}
