// your code is here

function multiplyTableToArray(number) {
    if(validateInput(number)){
        var resultArray = [];
        for(var i = 0;i<9;i++){
            resultArray[i] = number *(i+1);
        }
        return resultArray;
    }else{
        return 'Error, argument is not a number!';
    }
}

function validateInput() {
    var valid ;
    for (var i = 0; i < arguments.length; ++i){
        //valid = !isNaN(+arguments[i]) && isFinite(arguments[i]) && typeof(arguments[i])=='number' && arguments[i]!=0;
        valid = !isNaN(parseFloat(arguments[i])) && isFinite(arguments[i]) && typeof(arguments[i])=='number' && arguments[i]!=0;
    }
    return  valid;
}

//console.log(multiplyTableToArray(0));

function multiplyTable(firstNumber,secondNumber,size) {
        size++;
        var table = [];
        for(var i = 0;i<size;i++){
            table[i] = [];
            for (var j = 0; j < size; j++) {
                table[i][j] = 0;
            }
        }
        //table outer sides
        for(i = 1;i<size;i++){
            table[i][0] = secondNumber + i-1;
        }
        for(i = 0;i<size;i++){
            table[0][i] = firstNumber + i-1;
        }
        table[0][0] = null;
        //fill table
        for(i=1;i<size;i++){
            for(j=1;j<size;j++){
                table[i][j]=table[i][0]*table[0][j];
            }
        }
        return table;
    /*}else{
        return 'Error, one of arguments is not a number!';
    }*/
}

console.log(multiplyTable(1,3,4));

function multiplyView(table1) {
    var tableToString ='';
    table1[0][0] = ' ';
    for(var i =0;i<table1.length;i++){
        tableToString += table1[i].join(" ");
        tableToString += '\n';
    }
    return tableToString;
}

//console.log(multiplyView(multiplyTable(3, 5, 4)));