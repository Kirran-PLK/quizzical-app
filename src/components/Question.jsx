

export default function Question(props){
    function getClassName(answer) {
        if (props.mcq.SelectedAnswer!=false && props.mcq.SelectedAnswer === answer) {
          return "options selected";
        }
        if(props.mcq.isSelected===false) {
          return "options blink-red";
        }
        if (props.mcq.isSelected === null || props.mcq.isSelected!=null) return "options";
        
    }

    function options(){
        const allOptionsElements = props.mcq.allAnswers.map(answer => {
            return (
                <div key={answer}>
                  <div  className={getClassName(answer)}>
                    <input
                        onChange={props.onSelect}
                        type="radio"
                        id={answer}
                        name={props.mcq.question}
                        value={answer}
                        checked={props.mcq.SelectedAnswer === answer}
                    />
                    <label htmlFor={answer} >{answer}</label>
                  </div>
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
            {/* <p className="missing-option-error">a option must be selected</p> */}
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