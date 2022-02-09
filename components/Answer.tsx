import styles from "../styles/Answer.module.css";
import AnswerModel from "../model/answer"

interface AnswerProps {
  value: AnswerModel
  index: number
  alternative: string
  colorAlternative: string
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;

  return (
    <div className={styles.answer}>
      <div className={styles.answerContent}>
        <div className={styles.front}>
          <div className={styles.alternative}>
            {props.alternative}
          </div>
          <div className={styles.value}>
            {answer.value}
          </div>
        </div>
        <div className={styles.back}>

        </div>
      </div>
    </div>
  )
}