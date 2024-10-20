function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    if (weight > 0 && height > 0) {
        const bmi = weight / ((height / 100) ** 2);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid values';
    }
}
