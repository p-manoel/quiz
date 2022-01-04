export default class QuestionModel {
  #id: number
  #question: string
  #answers: any[]
  #correct: boolean

  constructor(id: number, question: string, answers: any[], correct: boolean) {
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
}