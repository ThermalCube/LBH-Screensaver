import $ from 'jquery'

$(function () {

  const multiplier = 5;

  const fps = 30;
  const w = 200;
  const h = 210;

  const app = $('#app');
  const logo = $('#logo');

  let x = 0;
  let y = 0;
  let dirX = 1;
  let dirY = 1;


  let troll = false;
  let ab = false;

  const baseFilter = logo.css('filter');

  function animate() {

    let changeColor = false;


    x += dirX;
    y += dirY;


    if ((x + dirX) < 0) {
      dirX = 1;
      changeColor = true;
    }

    if ((y + dirY) < 0) {
      dirY = 1;
      changeColor = true;
    }

    if (app.width() < (x + dirX + w)) {
      dirX = -1;
      changeColor = true;
    }

    if (app.height() < (y + dirY + h)) {
      dirY = -1;
      changeColor = true;
    }



    x += (dirX * multiplier);
    y += (dirY * multiplier);

    logo.css({
      top: y + 'px',
      left: x + 'px'
    });

    if (changeColor) {
      logo.css('filter', `hue-rotate(${Math.floor((Math.random() * 360))}deg) ${baseFilter}`);
    }

    if (troll) {
      app.css('background-color', ab ? '#00ff7f' : '#ff007f');
      ab = !ab;
    }



    setTimeout(() => {
      requestAnimationFrame(animate);
    }, 1000 / fps);
  }
  animate();



  logo.on('dblclick', function () {
    troll = !troll;
    app.css('background-color', '#000');
  });


});