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

  toObject() {
    return {
      id: this.#id,
      question: this.#question,
      answers: [],
      correct: this.#correct
    }
  }
}