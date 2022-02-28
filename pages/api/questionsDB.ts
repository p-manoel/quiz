import AnswerModel from "../../model/answer";
import QuestionModel from "../../model/question";

const questions: QuestionModel[] = [
  new QuestionModel(1, 'What is the biggest stadium in Europe?', [
    AnswerModel.incorrect('Wembley Stadium'),
    AnswerModel.incorrect('Allianz Arena'),
    AnswerModel.incorrect('San Siro'),
    AnswerModel.correct('Camp Nou'),
  ], false),
  new QuestionModel(2, "How many Ballon d'Or does Lionel Messi have?", [
    AnswerModel.incorrect('3'),
    AnswerModel.incorrect('8'),
    AnswerModel.incorrect('5'),
    AnswerModel.correct('7'),
  ], false),
  new QuestionModel(3, 'In what year did Barcelona win their first champions league?', [
    AnswerModel.incorrect('1990'),
    AnswerModel.incorrect('2001'),
    AnswerModel.incorrect('1987'),
    AnswerModel.correct('1992'),
  ], false),
  new QuestionModel(4, 'Which country has won the most World Cups?', [
    AnswerModel.incorrect('Italy'),
    AnswerModel.incorrect('France'),
    AnswerModel.incorrect('England'),
    AnswerModel.correct('Brazil'),
  ], false),
  new QuestionModel(5, 'The Champions League has been won only once by a team from Romania. Can you name them?', [
    AnswerModel.incorrect('Feyenoord'),
    AnswerModel.incorrect('Hamburger SV'),
    AnswerModel.incorrect('Red Star Belgrade'),
    AnswerModel.correct('Steaua Bucharest'),
  ], false),
  new QuestionModel(6, 'Which team was the first from the UK to win the European Cup?', [
    AnswerModel.incorrect('Liverpool'),
    AnswerModel.incorrect('Aston Villa'),
    AnswerModel.incorrect('Nottingham Forest'),
    AnswerModel.correct('Celtic'),
  ], false),
  new QuestionModel(7, 'With three titles each, which two teams have won the most European Championships?', [
    AnswerModel.incorrect('Italy and France'),
    AnswerModel.incorrect('Portugal and Spain'),
    AnswerModel.incorrect('Germany and Italy'),
    AnswerModel.correct('Spain and Germany'),
  ], false),
  new QuestionModel(8, 'English rock star Elton John was twice the owner of which football club?', [
    AnswerModel.incorrect('Brentford'),
    AnswerModel.incorrect('West Ham'),
    AnswerModel.incorrect('Southampton'),
    AnswerModel.correct('Watford'),
  ], false)
]

export default questions;