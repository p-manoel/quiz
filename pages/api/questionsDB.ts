import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'Which is the biggest club in the world?', [
    AnswerModel.incorrect('VARmadrid'),
    AnswerModel.incorrect('LiveFOOL'),
    AnswerModel.incorrect('Manchester SHITy'),
    AnswerModel.correct('Barcelona'),
  ], false),
  new QuestionModel(1, 'Who is better than Penaldo', [
    AnswerModel.incorrect('Lionel GOAT Messi'),
    AnswerModel.incorrect('WIZARD Ronaldinho'),
    AnswerModel.incorrect('Kylian TURTLE Mbappé'),
    AnswerModel.correct('All players above'),
  ], false)
]

export default questions;