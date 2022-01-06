import { randomize } from "../functions/arrays";
import AnswerModel from "./answer";

export default class QuestionModel {
  #id: number
  #question: string
  #answers: AnswerModel[]
  #correct: boolean

  constructor(id: number, question: string, answers: AnswerModel[], correct: boolean) {
    this.#id = id;
    this.#question = question;
    this.#answers = answers;
    this.#correct = correct;
  }

  get id() {
    return this.#id;
  }

  get question() {
    return this.#question;
  }

  get answers() {
    return this.#answers;
  }

  get correct() {
    return this.#correct;
  }

  get answered() {
    for(let answer of this.#answers) {
      if(answer.revealed) return true;
    }
    return false;
  }

  replyWith(index: number): QuestionModel {
    const answeredCorrectly = this.#answers[index]?.correct;
    const answers = this.#answers.map((answer, i) => {
      const selectedAnswer = index === i;
      const shouldReveal = selectedAnswer || answer.correct;
      return shouldReveal ? answer.reveal() : answer;
    })
    return new QuestionModel(this.#id, this.#question, answers, answeredCorrectly);
  }

  randomizeAnswers(): QuestionModel {
    const answersRandomized = randomize(this.#answers);
    return new QuestionModel(this.#id, this.#question, answersRandomized, this.#correct);
  }

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: this.#answers.map(answer => answer.toObject()),
      answered: this.answered,
      correct: this.#correct
    }
  }
}