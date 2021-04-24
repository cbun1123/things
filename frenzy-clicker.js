var clickTimer = 1000/250;
var checkTimer = 1000;
var checkFunc = function() {
  if (Game.hasBuff('Click frenzy')) {
    clearInterval(timerId);
    timerId = setInterval(clickFunc, clickTimer);
  }
};
var clickFunc = function() {
  if (Game.hasBuff('Click frenzy')) {
    Game.ClickCookie();
  } else {
    clearInterval(timerId);
    timerId = setInterval(checkFunc, checkTimer);
  }
};
var timerId = setInterval(checkFunc, checkTimer);
