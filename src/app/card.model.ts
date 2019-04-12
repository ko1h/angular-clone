export class Card {
  constructor (public image: string, public title: string) {      }
}
export class Task {
  public done: boolean = false;
  constructor(public description: string, public priority: number) {   }
}
