// import styles for website
import "../scss/main.scss";

//import all js components
import User from "../components/User";

//do fun stuff here
const user = new User("Kamil");

const element = document.createElement("h1");
element.textContent = user.greet();
document.body.appendChild(element);
