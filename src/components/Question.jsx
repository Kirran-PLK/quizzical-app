

export default function Question(){
    return(
        <>
            <h2>How would one say goodbye in Spanish?</h2>
            <div>
              <div>
                <input type="radio" id="Adiós" name="How would one say goodbye in Spanish?" value="Adiós" />
                <label htmlFor="Adiós">Adiós</label>
              </div>
              <div>
                <input type="radio" id="Hola" name="How would one say goodbye in Spanish?" value="Hola" />
                <label htmlFor="Hola">Hola</label>
              </div>
              <div>
                <input type="radio" id="Au Revoir" name="How would one say goodbye in Spanish?" value="Au Revoir"/>
                <label htmlFor="Au Revoir">Au Revoir</label>
              </div>
              <div>
                <input type="radio" id="Salir" name="How would one say goodbye in Spanish?" value="Salir" />
                <label htmlFor="Salir">Salir</label>
              </div>
            </div>
        </>
    )
}