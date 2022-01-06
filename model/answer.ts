export default class AnswerModel {
  #value: string
  #correct: boolean
  #revealed: boolean

  constructor(value: string, correct: boolean, revealed = false) {
    this.#value = value;
    this.#correct = correct;
    this.#revealed = revealed;
  }

  static correct(value: string) {
    return new AnswerModel(value, true);
  }

  static incorrect(value: string) {
    return new AnswerModel(value, false);
  }

  get value() {
    return this.#value;
  }

  get correct() {
    return this.#correct;
  }

  get revealed() {
    return this.#revealed;
  }

  reveal() {
    return new AnswerModel(this.#value, this.#correct, true)
  }

  toObject() {
    return {
      value: this.#value,
      correct: this.#correct,
      revealed: this.#revealed
    }
  }
}