var number = [];
var input = '';
var answer = [];
var val = document.getElementById('screen');
var result = '';
numberArray = [];
var oprcheck = '';
var oprpr = 0;
var brakets = '';
var dividedByZero = 0;
var brlen = 0;
var temparr = [];
var temp_length = 0;
var chgtype = '';
var opvalid = true;
var brfirst = '';

function btnclick(p) {
    if (val.value == 'infinity') {
        val.value = '';
    }
    input += p;
    val.value += p;
    oprcheck = '';
    // console.log('btn', number);
    console.log('tb',input);

}

function addqu(e) {
    number.push(e);
    input = '';
}

function operatorclick(op) {
  
    // if( oprcheck.slice(1) !== "" && oprcheck.slice(-1) !== op ){
    //     alert('hhhhh');
    //  
    // }else{
    //     if (oprcheck.slice(1) !== "" || oprcheck.slice(-1) == '-' || oprcheck.slice(-1) == '+' || oprcheck.slice(-1) == '*' || oprcheck.slice(-1) == '/') {
    //         alert("You can't put operator after operator");
    //         opvalid = false;
    //         return;

    //     }
    // }
    if(number.includes('(') && brfirst + 1){
        if( op == '-'){
            input += '-';
            val.value += op;
            console.log('ts',input);
            return;
        }
       
    }
        if (oprcheck.slice(1) !== "" || oprcheck.slice(-1) == '-' || oprcheck.slice(-1) == '+' || oprcheck.slice(-1) == '*' || oprcheck.slice(-1) == '/') {
            alert("You can't put operator after operator");
            opvalid = false;
            return;
    
        }
       
    
    console.log('op2', opvalid);

    if (oprcheck.slice(-1) == op) {

        return;
    }

    if (op == '+' || op == '*' || op == '/') {
        if (val.value == '') {
            alert('not a valid Assign');
            return;
        }

    }

    if (op == '-' && val.value == '') {
        input += '-';
        val.value += op;
        return;
    }

    val.value += op;
    // console.log(number[0]);
    if (input != '') {
        addqu(Number(input));
    }

    addqu(op);
    oprcheck += op;
    console.log(number);


}

function brktclick(b) {
    oprcheck += b;
    console.log(oprcheck);
    val.value += b;

    if (b !== ')') {
        oprcheck += b;

        if (input !== '') {
            addqu(Number(input));
            input = '';
        }
        number.push(b);
    } else {
        brakets = b;
    }
    if (b == ')' && number !== '') {
        number.push(Number(input));
        number.push(')');
        input = '';
        brakets = '';
    }
    console.log(number);

}

