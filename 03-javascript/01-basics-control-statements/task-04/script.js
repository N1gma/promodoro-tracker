// your code is here

function calcExpression(exp) {
    if (typeof (exp) != 'string') return 'Error, expression is wrong!';
    var OperandA = '';
    var OperandB = '';
    var Operation = '';
    for (var i = 0; i < exp.length; i++) {
        if (!(calculations[exp.charAt(i)])) {
            OperandA += exp.charAt(i);
        } else {
            while (validateOperator(exp.charAt(i))) {
                Operation += exp.charAt(i);
                i++;
            }
            for (i; i < exp.length; i++) {
                OperandB += exp.charAt(i);
            }
        }
    }
    return (OperandA != '' && OperandB != '' && Operation != '') ? calculate(Operation, +OperandA, +OperandB) : 'Error, expression is wrong!';
}

function validateOperand(a) {
    return !isNaN(+a) && isFinite(a) && typeof(a) == 'number' && a > 0;
}

function validateOperator(a) {
    return calculations[a];
}


