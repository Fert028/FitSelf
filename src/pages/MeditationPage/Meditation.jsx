import styles from './Meditation.module.scss';
import MeditationTimer from '../../Components/MeditationTimer';


function Meditation() {

  const inTime = document.getElementById('inTime').value;

  return(
    <main>
      <div className={styles.container}>
        <form name='formTimer' className={styles.formTimer}>
          <input id='inTime' type="number" name='inputTime' value='5' />
          <MeditationTimer timeMinute={inTime} />
        </form>
      </div>
    </main>
  )
}

export default Meditation;