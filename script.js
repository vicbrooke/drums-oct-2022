let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const sound = new Audio();
    sound.src = `./assets/${button.id}.wav`;
    sound.play();
  });
});
