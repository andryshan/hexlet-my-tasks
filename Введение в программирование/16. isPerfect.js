const isPerfect = (number) => {
  var sum = 0;
  if(number === 1){
    return false;
  }
  for(let i = 1; i < number; i++){
    if(number % i === 0){
      sum += i;
    }
  }
  if(number / sum === 1){
    return true;
  } else {
    return false;
  }
}

isPerfect(496);

/*
isPerfect.js
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.
Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). 
Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.
*/