var Player = function () {
  this.name;
  this.health = 100;
  this.attack = function (opponent) {
    var hitChance = Math.random();
    if (hitChance > .6) {
      opponent.health -= 10;
    } else {
      console.log(this.name + " missed!!!!");
    }
  };
  this.criticalHit = function (opponent) {
    opponent.health -= this.randomCrit();
  };
  this.randomCrit = function () {
    var max = 20;
    var min = 11;

    return Math.floor(Math.random() * (max - min) + min);
  }
};

//Create Player Instances
var p1 = new Player();
var p2 = new Player();

p1.name = "Darth Vader";
p2.name = "Skywalker";

p1.attack(p2);
console.log(p2.name + " was attacked and has " + p2.health + " health left");
Player.prototype.heal = function (player) {
  player.health += 5;
}
Player.prototype.emotionalAttack = function (player) {
  player.health -= 65;
}
p1.heal(p2);
console.log(p2.name + " was healed and has " + p2.health + " health left");

p2.criticalHit(p1);
console.log(p1.name + " was critically attacked and has " + p1.health + " health left");

p1.emotionalAttack(p2);
console.log(p1.name + " told " + p2.name + " the horrifying truth. " + p2.name + " couldn't handle the truth. NOOOOOOO!!!!");
console.log(p2.name + " has " + p2.health + " health left. Poor guy");








Player.criticalHit.call(p1, p2)
Player.attack.apply(p1, arguments)


