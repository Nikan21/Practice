"use strict";
function dropBall(event) {
  function animate({ timing, draw, duration }) {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      let progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  const reverseBounce = makeEaseOut(bounce);
  const to = field.clientHeight - ball.clientHeight;

  animate({
    timing: reverseBounce,
    draw: function (progress) {
      ball.style.top = progress * to + "px";
    },
    duration: 3000,
  });

  function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
        return (
          -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        );
      }
    }
  }

  function makeEaseOut(timing) {
    return function (timeFraction) {
      return 1 - timing(1 - timeFraction);
    };
  }
}

ball.addEventListener("click", dropBall);
