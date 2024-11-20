function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let expression = document.getElementById('display').value;

    // Replace certain functions with their respective JavaScript functions
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');
    expression = expression.replace(/log/g, 'Math.log10');

    // Replace degrees with radians for trigonometric functions
    expression = expression.replace(/(Math.sin|Math.cos|Math.tan)\(([^)]+)\)/g, function(match, func, arg) {
        return func + '(' + (parseFloat(arg) * Math.PI / 180) + ')';
    });

    try {
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
