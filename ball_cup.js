function moveBall(ballNumber) {
    let ball = document.getElementById('ball' + ballNumber);
    ball.style.bottom = '600px';
    setTimeout(function() {
      ball.style.bottom = '0';
    }, 500);
  }