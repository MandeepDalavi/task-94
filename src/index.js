import "./scss/app.scss";
import Application from "./js/Application";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const app = new Application();
  // Used to access the app instance by the automated tests
  app.setEmojis(["🐒", "🦍", "🦧"]);
  app.addBananas();
  document.querySelector("#emojis").innerHTML = "";
  
  const emojiDiv = document.querySelector("#emojis");
  emojiDiv.appendChild(document.createElement("p").textContent = app.emojis);
  // emojiP.textContent = app.emojis;
  // emojiDiv.appendChild(emojiP);

  window.__JS_APP = app;
});
