// while(true) {
//     calculator();
// }
calculator();
function calculator() {

    function askUserForInitialData(message) {
        return prompt(message);
    }

    const operator = askUserForInitialData('Enter operator (+-*/):');

    if(!checkIfOperatorIsValid(operator)) {
        showPopup('Please enter valid operator: +, -, * or /');
        return;
    }
    
    function checkIfOperatorIsValid(operator) {
        return (
            operator === '+' || operator === '-' ||  operator === '*' || operator === '/'
        );
    }

    const operand1 = +askUserForInitialData('Enter operand1 (any number):');
    const operand2 = +askUserForInitialData('Enter operand2 (any number):');
    // if(!checkIfOperandsAreValid(operand1, operand2)) {
    //     showPopup('Please enter valid operands: any numbers');
    // return;
    // }

    
    // function checkIfOperandsAreValid(operand1, operand2) {
    //     return (
    //         typeof operand1 === typeof 1 && typeof operand2 === typeof 1
    //     );
    // }

    function checkIfSecondOperandIsZeroOnDivision(operator, operand2) {
        return (
            operator === '/' && operand2 === 0
        );
    }

    if(checkIfSecondOperandIsZeroOnDivision(operator, operand2)) {
        showPopup('Cannot divide by zero');
        return;
    }

    let result;

    function dataProcessing(operator, operand1, operand2) {
        switch(operator) {
            case '+':
                result = operand1 + operand2;
                break
            case '-':
                result = operand1 - operand2;
                break
            case '*':
                result = operand1 * operand2;
                break
            case '/':            
                result = operand1 / operand2;
                break
        }
        showResult(operator, operand1, operand2, result);
    }
    
    function showResult(operator, operand1, operand2, result) {
        const message = `${operand1} ${operator} ${operand2} = ${result}`;
        showPopup(message);
    }

    function showPopup(message) {
        alert(message);
    }

    dataProcessing(operator, operand1, operand2);
}