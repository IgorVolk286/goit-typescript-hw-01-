import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "hello!");
  });
}

function Friend(user) {
  return <div>{user ? <p> Hello, {user} !</p> : <p> Hello, Guest!</p>} </div>;
}
