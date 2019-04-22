// import styles for website
import './main.scss';

//import all js components
import User from './components/User.js';


//do fun stuff here
const user = new User('Kamil');

const element = document.createElement('h1');
element.textContent = user.greet();
document.body.appendChild(element);
