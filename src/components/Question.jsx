export default function Question(props) {
  if (props.mcq.isCorrect != null) console.log("form is success");
  function getClassName(answer) {
    const { mcq } = props;

    // Case: Answer has been checked
    if (mcq.isCorrect != null) {
      if (mcq.isCorrect && mcq.SelectedAnswer === answer)
        return "options correct disabled";
      if (!mcq.isCorrect && mcq.SelectedAnswer === answer)
        return "options inCorrect disabled";
      return "options disabled";
    }

    // Case: Before checking the answer
    if (mcq.SelectedAnswer && mcq.SelectedAnswer === answer)
      return "options selected";
    if (mcq.isSelected === false) return "options blink-red";

    return "options";
  }

  function options() {
    const allOptionsElements = props.mcq.allAnswers.map((answer) => {
      return (
        <div key={answer}>
          <div className={getClassName(answer)}>
            <input
              onChange={props.onSelect}
              type="radio"
              id={answer}
              name={props.mcq.question}
              value={answer}
              checked={props.mcq.SelectedAnswer === answer}
            />
            <label htmlFor={answer}>{answer}</label>
          </div>
        </div>
      );
    });
    return allOptionsElements;
  }
  return (
    <>
      <h2 className="question">{props.mcq.question}</h2>
      <div className="options-wrapper">{options()}</div>
    </>
  );
}
