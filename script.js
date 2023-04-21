const up = document.getElementById('plus');
const dwn = document.getElementById('minus');
const start_btn = document.getElementById('start');
const reset_btn = document.getElementById('reset');
var h = document.getElementById("hour");
var m = document.getElementById("min");
var s = document.getElementById("sec");

var startTimer = null;

function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;
    }
    return;
}

start_btn.addEventListener('click', () => {
    startTimer = setInterval(() => {
        timer();
    }, 1000)
});

reset_btn.addEventListener('click', () => {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    clearInterval(startTimer);
});