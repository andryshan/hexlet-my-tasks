/*squareOfSum.js
Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b².

squareOfSum(2, 3) // 25
squareOfSum(1, 10) // 121 */

// BEGIN (write your solution here)
const finalGrade = (exam, projects) => {
  if(exam > 90 || projects > 10){
    return 100;
  } else if(exam > 75 && projects >= 5){
    return 90;
  } else if(exam > 50 && projects >= 2){
    return 75;
  } else {
    return 0;
  }
}
// END
console.log(finalGrade(100, 12));  // 100
console.log(finalGrade(99, 0));    // 100
console.log(finalGrade(10, 15));   // 100
