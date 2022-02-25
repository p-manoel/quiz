import type { NextPage } from 'next'
import { useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question'
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question'

const exampleMock = new QuestionModel(1, "Some question?", [
  AnswerModel.incorrect('answer 1'),
  AnswerModel.incorrect('answer 2'),
  AnswerModel.incorrect('answer 3'),
  AnswerModel.correct('answer 4'),
], false);


const Home: NextPage = () => {
  const [question, setQuestion] = useState(exampleMock);

  function onResponse(index: number) {
    setQuestion(question.replyWith(index));
    console.log(index);
  }

  function timeFinished() {
    if(!question.answered) setQuestion(question.replyWith(-1));
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Question value={question} timeForReply={5} onResponse={onResponse} timeFinished={timeFinished}/>
      <Button text="Next" href='/result'/>
    </div>
  )
}

export default Home
