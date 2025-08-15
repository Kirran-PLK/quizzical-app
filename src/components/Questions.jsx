import Question from "./Question";
import { useEffect, useRef, useState } from "react";
import he from "he";

export default function Questions() {
  const [questionsArray, setQuestionsArray] = useState(null);
  const [isFormSuccess, setisFormSuccess] = useState(false);
  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((response) => response.json())
      .then((data) => {
        const fetchedData = data.results;
        const modifyData = fetchedData.map((el) => {
          const allAnswers = [...el.incorrect_answers, el.correct_answer];
          const shuffledAnswers = allAnswers
            .sort(() => Math.random() - 0.5)
            .map((sA) => he.decode(sA));
          return {
            question: he.decode(el.question),
            allAnswers: shuffledAnswers,
            correctAnswer: he.decode(el.correct_answer),
            incorrectAnswers: el.incorrect_answers.map((iC) => he.decode(iC)),
            isCorrect: null,
            isSelected: null,
            SelectedAnswer: false,
          };
        });
        setQuestionsArray(modifyData);
      });
    fetched.current = true;
  }, []);

  function MCQs() {
    const mcqElements = questionsArray.map((q) => (
      <Question key={q.correctAnswer} mcq={q} onSelect={onOptionSelection} />
    ));
    return mcqElements;
  }

  function onOptionSelection(e) {
    const answer = e.target.value;
    setQuestionsArray((prev) => {
      const newArray = [];
      prev.forEach((obj) => {
        if (obj.allAnswers.includes(answer)) {
          newArray.push({
            ...obj,
            SelectedAnswer: answer,
          });
        } else {
          newArray.push({
            ...obj,
          });
        }
      });
      return newArray;
    });
  }

  function mcqSubmit(formData) {
    const formEntries = Object.fromEntries(formData.entries());
    if (Object.keys(formEntries).length < 5) {
      // Step 1: temporarily remove blink by setting null
      setQuestionsArray((prev) =>
        prev.map((obj) => ({
          ...obj,
          isSelected:
            obj.SelectedAnswer || formEntries[obj.question] != null
              ? true
              : null,
        }))
      );

      // Step 2: after a tiny delay, set unanswered back to false
      setTimeout(() => {
        setQuestionsArray((prev) =>
          prev.map((obj) => ({
            ...obj,
            isSelected: obj.isSelected === null ? false : obj.isSelected,
          }))
        );
      }, 50); // 50ms is usually enough for browser to register removal
    } else {
      setisFormSuccess(true);
      setQuestionsArray((prev) =>
        prev.map((obj) => ({
          ...obj,
          isCorrect: obj.SelectedAnswer === obj.correctAnswer,
        }))
      );
    }
  }

  function getCorrectAnswersCount() {
    let count = 0;
    questionsArray.forEach((obj) => {
      if (obj.isCorrect) count++;
    });
    return count;
  }

  return (
    <>
      {questionsArray != null && (
        <section className="questions-section">
          <form action={mcqSubmit}>
            <div className="question-answer-section">
              {MCQs()}
              {!isFormSuccess && <button type="submit">Check answers</button>}
            </div>
          </form>
          {isFormSuccess && (
            <div className="result-div">
              <p className="result">
                You scored {getCorrectAnswersCount()}/5 correct answers
              </p>
              <button className="play-again-btn"> Play again </button>
            </div>
          )}
        </section>
      )}
    </>
  );
}
