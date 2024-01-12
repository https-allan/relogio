const time = document.querySelector('#time');

function formatNumber (numero) {
    return numero <= 10 ? `0${numero}` : numero;
}

function updateClock () {
    const data = new Date();

    const horas = formatNumber(data.getHours());
    const minutos = formatNumber(data.getMinutes());
    const segundos = formatNumber(data.getSeconds());

    time.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(updateClock, 1000);

updateClock();