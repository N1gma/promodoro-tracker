// your code is here
function sum(a, b) {
    return validateInput(a, b) ? 'Error, operands should be numbers!' : a + b;
}
function sub(a, b) {
    return validateInput(a, b) ? 'Error, operands should be numbers!' : a - b;
}
function mul(a, b) {
    return validateInput(a, b) ? 'Error, operands should be numbers!' : a * b;
}
function div(a, b) {
    return validateInput(a, b) ? 'Error, operands should be numbers!' : a / b;
}
function rem(a, b) {
    return validateInput(a, b) ? 'Error, operands should be numbers!' : a % b;
}

var calculations = {
    '+': sum,
    '-': sub,
    '*': mul,
    '/': div,
    '%': rem
};


function validateInput(a, b) {
    return ((isNaN(parseFloat(a)) && !isFinite(a)) || (isNaN(parseFloat(b)) && !isFinite(b))) || !(typeof (a) == 'number' && typeof (b) == 'number');
}

function calculate(operator, a, b) {
    return calculations[operator] ? calculations[operator](a, b) : 'Error, unsupported operation!';
}
