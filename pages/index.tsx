import type { NextPage } from 'next'
import { useState } from 'react';
import Button from '../components/Button';
import Question from '../components/Question'
import Quiz from '../components/Quiz';
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

  function repliedQuestion(question: QuestionModel) {

  }

  function toNextStep() {

  }

  return (
      <Quiz 
        question={question}
        isTheLastQuestion={false}
        repliedQuestion={repliedQuestion}
        toNextStep={toNextStep}
      />
  )
}

export default Home
