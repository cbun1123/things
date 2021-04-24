var clickTimer = 1000/25;
var checkTimer = 1000;
var checkFunc = function() {
  if (Game.hasBuff("Click frenzy") ||
      Game.hasBuff("Cursed finger") ||
      Game.hasBuff("Devastation") ||
      Game.hasBuff("Dragonflight") ||
      Game.hasBuff("Frenzy")) {
    clearInterval(timerId);
    timerId = setInterval(clickFunc, clickTimer);
  }
};
var clickFunc = function() {
  if (Game.hasBuff("Click frenzy") ||
      Game.hasBuff("Cursed finger") ||
      Game.hasBuff("Devastation") ||
      Game.hasBuff("Dragonflight") ||
      Game.hasBuff("Frenzy")) {
    Game.ClickCookie();
  } else {
    clearInterval(timerId);
    timerId = setInterval(checkFunc, checkTimer);
  }
};
var timerId = setInterval(checkFunc, checkTimer);
