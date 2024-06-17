import styles from './Calc.module.scss';

function Calc() {
  const calculator = (event) => {
    event.preventDefault();
    document.getElementById('submitCalcButton').addEventListener('click', () => {
      let indexFloor = document.querySelector('.checkFloor').value;
      switch (indexFloor) {
        case 'man': console.log('Выбранно: man'); break;
        case 'gerl': console.log('Выбранно: gerl'); break;
      }
    })
  }

  return(
    <main>
      <section className={styles.SCalc}>
        <h1>Калькулятор калорий</h1>

        <form className={styles.calculator}>
          
          <div className={styles.formFloor}>
            <h3>Выберите пол:</h3>
            
            <div className={styles.inputFloor}>
              <input className='checkFloor' id='man' type="radio" name='floor' value='man' />
              <label htmlFor="man">Мужской</label>
            </div>
            
            <div className={styles.inputFloor}>
              <input className='checkFloor' id='gerl' type="radio" name='floor' value='gerl' />
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

          <button id={styles.submitCalcButton} type='submit' onClick={calculator}>Расчитать каллории</button>

        </form>

      </section>
    </main>
  )
}

export default Calc;