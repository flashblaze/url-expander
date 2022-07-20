import { render } from "preact";
import App from "./components";
import "./style.css";

render(<App />, document.getElementById("app") as HTMLElement);
