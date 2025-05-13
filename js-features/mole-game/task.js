const getHole = index => document.getElementById(`hole${index}`); //получение инфы об элементах лунок
let dead = 0; //счетчик убитых кротов = 0
let lost = 0; //счетчик промахов = 0
const deadCounter = document.getElementById ('dead'); //нахожу элементы для вывода значений убийств
const lostCounter = document.getElementById ('lost'); //нахожу элементы для вывода значений промахов
for (let i=1; i<=9; i++) { //цикл проверяет все лунки
    const hole = getHole (i); //обработка клика от 1 до 9
    hole.onclick = function () { //нажатие на лунку
        if (hole.classList.contains ('hole_has-mole')) { //проверяет есть ли крот в нажатой лунке
            dead++; // прибавляет убийство
            deadCounter.textContent = dead; //обновление текста счетчика убийств
            hole.classList.remove ('hole_has-mole'); //убирает крота из лунки
            if (dead===10) {
                alert ('ПОБЕДА'); //Уведомление о победе
                resetGame ();
            }
        } else {
            lost++; // прибавляет промахи
            lostCounter.textContent = lost; // обновление счетчика промохов
            if (lost===5) {
                alert ('ПОРАЖЕНИЕ');
                resetGame ();
            }
        }
    };
}
function resetGame () {
    dead = 0; // обнуление убийств
    lost = 0; // обнудение промахов
    deadCounter.textContent = dead; // обнуление счетчика
    lostCounter.textContent = lost; // обнуление счетчика
    for (let i=1; i<=9; i++) {
      getHole(i).classList.remove('hole_has-mole'); //убирает крота из лунки при сбросе
    }
}
