// alert('Уважаемый проверяющий. Прошу повременить с проверкой до 12 числа, не успела доделать несколько скриптов для карусели на первой странице. Постараюсь все дописать к 12 числу. Спасибо за понимание!');


//-----бургер меню-----
let burgerIcon = document.querySelector('.burger-menu');
let burgerNav = document.querySelector('.burger__nav');
let burgerClose = document.querySelector('.burger-close');

burgerIcon.addEventListener('click', function () {
    burgerNav.classList.remove('burger-nav__disactive');
    burgerNav.classList.add('burger-nav__active');
});

burgerClose.addEventListener('click', function () {
    burgerNav.classList.add('burger-nav__disactive');
    burgerNav.classList.remove('burger-nav__active');
});

burgerNav.addEventListener('click', function (event) {
    let action = event.target;
    if (action.classList.contains('burger__nav')) {
        burgerNav.classList.add('burger-nav__disactive');
        burgerNav.classList.remove('burger-nav__active');
    }
});


//-------Карусель для блока Pets-------


//массив из карточек животных
let animPets = [
    `<div class="pet__box">
        <img src="./assets/images/giant-pandas.jpg" alt="pandas" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">giant Pandas</h2>
                <p class="pet__text">
                    Native to Southwest China
                </p>
            </div>
            <img src="./assets/icons/other/banana-bamboo_icon.svg" alt="banana" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">giant Pandas</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/eagles.jpg" alt="eagles" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Eagles</h2>
                <p class="pet__text">
                    Native to South America
                </p>
            </div>
            <img src="./assets/icons/other/meet-fish_icon.svg" alt="meet" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Eagles</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/gorillas.jpg" alt="gorillas" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Gorillas</h2>
                <p class="pet__text">
                    Native to Congo
                </p>
            </div>
            <img src="./assets/icons/other/banana-bamboo_icon.svg" alt="banana" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Gorillas</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/sloth.jpg" alt="sloth" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Two-toed Sloth</h2>
                <p class="pet__text">
                    Mesoamerica, South America
                </p>
            </div>
            <img src="./assets/icons/other/banana-bamboo_icon.svg" alt="banana" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Two-toed Sloth</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/cheetahs.jpg" alt="cheetahs" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">cheetahs</h2>
                <p class="pet__text">
                    Native to Africa
                </p>
            </div>
            <img src="./assets/icons/other/meet-fish_icon.svg" alt="meet" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">cheetahs</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/penguins.jpg" alt="penguins" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Penguins</h2>
                <p class="pet__text">
                    Native to Antarctica
                </p>
            </div>
            <img src="./assets/icons/other/meet-fish_icon.svg" alt="meet" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Penguins</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,


    `<div class="pet__box">
        <img src="./assets/images/chimpanzee.jpg" alt="chimpanzee" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Chimpanzee</h2>
                <p class="pet__text">
                    Native to Antarctica
                </p>
            </div>
            <img src="./assets/icons/other/meet-fish_icon.svg" alt="meet" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Chimpanzee</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `,
    `<div class="pet__box">
        <img src="./assets/images/alligator.jpg" alt="alligator" class="pet__img">
        <div class="pet-opacity__img"></div>
        <div class="pet-description__box">
            <div class="pet-description">
                <h2 class="pet__title">Alligator</h2>
                <p class="pet__text">
                    Native to Antarctica
                </p>
            </div>
            <img src="./assets/icons/other/meet-fish_icon.svg" alt="meet" class="img-description">
        </div>
        <div class="pet-text-hidden">
            <h2 class="pet__title">Alligator</h2>
            <p class="pet__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nesciunt quas, debitis, at ea
                eveniet aperiam officia cumque optio nostrum et voluptas magnam sint vel hic, veniam in
                quisquam
                ducimus!
                Quibusdam assumenda neque quam, veritatis quia molestiae, iure pariatur qui fugiat esse odio
                debitis iste tempore nam quisquam facere amet possimus eius! Nihil, cum odio facere fuga
                alias
                atque ex?
            </p>
        </div>
    </div>
    `

];

const petsWrap = document.querySelector('.pets__wrapper');
const arrowLeft = document.querySelector('.arrow-left__box');
const arrowRight = document.querySelector('.arrow-right__box');

let mooveAnim = true;
let petsQuantity = 6;
let isLessThan980 = false;
let isMoreThan980 = false;

if (document.documentElement.clientWidth <= 980) petsQuantity = 4;
if (document.documentElement.clientWidth >= 980) petsQuantity = 6;

function updatePets() {
    if (document.documentElement.clientWidth <= 980) {
        petsQuantity = 4;
        if (!isLessThan980) {
            createPetsItems();
            isLessThan980 = true;
            isMoreThan980 = false;
        }
    }

    if (document.documentElement.clientWidth >= 980) {
        petsQuantity = 6;
        if (!isMoreThan980) {
            createPetsItems();
            isLessThan980 = false;
            isMoreThan980 = true;
        }
    }
}

arrowRight.addEventListener('click', () => {
    if (mooveAnim) {
        mooveAnim = false;
        createPetsItems();
        mooveAnimPets('30%', '0%', 0);
        setTimeout(() => (mooveAnim = true), 750);
    }
});

arrowLeft.addEventListener('click', () => {
    if (mooveAnim) {
        mooveAnim = false;
        createPetsItems();
        mooveAnimPets('-30%', '0%', 0);
        setTimeout(() => (mooveAnim = true), 750);
    }
});

function mooveAnimPets(startX, midX, endX) {
    petsWrap.animate(
        [{
                transform: `translateX(${startX})`,
            },
            {
                transform: `translateX(${midX})`,
            },
            {
                transform: `translateX(${endX})`,
            },
        ], {
            duration: 700,
            easing: 'ease'
        }
    );
}

function createPetsItems() {
    petsWrap.innerHTML = ``;
    let content = [];

    for (let i = 0; content.length < petsQuantity; i++) {
        let item = getRandomPet();
        if (!content.includes(item)) {
            content.push(item);
        }
    }

    petsWrap.innerHTML = `
    ${content.join('')}
    `;
}

function getRandomPet() {
    return animPets[getRandomNumber(animPets.length)];
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
}

createPetsItems();

let resizeTimeout;

window.addEventListener('resize', (e) => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updatePets, 100);
});












// ------блок с отзывами карусель-------
let feedbackBoxes = document.querySelectorAll('.feedback__box');
// let rangeElem = document.querySelector('.testimonials__input-range[type="range"]');
let rangeElem = document.querySelector('.testimonials__input-range');
let testimonialsArea = document.querySelector('.testimonials__feedbacks');

let body = document.querySelector('body');

function mediaCarousel() {
    if (document.documentElement.clientWidth >= 1160) {
        let countMove = 25.5;
        rangeElem.addEventListener('input', function () {
            testimonialsArea.style.left = (-countMove * this.value) + '%';
        });
    } else {
        let countMove = 34.2;
        rangeElem.addEventListener('input', function () {
            testimonialsArea.style.left = (-countMove * this.value) + '%';
        });
    }
}
mediaCarousel();

// ------блок с отзывами попап для 640px-------

function mediaPopUp() {
    if (document.documentElement.clientWidth <= 999) {

        //здесь мы формируем попап
        let modalBackground = document.querySelector('.modal-window');
        let modalBox = document.querySelector('.modal-box');

        feedbackBoxes.forEach(function (box) {
            box.addEventListener('click', function () {
                modalBackground.classList.add('modal-window--active');
                modalBackground.classList.remove('modal-window--disactive');
                let contaner = box.cloneNode(true);
                modalBox.prepend(contaner);

                modalBackground.addEventListener('click', function () {
                    modalBackground.classList.remove('modal-window--active');
                    modalBackground.classList.add('modal-window--disactive');
                    contaner.remove();
                });
            });
        });


        //здесь мы скрываем все блоки с комментами кроме первых трёх
        for (let i = 0; i <= feedbackBoxes.length; i++) {
            let box = feedbackBoxes[i];
            if (i > 2) {
                box.classList.add('feedback__box--disactive');
            }
        }
    }
}
mediaPopUp();