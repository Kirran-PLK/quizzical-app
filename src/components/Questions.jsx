import Question from "./Question";
import { useEffect, useRef ,useState } from "react";
import he from "he";

export default function Questions() {
  
  const [questionsArray, setQuestionsArray] = useState(null);
  const fetched = useRef(false);

  useEffect(()=>{
    if(fetched.current) return;
    fetch("https://opentdb.com/api.php?amount=5&type=multiple")
    .then(response => response.json())
    .then(data => {
      const fetchedData = data.results
      const modifyData = fetchedData.map(el => {
        const allAnswers = [...el.incorrect_answers, el.correct_answer];
        const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);
        return {
          question : he.decode(el.question),
          allAnswers : shuffledAnswers,
          correctAnswer : el.correct_answer,
          incorrectAnswers : el.incorrect_answers
        }
      })
      setQuestionsArray(modifyData);
    });
    fetched.current = true;
  },[]);
  if(questionsArray!=null) console.log(questionsArray);
  return (
    <section className="questions-section">
      <form>
        <div className="question-answer-section">
          <Question/>
        </div>
      </form>
    </section>
  );
}
