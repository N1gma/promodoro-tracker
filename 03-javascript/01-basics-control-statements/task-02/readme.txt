DESCRIPTION:

Implement methods for arithmetic operations (sum, sub, mul, div and rem).
Than combine them into an object with methods. I may be able to use it this way:
calculations[‘+’](1, 2) // 3

Than build upon this function, which can take operation as a string and two numbers and should return the following output:
-	calculate(‘+’, 2,  3);  // 5
-	calculate(‘-‘, 4,  1);   // 1
-	calculate(‘*’, 10, 2);  // 20
-	calculate(‘/’, 15,  3);  // 5
-	calculate(‘%’, 12  5);  //2
-	if parameters are not numbers, it should return string 'Error, operands should be numbers!'
-	if operation is not supported, it should return string 'Error, unsupported operation!'

During this task avoid code duplication. Use methods for creating an object and use this object in calculate method


REQUIREMENTS:

You have ready html with the task.
On the bottom you will see test board.
Each task has it own tests.
Red – means test failed, green – test is OK.
In the beginning you have all tests Red. The result is achieved when all tests are green.

Remember, tests check by values, if you made a mistake in output string or method name test would fail

Code duplication is forbidden


WORKFLOW:

Commit implemented task to git into
branch "03-javascript"
folder "03-javascript/01-basics-control-statements/task-02”

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