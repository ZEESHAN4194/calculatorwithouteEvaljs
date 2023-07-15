var number = [];
var val = document.getElementById('screen');
var val1 = document.getElementById('screen1');
var val2 = document.getElementById('screen2');
var incre = 1;

function btnclick(p) {
    incre = 1;

    // console.log('ent',incre);
    let lastchr = val.value.slice(length - 1);
        // let lastchr = val.value.length;

  
   
    if (typeof (p) != "number") {
        // console.log('aya');
        if (lastchr != "number") {      
            console.log('last',lastchr);
            if (p == '*' || p == '/' || p == '+' || p == '-') {
                // console.log(lastchr);
                var newte =  val.value.slice(0, -1);
                val.value += newte;
                console.log(newte);
                //    incre = 0;
            }
            // incre = 0;
            // console.log(length);
            // val.value.slice(length, -1) + p;
        }
    }
    // if (p == '+') {   
    //     incre = 0;

    // }
    // console.log('ent',incre);
    if (incre == 1) {
        val.value += p;

    }
    console.log( val.value );
    // length = val.value.length;


    // console.log(val.value);
    // if (incre == 'one') {

    //     val.value += p;
    //     console.log(val.value);
    // }
    // if (incre == 'zero') {
    //     console.log('not enter');
    //     incre = 'one';
    //     val.value += p;
    // }
    //  console.log(val.value);





    // val.value.length
    // console.log(val.value);




    // if (p == '+' || p == '-' || p == '*' || p == '/') {
    //     // val.style.display = 'none';
    //     // val1.style.display = 'block';
    //     console.log('aya');
    //     val.style.display = 'none';
    //     val2.value = p;
    //     val2.style.display = 'block';

    //     val1.value = '';
    //     val1.style.display = 'none';

    // } else {
    //     val.style.display = 'none'
    //     val2.style.display = 'none';
    //     val1.style.display = 'block';
    //     val2.value = '';
    //     val1.value += p;
    //     // console.log('not sign');
    // }

    // console.log(val.value);

}

function equ() {
    // val1.style.display = 'none';
    // val2.style.display = 'none';

    if (val.value == '') {
        val.value = '';
        // console.log('test');
    }
    else {
        val.value = eval(val.value);
        // console.log(val.value);
    }
    // val.style.display = 'block';

    // console.log(val.value);
}

function clearbtn() {
    val.value = '';
    // val1.value = '';
    // val2.value = '';
    // val.style.display = 'none';
    // val1.style.display = 'block';
    // val2.style.display = 'none';
}

function cutbtn() {
    // val.value += p;
}