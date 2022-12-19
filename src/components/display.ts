interface IDisplayState {
  text: string;
}

export default class Display {
  // Queried by parent to create markup
  public static template = `<input class="myInput" type='number' \${value<==state.text} disabled />`;

  // Called by parent to create model
  public static create(state: IDisplayState): Display {
    return new Display(state);
  }

  public constructor(public state: IDisplayState) {}
}
