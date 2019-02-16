// BEGIN (write your solution here)
const reverse = (str) => {
  let result = '';
  for(let i = str.length - 1; i >= 0; i--){
    result+= str[i];
  }
  return result;
}
// END

export default reverse;

//2 вариант с while
// BEGIN (write your solution here)
const reverse = (str) => {
  let result = '';
  let i = str.length - 1;
  while(i>= 0){
    result+= str[i];
    i--;
  }
  return result;
}
// END

export default reverse;
