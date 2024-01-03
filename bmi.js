function calculateBMI() {
    var weight = document.getElementById('weightInput').value;
    var height = document.getElementById('heightInput').value;
    var messageElement = document.getElementById('message');

    if (weight <= 0 || height <= 0) {
        displayMessage("ENTER VALID DETAILS!");
    } else {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        if (bmi < 18.6) {
            displayMessage("Underweight");
        } 
         else if (bmi >= 18.6 && bmi < 24.9) {
            displayMessage("normal");
        }
        
        else
        {
            displayMessage("over weight");
        }
    }
}

function displayMessage(message) {
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;}