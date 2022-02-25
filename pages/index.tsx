import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
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

const BASE_URL = 'http://localhost:3000/api'

const Home: NextPage = () => {
  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>(exampleMock);

  async function loadQuestionsIds() {
    const response = await fetch(`${BASE_URL}/questionary`);
    const ids = await response.json();
    setQuestionsIds(ids);
  }

  async function loadQuestion(questionId: number) {
    const response = await fetch(`${BASE_URL}/questions/${questionId}`);
    const jsonQuestion = await response.json();
    setQuestion(QuestionModel.toModel(jsonQuestion));
  }

  useEffect(() => {
    loadQuestionsIds();
  }, []);

  useEffect(() => {
    questionsIds.length > 0 && loadQuestion(questionsIds[0]);
  }, [questionsIds]);

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
