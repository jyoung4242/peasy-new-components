export default class Button {
  // Queried by parent to create markup
  public static template = `<button class="myButton" \${click@=>click}>\${text}</button>`;

  // Called by parent to create model
  public static create(state: { text: string; click: Function }): Button {
    return new Button(state.text, state.click);
  }

  public constructor(public text: string, public click: Function) {}
}
