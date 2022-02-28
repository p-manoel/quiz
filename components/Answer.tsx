import styles from "../styles/Answer.module.css";
import AnswerModel from "../model/answer"

interface AnswerProps {
  value: AnswerModel
  index: number
  alternative: string
  backgroundColorAlternative: string
  onResponse: (index: number) => void
}

export default function Answer(props: AnswerProps) {
  const answer = props.value;
  const revealedAnswer = answer.revealed ? styles.revealedAnswer : '';

  return (
    <div className={styles.answer} onClick={() => props.onResponse(props.index)}>
      <div className={ `${revealedAnswer} ${styles.answerContent}` }>
          <div className={styles.front}>
            <div className={styles.alternative}
              style={{ backgroundColor: props.backgroundColorAlternative }}
            >
              {props.alternative}
            </div>
            <div className={styles.value}>
              {answer.value}
            </div>
          </div>
          <div className={styles.back}>
            {answer.correct ? (
              <div className={styles.correct}>
                <div>CORRECT!!!</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            ) : (
              <div className={styles.incorrect}>
                <div>INCORRECT :(</div>
                <div className={styles.value}>{answer.value}</div>
              </div>
            )}
          </div>
      </div>
    </div>
  )
}