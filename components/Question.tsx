import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Utterance from "./Utterance";
import Answer from "./Answer";

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return <Answer 
        key={i}
        value={answer}
        index={i}
        alternative='A'
        colorAlternative="#F2C866"
      />
    })
  }

  return (
    <div className={styles.question}>
      <Utterance text={question.question}/>
      {renderAnswers()}
    </div>
  )
}