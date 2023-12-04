type TPriority = number;
type TLetterPayload<T> = { letter: T; priority: TPriority };

export class ChristmasQueue<T> {
  #letters: TLetterPayload<T>[] = [];

  #sortLettersByPriority() {
    this.#letters.sort((a, b) => b.priority - a.priority);
  }

  enqueue(letter: T, priority: TPriority) {
    this.#letters.push({ letter, priority });
    this.#sortLettersByPriority();
  }

  dequeue() {
    if (this.isEmpty()) throw new Error("There are no letters in the queue!");
    return this.#letters.shift()?.letter;
  }

  isEmpty() {
    return this.#letters.length === 0;
  }
}
