import styles from '../styles/Quiz.module.css';
import QuestionModel from "../model/question";
import Question from './Question';
import Button from './Button';

interface QuizProps {
  question: QuestionModel
  isTheLastQuestion: boolean
  repliedQuestion: (question: QuestionModel) => void
  toNextStep: () => void
}

export default function Quiz(props: QuizProps) {

  function onResponse(index: number) {
    if(!props.question.answered) {
      props.repliedQuestion(props.question.replyWith(index));
    }
  }

  return (
    <div className={styles.quiz}>
      {props.question ? 
        <Question
          value={props.question}
          timeForReply={6}
          onResponse={onResponse}
          timeFinished={props.toNextStep}
        />
      : false}

      <Button
        onClick={props.toNextStep}
        text={props.isTheLastQuestion ? 'Finish' : 'Next'}  
      />
    </div>
  )
}