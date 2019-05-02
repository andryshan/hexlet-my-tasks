/*squareOfSum.js
Реализуйте функцию squareOfSum, которая находит квадрат суммы двух чисел по формуле: a² + 2 * a * b + b².

squareOfSum(2, 3) // 25
squareOfSum(1, 10) // 121 */

const squareOfSum = (a, b) => {
  return a ** 2 + 2 * a * b + b ** 2; 
}

const result = squareOfSum(2, 3);
console.log(result);
// END

export default squareOfSum;