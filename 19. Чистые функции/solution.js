/*solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая делает заглавной первую букву каждого слова в предложении.

solution('hello, world!'); // Hello, World!
Подсказки
Вычисление длины строки: length(str).
Перевод строки/буквы в верхний регистр: toUpperCase(str). */

import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let result = '';
  for(let i=0; i<str.length; i++){
    if(str[i] === str[0] || str[i - 1] === ' '){
      result+= str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
// END

export default solution;
