const button = document.getElementById("toggleButton");
const body = document.body;
const modeText = document.getElementById("modeText");

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    button.textContent = "Switch to Light Mode";
    modeText.textContent = "Current Mode: Dark";
  } else {
    button.textContent = "Switch to Dark Mode";
    modeText.textContent = "Current Mode: Light";
  }
});
