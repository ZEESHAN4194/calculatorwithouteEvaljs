function solveSingle(arr){
    arr = arr.slice();
    while(arr.length-1){
      if(arr[1] === '*') arr[0] = arr[0] * arr[2]
      if(arr[1] === '-') arr[0] = arr[0] - arr[2]
      if(arr[1] === '+') arr[0] = +arr[0] + (+arr[2])
      if(arr[1] === '/') arr[0] = arr[0] / arr[2]
      arr.splice(1,1);
      arr.splice(1,1);
    }
    return arr[0];
  }
  
  function solve(eq) {
  console.log(eq);
  let test = eq.split(/(\+|-)/g);
  console.log(test);
 
    let res = eq.split(/(\+|-)/g).map(x => x.trim().split(/(\*|\/)/g).map(a => a.trim()));
  
    res = res.map(x => solveSingle(x)); //evaluating nested * and  / operations.
    // console.log(res);
    return solveSingle(res) //at last evaluating + and -
    
    
  }
  solve("75/5+10-8+4*2");
//   console.log(); //6
//   console.log(eval("3 - 6 * 3 / 9 + 5")) //6