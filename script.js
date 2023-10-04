const weight = document.getElementById('berat-badan');
const height = document.getElementById('tinggi-badan');
const result = document.getElementById('result');

const formBmi = document.getElementById('form-Bmi');

function countBmi(event) {
  event.preventDefault();
  const total = parseInt(weight.value) / Math.pow(parseInt(height.value) / 100, 2);

  displayResult(total, bmiCategory(total));
}

function bmiCategory(total) {
  if (total < 18.5) return 'Underweight';
  if (total >= 18.5 && total <= 24.9) return 'Normal Weight';
  if (total >= 25 && total <= 29.9) return 'Overweight';
  return 'Obesity';
}

function displayResult(total, category) {
  result.innerHTML = `Your BMI is ${total.toPrecision(3)} which means You are ${category}`;
}

formBmi.addEventListener('submit', countBmi);

function resetForm() {
  document.querySelector('form').reset();
}
