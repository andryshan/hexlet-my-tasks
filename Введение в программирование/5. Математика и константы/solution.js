/* eslint-disable no-console
Создайте константу weight, запишите в нее ваш вес в килограммах.
Создайте константу c, запишите в нее значение скорости света в вакууме в метрах в секунду: 300000000.
Вычислите значение энергии вашего тела с помощью знаменитой формулы E=mc2, где m — это ваш вес (weight), а c — это скорость света. Запишите значение в константу energy.
Подсказка: в JavaScript нет оператора ^ для возведения в квадрат, поэтому вам нужно будет придумать как возвести число в квадрат.
 */
 
const pi = 3.14; // eslint-disable-line

// BEGIN (write your solution here)
const weight = 70;
const c = 300000000;

const energy = weight * Math.pow(c, 2);
// END

export default energy;
console.info(`Your body energy is ${energy} joules. This is 1 / ${Math.round(389000000000000000000 / energy)} of the yearly world energy consumption. Woah!`);
