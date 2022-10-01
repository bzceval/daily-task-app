import { errorMessage } from "./app.js";

export const error = (msg) => {
  errorMessage.innerHTML = msg;
  errorMessage.style.left = "0";
  setTimeout(() => {
    errorMessage.style.left = "-1000px";
  }, 2000);
};