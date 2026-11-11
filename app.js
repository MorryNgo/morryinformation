const song = document.getElementById('song');
const thumb = document.querySelector('.thumb');
const playbtn = document.querySelector(".player-inner");
const forwardbtn = document.querySelector(".forward");
const backbtn = document.querySelector(".backward");
const menubtn = document.querySelector(".menu-icon");
const loopbtn = document.getElementById("loop");
const range = document.querySelector("body > div.music > input");

const menu = document.querySelector(".menu");
const textmenu = document.querySelector(".text-menu");
const infobutton = document.querySelector(".Info");
const musictext = document.querySelector(".music-text");
const infobutton2 = document.getElementById("Info2");
const musictext2 = document.getElementById("music-text2");

const bigbox = document.querySelector(".bigbox");
const musicbox = document.querySelector(".music");

const pic = [
    'https://github.com/MorryNgo/maru-pic/raw/main/01c426ef6f943b06ee6c03c8bc346440.jpg',
    './4ff757889616f9e8bb289520adeee7ef.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/093432e0832ead5a326201c764035b7b.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/072874bed077d999b4fb8c53425d55df.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/33efd99b23719a1421ab87d43b50afef.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/efc3f763258031a33191e386dbbd9f38.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/141b6dba6c5d5f52d58afb77842e05ad.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/7e3179ebda715fc4711b340ef48d5f85.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/animesher.com_gif-umaru-gif-anime-girl-gif-1428312.gif',
    'https://github.com/MorryNgo/maru-pic/raw/main/ee64c5e75782215af513e054bb434ded.jpg',
    'https://github.com/MorryNgo/maru-pic/raw/main/076aa527bb52f0ed75983c84467a9965.jpg'
];

const musics = [
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20T%C6%AF%C6%A0NG%20T%C6%AF%20%20CLOW%20X%20FLEPY%20ft%20DARKC%20%20Official%20Video%20(1).mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20%F0%9D%9A%82%F0%9D%9A%92%F0%9D%9A%96%F0%9D%9A%99%F0%9D%9A%95%F0%9D%9A%8E%20%F0%9D%9A%95%F0%9D%9A%98%F0%9D%9A%9F%F0%9D%9A%8E%20%20%F0%9D%9A%98%F0%9D%9A%8B%F0%9D%9A%92%F0%9D%9A%9D%F0%9D%9A%98%20%F0%9D%9A%86%F0%9D%99%BD%20%F0%9D%9A%9B%F0%9D%9A%8E%F0%9D%9A%96%F0%9D%9A%92%F0%9D%9A%A1%20%F0%9D%9A%98%F0%9D%9A%90%F0%9D%9A%8E%F0%9D%9A%97%F0%9D%9A%9E%F0%9D%9A%9C%20%20%F0%9D%9A%9C%F0%9D%9A%95%F0%9D%9A%98%F0%9D%9A%A0%F0%9D%9A%8E%F0%9D%9A%8D%20%20%F0%9D%9A%9B%F0%9D%9A%8E%F0%9D%9A%9F%F0%9D%9A%8E%F0%9D%9A%9B%F0%9D%9A%8B.mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20PRECIOUS%20%20DADUC%20x%20KIPER%20T%20%20OFFICIAL%20LYRIC%20VIDEO.mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20Wn%20%20Crush%20%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20.mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20n%E1%BB%A5%20c%C6%B0%E1%BB%9Di%20em%20l%C3%A0%20n%E1%BA%AFng%20%20green%20x%201%209%206%207%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3',
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20t%C3%ACnh%20ca%20t%C3%ACnh%20ta%20%20kis%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3",
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20Simple%20Love%20%20Obito%20x%20Seachains%20%20DuckV%20Remix.mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20WHEN%20YOU%20LOOK%20AT%20ME%20CM1X%20REMIX%20%20Obito%20x%20Seachains.mp3',
    'https://github.com/MorryNgo/morryinformation/raw/main/y2mate.com%20-%20Nger%20%20V%C6%B0%C6%A1ng%20Official%20Audio.mp3',
    'https://github.com/MorryNgo/morrydeptrai.com/raw/main/Tinh_Dang_Nhu_Ly_Cafe.mp3',
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com_-_Em_La_Nhat_Kis_x_Hoang_Kaylee_x_Yahy_x_ZeapleeLofi_Version_by_1_9_6_7_Audio_Lyrics_Video.mp3",
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20Deus%20%20B%C3%B4ng%20Hoa%20Ch%E1%BA%B3ng%20Thu%E1%BB%99c%20V%E1%BB%81%20Ta%20Wind%20Remix.mp3",
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20th%E1%BB%A9c%20gi%E1%BA%A5c%20%20da%20lab%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3",
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20ai%20%C4%91%C6%B0a%20em%20v%E1%BB%81%20%20tia%20x%20l%C3%AA%20thi%E1%BB%87n%20hi%E1%BA%BFu%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3",
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20gu%20%20freaky%20x%20seachains%20x%201%209%206%207%20%F0%9D%99%A8%F0%9D%99%A1%F0%9D%99%A4%F0%9D%99%AC%F0%9D%99%9A%F0%9D%99%99%20%20%F0%9D%99%A7%F0%9D%99%9A%F0%9D%99%AB%F0%9D%99%9A%F0%9D%99%A7%F0%9D%99%97%20flechazowu.mp3",
    './y2mate.com - Dù Cho Mai Về Sau Lofi Ver  buitruonglinh x Freak D.mp3',
    "https://github.com/MorryNgo/morrydeptrai.com/raw/main/y2mate.com%20-%20BERLIN%20%20Khoi%20Vu%20%20Official%20Lyrics%20Video.mp3",
    './y2mate.com - Không thuộc về  Minh Lý  Music Past live  Đúng vậy  em đẹp nhất trên thế gian này.mp3'
];

