var clickTimer = 1000/25;
var checkTimer = 100;
var checkFunc = function() {
  if (Game.hasBuff("Click frenzy") ||
      Game.hasBuff("Cursed finger") ||
      Game.hasBuff("Devastation") ||
      Game.hasBuff("Dragonflight") ||
      Game.hasBuff("Frenzy") ||
      Game.hasBuff("Elder frenzy") ||
      Game.hasBuff("High-five") ||
      Game.hasBuff("Congregation") ||
      Game.hasBuff("Luxuriant harvest") ||
      Game.hasBuff("Ore vein") ||
      Game.hasBuff("Oiled-up") ||
      Game.hasBuff("Juicy profits") ||
      Game.hasBuff("Fervent adoration") ||
      Game.hasBuff("Manabloom") ||
      Game.hasBuff("Delicious lifeforms") ||
      Game.hasBuff("Breakthrough") ||
      Game.hasBuff("Righteous cataclysm") ||
      Game.hasBuff("Golden ages") ||
      Game.hasBuff("Extra cycles") ||
      Game.hasBuff("Solar flare") ||
      Game.hasBuff("Winning streak") ||
      Game.hasBuff("Macrocosm") ||
      Game.hasBuff("Refactoring") ||
      Game.hasBuff("Cosmic nursery")) {
    clearInterval(timerId);
    timerId = setInterval(clickFunc, clickTimer);
  }
};
var clickFunc = function() {
  if (Game.hasBuff("Click frenzy") ||
      Game.hasBuff("Cursed finger") ||
      Game.hasBuff("Devastation") ||
      Game.hasBuff("Dragonflight") ||
      Game.hasBuff("Frenzy") ||
      Game.hasBuff("Elder frenzy") ||
      Game.hasBuff("High-five") ||
      Game.hasBuff("Congregation") ||
      Game.hasBuff("Luxuriant harvest") ||
      Game.hasBuff("Ore vein") ||
      Game.hasBuff("Oiled-up") ||
      Game.hasBuff("Juicy profits") ||
      Game.hasBuff("Fervent adoration") ||
      Game.hasBuff("Manabloom") ||
      Game.hasBuff("Delicious lifeforms") ||
      Game.hasBuff("Breakthrough") ||
      Game.hasBuff("Righteous cataclysm") ||
      Game.hasBuff("Golden ages") ||
      Game.hasBuff("Extra cycles") ||
      Game.hasBuff("Solar flare") ||
      Game.hasBuff("Winning streak") ||
      Game.hasBuff("Macrocosm") ||
      Game.hasBuff("Refactoring") ||
      Game.hasBuff("Cosmic nursery")) {
    Game.ClickCookie();
  } else {
    clearInterval(timerId);
    timerId = setInterval(checkFunc, checkTimer);
  }
};
var timerId = setInterval(checkFunc, checkTimer);
