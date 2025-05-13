
const cookie = document.getElementById ('cookie');
const clickerCounter = document.getElementById ('clicker__counter');
let clickCount = 0;
let cookieSize = false; // (перекллючатель) начальный размер печеньки
cookie.onclick = function () { //обработчик
    clickCount++;
    clickerCounter.textContent = clickCount; //обновление текстового значения счетчика
    if (cookieSize) {
        cookie.width = 200; // если печенька большая, уменьшаем до 200
    } else {
        cookie.width = 250; // если печенька маленькая, увеличиваем до 250
    }
    cookieSize = !cookieSize; //переключатель размера на противоположный
};