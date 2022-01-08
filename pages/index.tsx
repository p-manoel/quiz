import type { NextPage } from 'next'
import Question from '../components/Question'
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question'

const Home: NextPage = () => {
  const example = new QuestionModel(1, "Some question?", [
    AnswerModel.incorrect('answer 1'),
    AnswerModel.incorrect('answer 2'),
    AnswerModel.incorrect('answer 3'),
    AnswerModel.correct('answer 4'),
  ], false);

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Question value={example}/>
    </div>
  )
}

export default Home
