// alert('Уважаемый проверяющий. Прошу повременить с проверкой до 12 числа, не успела доделать несколько скриптов для карусели на первой странице. Постараюсь все дописать к 12 числу. Спасибо за понимание!');



let inpAnothe = document.querySelector('.another-amount');
let points = document.querySelectorAll('.point');
let priseItems = document.querySelectorAll('.price-item');
let priseDollars = document.querySelectorAll('.price-dollar');
let circles = document.querySelectorAll('.active-elem');

//выделенная стоимость отображается в блоке Another amount
points.forEach(function (point) {
    point.addEventListener('click', function () {
        disactivePrise();
        let cost = parseInt(point.textContent);
        inpAnothe.value = cost;

        activePrise(point);
    });
});


//функция дизактивации всех поинтов
function disactivePrise() {
    priseItems.forEach(function (elem) {
        elem.classList.remove('active-item');
    });
    priseDollars.forEach(function (elem) {
        elem.classList.remove('active-dollar');
    });
    circles.forEach(function (elem) {
        elem.classList.remove('active-circle');
    });
}

//функция активации всех элементов одного поинта
function activePrise(element) {
    element.children[0].children[0].classList.add('active-circle');
    element.children[0].children[1].classList.add('active-circle');
    element.children[1].classList.add('active-item');
    element.children[1].children[0].classList.add('active-dollar');
}


const maxLength = +inpAnothe.dataset.maxlength;
//выведение значений введённых в инпут со значениями поинов
inpAnothe.addEventListener('input', function () {

    //сначала удаляем все активыне поинты, если они были выбраны
    disactivePrise();

    //задаём ограничение ввода количества символов
    if (inpAnothe.value.length >= maxLength - 1) {
        inpAnothe.value = inpAnothe.value.substring(0, maxLength);
    }
    //а теперь начинаем сравнение значений введённых в инпут со значениями поинов
    //если значение введённое в инпут совпадает с одним из поинтов, 
    //то этот поинт подсвечивается
    if (inpAnothe.value == 5000) {
        let fiveThousand = document.querySelector('.five-thousand');
        activePrise(fiveThousand);
    }

    if (inpAnothe.value == 2000) {
        let twoThousand = document.querySelector('.two-thousand');
        activePrise(twoThousand);
    }

    if (inpAnothe.value == 1000) {
        let oneThousand = document.querySelector('.one-thousand');
        activePrise(oneThousand);
    }

    if (inpAnothe.value == 500) {
        let fiveHundred = document.querySelector('.five-hundred');
        activePrise(fiveHundred);
    }

    if (inpAnothe.value == 250) {
        let twoHundredAndFifty = document.querySelector('.two-hundred-and-fifty');
        activePrise(twoHundredAndFifty);
    }

    if (inpAnothe.value == 100) {
        let hundred = document.querySelector('.hundred');
        activePrise(hundred);
    }

    if (inpAnothe.value == 50) {
        let fifty = document.querySelector('.fifty');
        activePrise(fifty);
    }

    if (inpAnothe.value == 25) {
        let twentyFive = document.querySelector('.twenty-five');
        activePrise(twentyFive);
    }

});