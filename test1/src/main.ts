import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <input type="text" id="searchField"></input>
    <h1 id="results"></h1>
  </div>
`;
