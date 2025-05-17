function calculate() {
  const attempts = parseInt(document.getElementById('attempts').value);
  const result = document.getElementById('result');

  if (isNaN(attempts) || attempts <= 0) {
    result.innerHTML = "⛔ Please enter a valid number greater than 0.";
    return;
  }

  let message = "";

  if (attempts < 3) {
    message = "🔁 Keep going! You're just starting.";
  } else if (attempts < 10) {
    message = "🔥 You're on the way to success!";
  } else {
    message = "🏆 You're a master of persistence!";
  }

  result.innerHTML = `<strong>${attempts} attempts</strong><br>${message}`;
}
