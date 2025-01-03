let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
    let clutter = '';
    for (let i = 0; i < 126; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

function scoreValue() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
    let secTimer = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(secTimer);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener('click', function (dets) {
    let clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn) {
        makeBubble();
        getNewHit();
        scoreValue();
    }
});

getNewHit();
runTimer();
makeBubble();
