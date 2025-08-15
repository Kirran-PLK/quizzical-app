

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
            </div>        
        </>
    )
}
