export default function Intro(props) {
  return (
    <section className="intro-section">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={props.startQuiz}> Start quiz </button>
    </section>
  );
}
