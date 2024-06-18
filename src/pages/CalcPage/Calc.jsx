import styles from './Calc.module.scss';

function Calc() {
  const form = document.forms.calculator;
  const formInputFloor = form.elements.floor;
  const formInputAge = form.elements.age;
  const formInputHeight = form.elements.height;
  const formInputWeight = form.elements.weight;
  const submitCalcButton = document.getElementById('submitCalcButton');
  const outputResult = document.getElementById('outputResult');
 
  submitCalcButton.addEventListener('click', () => {
    const calculation = ((10 * formInputWeight) + (6.25 * formInputHeight) - (5 * formInputAge));
    switch (formInputFloor.value) {
      case 'man': outputResult.innerHTML = calculation + 5;
      break;
      case 'gerl': outputResult.innerHTML = calculation - 161;
      break;
      default: alert('Заолните все поля');
      break;
    }
  });

  return(
    <main>
      <section className={styles.SCalc}>
        <h1>Калькулятор калорий</h1>

        <form className={styles.calculator} name='calculator'>
          
          <div className={styles.formFloor}>
            <h3>Выберите пол:</h3>
            
            <div className={styles.inputFloor}>
              <input className={styles.radioFloor} id='man' type="radio" name='floor' value='man' />
              <label htmlFor="man">Мужской</label>
            </div>
            
            <div className={styles.inputFloor}>
              <input className={styles.radioFloor} id='gerl' type="radio" name='floor' value='gerl' />
              <label htmlFor="gerl">Женский</label>
            </div>
            
          </div>

          <div className={styles.formIn}>

            <div className={styles.inputIn}>
              <label htmlFor="age">Возраст (лет):</label>
              <input className={styles.inputNumber} type="number" name="age" id="age" />
            </div>

            <div className={styles.inputIn}>
              <label htmlFor="height">Рост (см):</label>
              <input className={styles.inputNumber} type="number" name="height" id="height" />
            </div>

            <div className={styles.inputIn}>
              <label htmlFor="weight">Вес (кг):</label>
              <input className={styles.inputNumber} type="number" name="weight" id="weight" />
            </div>

          </div>

          <button id={styles.submitCalcButton} type='submit'>Расчитать каллории</button>

        </form>

        <h3 id={styles.outputResult}></h3>

      </section>
    </main>
  )
}

export default Calc;