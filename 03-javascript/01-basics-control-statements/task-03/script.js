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
        if((valid = !isNaN(+arguments[i]) && isFinite(arguments[i]) && typeof(arguments[i])=='number' && arguments[i]!=0)==false){
            return false;
        }
    }
    return  true;
}


function multiplyTable(firstNumber,secondNumber,size) {
    if(validateInput(firstNumber,secondNumber,size)){
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
    } else{
        return 'Error, one of arguments is not a number!';
    }
}


function multiplyView(table) {
    if(Array.isArray(table)){
        var tableToString ='';
        table[0][0] = '';
        for(var i =0;i<table.length;i++){
            tableToString += table[i].join(" ");
            if(i!=table.length-1){
                tableToString += '\n';
            }
        }
        return tableToString;
    }else{
        return 'Error, argument is not an array!';
    }

}

