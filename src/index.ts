import { UI } from "@peasy-lib/peasy-ui";
import "./style.css";

import Container from "./components/Container";

const template = `
    <div class="container">
      <\${ Container === greet}>
    </div>
`;

let model = {};
Object.assign(model, {
  Container,
  greet: {
    self: model,
    name: "Mookie",
  },
});

UI.create(document.body, template, model);
UI.initialize(1000 / 60);
