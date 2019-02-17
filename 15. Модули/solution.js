import square from './square';
import getTriangleArea from './myMathModule.js';
// BEGIN (write your solution here)
const solution = (n) => {
  return getTriangleArea(n, square(n) / 2);
}
// END
export default solution;