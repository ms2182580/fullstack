const SpeechtherapistFinalButtons = ({ setPagination, pagination }) => {
  const toPrevious = () => {
    setPagination((prevState) => {
      if (pagination > 1) return pagination - 1
      else return prevState
    })
  }

  return (
    <div>
      <button onClick={() => toPrevious}>Previous</button>
      <button onClick={() => setPagination(1)}>1</button>
      <button onClick={() => setPagination(2)}>2</button>
      <button onClick={() => setPagination(3)}>3</button>
      <button onClick={() => setPagination(pagination + 1)}>Next</button>
    </div>
  )
}

export default SpeechtherapistFinalButtons