let menuwork = true;
let isPlaying = true;
let indexSong = 0;
let indexPic = 0;
let loopWorking = true;

forwardbtn.addEventListener('click', function() {
    changeSong(1);
    changethumb(1);
});

backbtn.addEventListener('click', function() {
    changeSong(-1);
});

function changeSong(dir) {
    if (dir === 1) {
        indexSong++;
        if (indexSong >= musics.length) indexSong = 0;
    } else if (dir === -1) {
        indexSong--;
        if (indexSong < 0) indexSong = musics.length - 1;
    }
    isPlaying = true;
    song.setAttribute("src", musics[indexSong]);
    playPause();
}

// Thay setInterval đổi ảnh bằng requestAnimationFrame hoặc interval nhẹ nhàng hơn tránh giật lag
setInterval(function() { changethumb(1); }, 3500);

function changethumb(a) {
    if (a === 1) {
        indexPic++;
        if (indexPic >= pic.length) indexPic = 0;
    } else if (a === -1) {
        indexPic--;
        if (indexPic < 0) indexPic = pic.length - 1;
    }
    thumb.setAttribute('src', pic[indexPic]);
}

playbtn.addEventListener("click", playPause);

function playPause() {
    if (isPlaying) {
        playbtn.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
        song.play().catch(() => {});
        isPlaying = false;
    } else {
        song.pause();
        playbtn.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
        isPlaying = true;
    }
}

loopbtn.addEventListener("click", loopfunc);

function loopfunc() {
    if (loopWorking) {
        loopbtn.style.color = "#f68157";
        song.loop = true;
        loopWorking = false;
    } else {
        loopbtn.style.color = "initial";
        song.loop = false;
        loopWorking = true;
    }
}

menubtn.addEventListener("click", menuexit);

function menuexit() {
    if (menuwork) {
        menubtn.innerHTML = '<ion-icon name="close-outline"></ion-icon>';
        menu.style.animation = 'openmenu 0.5s ease forwards';
        textmenu.style.animation = 'visibiletext 0.5s ease forwards';
        menuwork = false;
    } else {
        menubtn.innerHTML = '<ion-icon name="menu-outline"></ion-icon>';
        menu.style.animation = 'closemenu 0.5s ease forwards';
        textmenu.style.animation = 'hidetext 0.5s ease forwards';
        menuwork = true;
    }
}

if (infobutton) infobutton.addEventListener("click", () => changePage(1));
if (musictext) musictext.addEventListener("click", () => changePage(2));

function changePage(b) {
    if (b === 1) {
        bigbox.style.opacity = "1";
        bigbox.style.visibility = "visible";
        musicbox.style.opacity = "0";
        musicbox.style.visibility = "hidden";
    } else if (b === 2) {
        bigbox.style.opacity = "0";
        bigbox.style.visibility = "hidden";
        musicbox.style.opacity = "1";
        musicbox.style.visibility = "visible";
    }
}

if (infobutton2) infobutton2.addEventListener("click", () => changePagePc(1));
if (musictext2) musictext2.addEventListener("click", () => changePagePc(2));

function changePagePc(c) {
    changePage(c);
}

// Cập nhật thanh range mượt mà hơn bằng sự kiện timeupdate của audio thay vì setInterval liên tục
song.addEventListener("timeupdate", () => {
    if (!isNaN(song.duration)) {
        range.max = song.duration;
        range.value = song.currentTime;
    }
});

range.addEventListener("input", () => {
    song.currentTime = range.value;
});

// Tận dụng sự kiện 'ended' để xử lý khi bài hát kết thúc chính xác
song.addEventListener("ended", () => {
    if (!song.loop) {
        changeSong(1);
        changethumb(1);
    }
});

function musicfunction(event) {
    if (event.code === "Space") {
        event.preventDefault();
        playPause();
    } else if (event.code === "KeyA" || event.key === "ArrowLeft") {
        changeSong(-1);
    } else if (event.code === "KeyD" || event.key === "ArrowRight") {
        changeSong(1);
    } else if (event.code === "KeyF") {
        loopfunc();
    }
}