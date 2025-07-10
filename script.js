let images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg',
    'images/10.jpg',
    'images/11.jpg',
    'images/12.jpg',
    'images/13.jpg',
    'images/14.jpg'
];

let nicknames = [
    '@daria.bobok',
    '@jjulliaas',
    '@sashinka.a',
    '@ane.silia',
    '@stroinnn2',
    '@vuldweer',
    '@__.unearthly.__',
    '@isophla',
    '@dianabashuk',
    '@samoyluk.vi',
    '@lizaveta_chuk',
    '@yana.stepanenk0',
    '@liza_ochkas_'
];

let currentIndex = 1;
let kingImg = images[0];
let kingNick = nicknames[0];

const leftImg = document.getElementById('leftImg');
const rightImg = document.getElementById('rightImg');
const winnerImg = document.getElementById('winnerImg');

const leftNick = document.getElementById('leftNick');
const rightNick = document.getElementById('rightNick');

function showBattle() {
    if (currentIndex === 12) {
        alert("Ты знаешь кого выбрать) 👀");
    }

    if (currentIndex >= images.length) {
        document.getElementById('battle').style.display = 'none';
        document.getElementById('controls').style.display = 'none';
        document.getElementById('winner').style.display = 'block';
        winnerImg.src = kingImg;
        return;
    }

    leftImg.src = kingImg;
    leftNick.textContent = kingNick;

    rightImg.src = images[currentIndex];
    rightNick.textContent = nicknames[currentIndex];
}

document.getElementById('chooseL').addEventListener('click', () => {
    currentIndex++;
    showBattle();
});

document.getElementById('chooseR').addEventListener('click', () => {
    kingImg = images[currentIndex];
    kingNick = nicknames[currentIndex];
    currentIndex++;
    showBattle();
});

showBattle();
