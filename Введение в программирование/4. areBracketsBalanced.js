const areBracketsBalanced = (str) => {
  let sum = 0;
  if(str === ''){
    return true;
  }
  for(let i = 0; i < str.length; i++){
    if(str[i] === '('){
      sum+=1;
    } else if(str[i] === ')') {
      sum-=1;
    }
  }

  if(sum === 0){
    return true;
  } else {
    return false;
  }
}

//areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false

/*areBracketsBalanced.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false */