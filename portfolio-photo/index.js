import translate from './translate.js';


let menu = document.querySelector('.mobile-header__list');
let burger = document.querySelector('.page-header__contaner-burger');
let line__one = document.querySelector('.line__one');
let line__two = document.querySelector('.line__two');
let line__three = document.querySelector('.line__three');
let box__burger = document.querySelector('.page-header__contaner-burger');
let main = document.querySelector('.page-main');
let logo = document.querySelector('.page-header__contaner-logo');
let leng = document.querySelector('.page-header__contaner-leng');
let light = document.querySelector('.page-header__contaner-light');
let mobile__box = document.querySelector('.mobile-header');

let body = document.querySelector('body');
let titles = document.querySelectorAll('.box__titlebox-title');
let lines = document.querySelectorAll('.box__titlebox-line');
let scills = document.querySelector('.skillsboxes');
let btns_portfolio = document.querySelectorAll('.button__portfolio');
let prices = document.querySelectorAll('.pricebox__contaner');
let mobile_links = document.querySelectorAll('.mobile-header__list a');
let burger_lines = document.querySelectorAll('.burger-header__line');

burger.addEventListener('click', function () {

    menu.classList.toggle('mobile_active');
    line__one.classList.toggle('line__one_active');
    line__two.classList.toggle('line__two_active');
    line__three.classList.toggle('line__three_active');
    box__burger.classList.toggle('burger_active');
    leng.classList.toggle('opacity-header');
    light.classList.toggle('opacity-header');
    main.classList.toggle('opacity');
    logo.classList.toggle('opacity');

    if (menu.classList.contains('mobile_active') && light.classList.contains('light__sun')) {
        burger_lines.forEach(function (line) {
            line.style.background = "black";
        });
    } else {
        burger_lines.forEach(function (line) {
            line.style.background = "#FFFFFF";
        });
    }
});

mobile__box.addEventListener('click', function () {

    menu.classList.remove('mobile_active');
    line__one.classList.remove('line__one_active');
    line__two.classList.remove('line__two_active');
    line__three.classList.remove('line__three_active');
    box__burger.classList.remove('burger_active');
    leng.classList.remove('opacity-header');
    light.classList.remove('opacity-header');
    main.classList.remove('opacity');
    logo.classList.remove('opacity');
});

//смена темы для сайта
light.addEventListener('click', function () {
    light.classList.toggle('light__sun');

    if (light.classList.contains('light__sun')) {
        body.style.background = "#FFFFFF";
        scills.style.color = "black";
        menu.style.background = "#FFFFFF";

        titles.forEach(function (title) {
            title.style.background = "#FFFFFF";
            title.style.color = "black";
        });
        lines.forEach(function (line) {
            line.style.background = "black";
        });
        btns_portfolio.forEach(function (btn) {
            btn.classList.add('button__portfolio-light');

        });
        prices.forEach(function (price) {
            price.style.color = "black";
        });
        mobile_links.forEach(function (mobile_link) {
            mobile_link.style.color = "black";
        });


    } else {
        body.style.background = "black";
        scills.style.color = "#FFFFFF";
        menu.style.background = "black";

        titles.forEach(function (title) {
            title.style.background = "black";
            title.style.color = "#BDAE82";
        });
        lines.forEach(function (line) {
            line.style.background = "rgba(189, 174, 130, 1)";
        });
        btns_portfolio.forEach(function (btn) {
            btn.classList.remove('button__portfolio-light');

        });
        prices.forEach(function (price) {
            price.style.color = "#FFFFFF";
        });
        mobile_links.forEach(function (mobile_link) {
            mobile_link.style.color = "#FFFFFF";
        });
        burger_lines.forEach(function (burger_line) {
            burger_line.style.background = "#FFFFFF";
        });
    }
});

//смена картинок в портфолио
let portfolioBtn = document.querySelector('.portfolio__buttonbox-contaner');
let images = document.querySelectorAll('.gallery__image');
let gallery = document.querySelector('.portfolio__contaner-gallery');

portfolioBtn.addEventListener('click', function (event) {
    let action = event.target.dataset.season; //делегирование; переменной присваивается значение дата атрибута по которому будет совершён клик.
    images.forEach(function (img, i) {
        img.src = `./assets/img/${action}/${action}_${i+1}.jpg`;
    });
    gallery.dataset.season = `${action}`;
});

//смена цветов у кнопок
btns_portfolio.forEach(function (button) {
    button.addEventListener('click', function (event) {
        let action = event.target;
        if (action.classList.contains('button__portfolio') && light.classList.contains('light__moon')) {
            buttonDisactive();
            button.classList.add('button-active');
        }
        if (action.classList.contains('button__portfolio') && light.classList.contains('light__sun')) {
            buttonDisactive();
            button.classList.add('button-active-light');
        }
    });
});

function buttonDisactive() {
    for (let i = 0; i < btns_portfolio.length; i++) {
        btns_portfolio[i].classList.remove('button-active');
        btns_portfolio[i].classList.remove('button-active-light');
    }
}


//перевод страницы
let ru = document.querySelector('.leng-header__switch-ru');
let en = document.querySelector('.leng-header__switch-en');
let attributes = document.querySelectorAll('[data-translater]');
let phone = document.querySelector('.input-phone');
let textarea = document.querySelector('.textarea');
let headerList = document.querySelector('.menu-header__list');

ru.addEventListener('click', function () {
    ru.classList.remove('switch-off');
    ru.classList.add('switch-on');
    en.classList.remove('switch-on');
    en.classList.add('switch-off');
    phone.placeholder = 'Телефон';
    textarea.placeholder = 'Сообщение';
    headerList.classList.add('ru__list');

    for (let key in translate['ru']) {
        attributes.forEach(function (attr) {
            if (attr.dataset.translater === key) {
                attr.textContent = translate['ru'][key];
            }
        });
    }

});

en.addEventListener('click', function () {
    en.classList.remove('switch-off');
    en.classList.add('switch-on');
    ru.classList.remove('switch-on');
    ru.classList.add('switch-off');
    phone.placeholder = 'Phone';
    textarea.placeholder = 'Message';
    headerList.classList.remove('ru__list');
    for (let key in translate['en']) {
        attributes.forEach(function (attr) {
            if (attr.dataset.translater === key) {
                attr.textContent = translate['en'][key];
            }
        });
    }
});