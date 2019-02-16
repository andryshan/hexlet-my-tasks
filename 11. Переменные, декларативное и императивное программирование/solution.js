// BEGIN (write your solution here)
const  smallestDivisor = (num) => {
  let div = 2;
  if(num < 1){
    return NaN;
  } else if(num === 1){
    return 1;
  } else {
    while(num%div !== 0){
      div += 1;
    }
    return div;
  }
}
// END

export default smallestDivisor;
