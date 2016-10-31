DESCRIPTION:

Implement function which returns an array which contains results of multiplifying argument on numbers from 1 to 9
multiplyTableToArray(4) // [4, 8, 12, 16, 20, 24, 28, 32, 36]

If argument is not a number, it should return an error string ‘Error, argument is not a number’

Than implement function which takes three arguments – the first number, the second number and size for Multiply Table and return ‘two dimensional’ array with multiply table
multiplyTable(1, 3, 4), the result must looks like
    [[null, 1, 2, 3, 4],
    [3, 3, 6, 9, 12],
    [4, 4, 8, 12, 16],
    [5, 5, 10, 15, 20],
    [6, 6, 12, 18, 24]]

Than implement function which takes the result of previous function and return it’s string equivalent: (null should become a space character, end of lines – \n symbol – new line)
multiplyView(multiplyTable(3, 5, 4))) should return: (the first symbol is space)
' 3 4 5 6\n5 15 20 25 30\n6 18 24 30 36\n7 21 28 35 42\n8 24 32 40 48';



REQUIREMENTS:

You have ready html with the task.
On the bottom you will see test board.
Each task has it own tests.
Red – means test failed, green – test is OK.
In the beginning you have all tests Red. The result is achieved when all tests are green.

Remember, tests check by values, if you made a mistake in output string or method name test would fail


WORKFLOW:

Commit implemented task to git into
branch "03-javascript"
folder "03-javascript/01-basics-control-statements/task-03”

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
