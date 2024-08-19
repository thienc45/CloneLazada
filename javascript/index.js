
function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Thêm số 0 vào trước khi giờ, phút hoặc giây nhỏ hơn 10 để giữ định dạng 2 chữ số
    document.getElementById('hours').textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? "0" + seconds : seconds;
}


setInterval(updateTime, 1000);

updateTime();


var countdownTime = 63 * 60 + 20;
startTimer(countdownTime);
// Scroll potition fix header
