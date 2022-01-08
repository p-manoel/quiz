import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Utterance from "./Utterance";

interface QuestionProps {
  value: QuestionModel
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  return (
    <div className={styles.question}>
      <Utterance text={question.question}/>
    </div>
  )
}