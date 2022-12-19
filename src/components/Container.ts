import Button from "./Button";
import Display from "./display";

interface IContainerState {
  name: string;
}

export default class Container {
  localNum: number = 0;
  // Queried by parent to create markup
  public static template = `
  <div class="UI">
    <p>Welcome \${name}</p>
    <\${Display === myDisplay}>
    <div class="buttonFlex">
      <\${Button === button} \${button <=* buttons}>
    </div>
    
  </div>`;

  private Button = Button;
  private Display = Display;

  private buttons = [
    { text: "Dec", click: () => this.buttonClick("dec") },
    { text: "Inc", click: () => this.buttonClick("inc") },
  ];

  private myDisplay = {
    text: "0",
  };

  // Called by parent to create model
  public static create(state: IContainerState): Container {
    return new Container(state.name, state);
  }

  public constructor(public name: string, public state: IContainerState) {}

  public buttonClick(action: string) {
    switch (action) {
      case "inc":
        this.localNum++;
        break;
      case "dec":
        if (this.localNum > 0) this.localNum--;
        break;
    }
    this.myDisplay.text = this.localNum.toString();
  }
}
