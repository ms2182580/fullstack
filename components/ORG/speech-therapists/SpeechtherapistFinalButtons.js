const SpeechtherapistFinalButtons = ({setPagination, pagination}) => {
  return (
    <div>
        <button
          onClick={() =>
            setPagination((prevState) => {
              if (pagination > 1) return pagination - 1
              else return prevState
            })
          }
        >
          Previous
        </button>
        <button onClick={() => setPagination(1)}>1</button>
        <button onClick={() => setPagination(2)}>2</button>
        <button onClick={() => setPagination(3)}>3</button>
        <button onClick={() => setPagination(pagination + 1)}>Next</button>
    </div>
  );
}

export default SpeechtherapistFinalButtons;