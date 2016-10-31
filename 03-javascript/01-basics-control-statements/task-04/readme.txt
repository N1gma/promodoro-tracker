DESCRIPTION:

Note: this is optional task. But is is good for you to implement it and to get feedback and so become more experienced one.
Using calculate method (includes automatically), implement function calcExpression which can takes tring with an expression as an operand and return the result of arithmetic operations:
-	If expression is not a string or can't be parsed to 'OperandA' 'Operation' 'OparendB' form, it has to return 'Error, expression is wrong!'
-	If it can be parsed it should return either the result or any of the error returned by calculate function
-	User should be able to put [], {}, Boolean values, etc by mistake and receive an error message back
-	User should be able to provide only one argument or forget to provide operation and receive an error message back
-	User should be able to choose whether to put spaces between operands and operation

Example:
calcExpression('1+2')    // 3;
calcExpression('22 % 5') // 2;
calcExpression('2 + {}') // 'Error, operands should be numbers!';


REQUIREMENTS:

You have ready html with the task.
On the bottom you will see test board.
Each task has it own tests.
Red – means test failed, green – test is OK.
In the beginning you have all tests Red. The result is achieved when all tests are green.

Remember, tests check by values, if you made a mistake in output string or method name test would fail

Code duplication is forbidden
Usage of 'eval' or 'new Function' is forbidden


WORKFLOW:

Commit implemented task to git into
branch "03-javascript"
folder "03-javascript/01-basics-control-statements/task-04”

Structure of the task should be:

<task folder>
\---tests.js
\---script.js
\---index.html


SOURCES:

<task folder>
\---tests.js
\---script.js
\---index.html


DEADLINE:

Due Date - 03-11-2016 23:59
Penalty - minus 1 score for each overdue day
