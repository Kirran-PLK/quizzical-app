export default function Questions() {
  return (
    <section className="questions-section">
      <form>
        <div className="question-answer-section">
          <label>
            How would one say goodbye in Spanish?
            <div>
              <div>
                <input type="radio" id="Adiós" name="Adiós" value="Adiós" />
                <label for="Adiós">Adiós</label>
              </div>
              <div>
                <input type="radio" id="Hola" name="Hola" value="Hola" />
                <label for="Hola">Hola</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Au Revoir"
                  name="Au Revoir"
                  value="Au Revoir"
                />
                <label for="Au Revoir">Au Revoir</label>
              </div>
              <div>
                <input type="radio" id="Salir" name="Salir" value="Salir" />
                <label for="Salir">Salir</label>
              </div>
            </div>
          </label>
        </div>
      </form>
    </section>
  );
}
