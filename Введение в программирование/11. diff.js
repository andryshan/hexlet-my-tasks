const diff = (angle1, angle2) => {
  if(angle2-angle1 >= 180){
    return Math.abs(360 - angle2 + angle1);
  } else if(angle1 - angle2 >= 180) {
    return Math.abs(360 - angle1 + angle2);
  } else {
    return angle2 - angle1;
  }
}
diff(225, 0);

/*diff.js
Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160; 

expect(diff(225, 0)).toBe(135);

*/
