function appendContent(value) {
  document.querySelector("#textbox").value += value;
}
function calc() {
  try {
    document.querySelector("#textbox").value = parseFloat(
      eval(document.querySelector("#textbox").value).toFixed(3)
    );
  } catch {
    document.querySelector("#textbox").value = "Error";
  }
}
function clearDisplay() {
  document.querySelector("#textbox").value = "";
}
function eraseLast() {
  let display = document.getElementById("textbox");
  display.value = display.value.slice(0, -1);
}
