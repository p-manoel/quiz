import styles from "../styles/Question.module.css";
import QuestionModel from "../model/question";
import Utterance from "./Utterance";
import Answer from "./Answer";

const alternatives = [
  { value: 'A', color: '#F2C866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85DAF2' },
  { value: 'D', color: '#BCE596' },
];

interface QuestionProps {
  value: QuestionModel
  onResponse: (index: number) => void
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  function renderAnswers() {
    return question.answers.map((answer, i) => {
      return <Answer 
        key={i}
        value={answer}
        index={i}
        alternative={alternatives[i].value}
        backgroundColorAlternative={alternatives[i].color}
        onResponse={props.onResponse}
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