import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Quiz from '../components/Quiz';
import QuestionModel from '../model/question';
import { useRouter } from 'next/router';

// const BASE_URL = 'http://localhost:3000/api'; // Local URL
const BASE_URL = 'https://quiz-six-blond.vercel.app/api'; // Vercel URL

const Home: NextPage = () => {
  const router = useRouter();

  const [questionsIds, setQuestionsIds] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);

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
    setQuestion(question);
    setCorrectAnswers(correctAnswers + (question.correct ? 1 : 0));
  }

  function nextQuestionId() {
    const nextIndex = question ? questionsIds.indexOf(question.id) + 1 : -1;
    return questionsIds[nextIndex];
  }

  function toNextStep() {
    nextQuestionId() ? goToTheNextQuestion(nextQuestionId()) : finishQuiz();
  }

  function goToTheNextQuestion(nextQuestionId: number) {
    loadQuestion(nextQuestionId);
  }

  function finishQuiz() {
    router.push({
      pathname: '/result',
      query: {
        total: questionsIds.length,
        corrects: correctAnswers
      }
    });
  }

  return question ? (
    <Quiz 
      question={question}
      isTheLastQuestion={nextQuestionId() === undefined}
      repliedQuestion={repliedQuestion}
      toNextStep={toNextStep}
    />
  ) : (
    <div>
      <h1>Error :(</h1>
    </div>
  );
      

}

export default Home