function equ(value) {

    oprcheck = '';

    if (input !== "") {
        input = parseInt(input);
        addqu(input);
        console.log('hi');
    }

    if (brakets != '') {
        number.push(brakets);
        brakets = '';
    }

    if (number.length < 3) {
        alert('invalid expression');
        clearbtn();
    }

    console.log('num', number);

    // return false;

    //     let result = Function(" return " + val.value)();
    //     val.value = result;


    if (val.value == '') {
        val.value = '';

    }
    else {

        answer = value[0];
        // console.log(number);
        // input = parseFloat(input);
        // number.push(input);
        // console.log(number);
        // arr_length = number.length;



        //--------------------temp open------------------------------->
        console.log(value);

        if (number.includes("(") && number.includes(")")) {

            brfirst = number.indexOf("(");
            brlen = number.indexOf(")");
            if (typeof (number[brfirst - 1]) !== "string") {
                alert('you have to set operator before opening brakets');
                clearbtn();
                return false;
            }


            for (i = brfirst + 1; i < brlen; i++) {
                temparr.push(number[i]);
            }

            temp_length = temparr.length;
            // console.log('tere',temparr.length);
            // return false;

            // <--------------- divide-------------


            for (i = 0; i < temparr.length; i++) {

                if (temparr[i] === '/') {
                    if (temparr[i + 1] === 0) {
                        dividedByZero = 1;
                        console.log('hii', dividedByZero);
                    }
                    temp = temparr[i - 1] / temparr[i + 1];
                    // console.log(i-1); 
                    temparr.splice(i - 1, 3, temp);
                    i = 0;
                }

            }

            // <--------------- Multiply-------------


            for (i = 0; i < temparr.length; i++) {

                if (temparr[i] === '*') {
                    temp = temparr[i - 1] * temparr[i + 1];
                    // console.log(i-1); 
                    temparr.splice(i - 1, 3, temp);
                    i = 0;
                }
            }
            console.log('m', value);



            // <--------------- sub-------------


            for (i = 0; i < temparr.length; i++) {

                if (temparr[i] === '-') {

                    temp = temparr[i - 1] - temparr[i + 1];

                    temparr.splice(i - 1, 3, temp);
                    i = 0;
                }

            }


            // <--------------- add-------------
            // temparr
            for (i = 0; i < temparr.length; i++) {

                if (temparr[i] === '+') {
                    temp = temparr[i - 1] + temparr[i + 1];
                    temparr.splice(i - 1, 3, temp);
                    i = 0;
                }

            }






            // for (i = brfirst; i <= brlen; i++) {

            //     if (value[i] === '(' && value[i+2] === '+') {

            //         temp = value[i + 1] + value[i + 3];
            //         value.splice(i, 4, temp);

            //         console.log('first',value);
            //     }

            //     if( value[i+1] === '+' ){
            //         console.log('plusaya',i);
            //         console.log('plusaya',value[i]);
            //         temp = value[i - 1] + value[i + 3];
            //         console.log('tmp', temp);  
            //         value.splice(-i-3, 3);
            //     }

            //         if (value[i] === ')') {
            //             console.log(value[i-2]);


            //            i = 0;
            //                 value.splice(i-3, 4);

            //         }

            //         console.log('three', value);


            // }

            console.log('temparr', temp_length);
            chgtype = temparr[0];
            value.splice(brfirst, temp_length + 2, chgtype);



        } else if (number.includes("(") && !number.includes(")")) {
            alert("Invalid Expression");
            clearbtn();
            return;
        }
        console.log('bahar', value);

        if (!number.includes("(") && !number.includes(")")) {
            console.log('bina');
            for (i = 0; i < value.length; i++) {

                if (value[i] === '/') {
                    if (value[i + 1] === 0) {
                        dividedByZero = 1;
                        console.log('hii', dividedByZero);
                    }
                    temp = value[i - 1] / value[i + 1];
                    // console.log(i-1); 
                    value.splice(i - 1, 3, temp);
                    i = 0;
                }

            }
            console.log('d', value);
            for (i = 0; i < value.length; i++) {

                if (value[i] === '*') {
                    temp = value[i - 1] * value[i + 1];

                    // console.log(i-1); 
                    value.splice(i - 1, 3, temp);
                    i = 0;
                }
            }
            console.log('m', value);

            for (i = 0; i < value.length; i++) {

                if (value[i] === '-') {

                    temp = value[i - 1] - value[i + 1];

                    value.splice(i - 1, 3, temp);
                    i = 0;
                }

            }
            console.log('ad', value);


            for (i = 0; i < value.length; i++) {

                if (value[i] === '+') {
                    temp = value[i - 1] + value[i + 1];
                    value.splice(i - 1, 3, temp);
                    i = 0;
                }

            }

            console.log('ss', value);

            answer = value;


            //--------------------------temp close---------------------->

            //------------------------temp block------------------->

            // for (i = 2; i < value.length; i = i + 2) {

            // switch (number[i - 1]) {

            //     case '/': if (value[i] === 0) dividedByZero = 1;
            //         else answer = answer / value[i];
            //         break;

            //     case '*': answer = answer * value[i];
            //         break;

            //     case '+':
            //         answer += value[i];
            //         // console.log('eq', answer);
            //         break;

            //     case '-':
            //         answer -= value[i];
            //         console.log('eq', answer);
            //         break;
            // }
            // if (number[i] != '+') {
            //     result += number[i];
            //     console.log(typeof (number));
            // }

            // }
            //------------------------temp block------------------->





            if (dividedByZero === 1) {
                console.log('aya');
                clearbtn();
                val.value = "infinity";
                dividedByZero = 0;
            }
            else {
                // val.value = answer;
                // input = answer;
                number = [];

                // console.log(number);
                answer = (Math.round(answer * 100) / 100).toFixed(2);
                answer = Number(answer);

                val.value = answer;
                input = answer;

                console.log('typeinput', typeof (input));
            }

            // return false;
            // console.log(input);
            // input += p;
        }
    }


    // console.log(val.value);
}

function clearbtn() {
    val.value = '';
    number = [];
    input = '';
    answer = [];

}