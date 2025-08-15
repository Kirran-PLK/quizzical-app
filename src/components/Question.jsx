import { useState } from "react";

export default function Question(props){
    const [selectedAnswer, setSelectedAnswer] = useState("");

    function onSelection(e){
        setSelectedAnswer(e.target.value);
        console.log(e.target.value)
    }

    function options(){
        const allOptionsElements = props.mcq.allAnswers.map(answer => {
            return (
                <div key={answer} className={selectedAnswer === answer ? "options selected" : "options" }>
                    <input
                        onChange={onSelection}
                        type="radio"
                        id={answer}
                        name={props.mcq.question}
                        value={answer}
                        checked={selectedAnswer === answer}
                    />
                    <label htmlFor={answer} >{answer}</label>
                </div>
            )
        })
        return allOptionsElements;
    }
    return(
        <>
            <h2 className="question">{props.mcq.question}</h2>
            <div className="options-wrapper">
              {options()}
            </div>
        </>
    )
}

/* 

<div>
                <input type="radio" id="Adiós" name={props.question} value="Adiós" />
                <label htmlFor="Adiós">Adiós</label>
              </div>
              <div>
                <input type="radio" id="Hola" name={props.question} value="Hola" />
                <label htmlFor="Hola">Hola</label>
              </div>
              <div>
                <input type="radio" id="Au Revoir" name={props.question} value="Au Revoir"/>
                <label htmlFor="Au Revoir">Au Revoir</label>
              </div>
              <div>
                <input type="radio" id="Salir" name={props.question} value="Salir" />
                <label htmlFor="Salir">Salir</label>
              </div>
*/