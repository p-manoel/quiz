import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'Which is the biggest club in the world?', [
    AnswerModel.incorrect('VARmadrid'),
    AnswerModel.incorrect('LiveFOOL'),
    AnswerModel.incorrect('Manchester SHITy'),
    AnswerModel.correct('Barcelona'),
  ], false),
  new QuestionModel(2, 'Who is better than Penaldo?', [
    AnswerModel.incorrect('Lionel GOAT Messi'),
    AnswerModel.incorrect('WIZARD Ronaldinho'),
    AnswerModel.incorrect('Kylian TURTLE Mbappé'),
    AnswerModel.correct('All other alternatives'),
  ], false),
  new QuestionModel(3, 'Which is the smaller club in Premier League?', [
    AnswerModel.incorrect('Burnley'),
    AnswerModel.incorrect('Brentford'),
    AnswerModel.incorrect('Everton'),
    AnswerModel.correct('Chelsea'),
  ], false),
  new QuestionModel(4, 'Which is Penaldo\'s specialty?', [
    AnswerModel.incorrect('Head penalty'),
    AnswerModel.incorrect('Penalty outside the box'),
    AnswerModel.incorrect('Penalty inside the box'),
    AnswerModel.correct('All other penalty alternatives'),
  ], false),new QuestionModel(5, 'Who was the Ballon d\'or winner just because penalty goals?', [
    AnswerModel.incorrect('Cristiano Penaldo'),
    AnswerModel.incorrect('Pristiano Conaldo'),
    AnswerModel.incorrect('Penaldo'),
    AnswerModel.correct('All other alternatives'),
  ], false)
]

export default questions;