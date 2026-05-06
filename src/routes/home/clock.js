
export function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;

    const timeString = `${hour} : ${minutes} : ${second}`;
    // document.getElementById("clock").textContent = timeString;
}
updateClock();
setInterval(updateClock, 1000);