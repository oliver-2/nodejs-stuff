
function User(){
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer){
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }

}

var Jacob = new User();
var Rosie = new User();

Jacob.name = "Jacob";
Rosie.name = "Rosie";

Jacob.giveLife(Rosie);
console.log("Jacob: " + Jacob.life);
console.log("Rosie: " + Rosie.life);

// you can add functions to all objects
User.prototype.uppercut = function uppercut(targetPlayer){
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
};

// ex
Rosie.uppercut(Jacob);
console.log("Jacob: " + Jacob.life);
console.log("Rosie: " + Rosie.life);

// you can add properties to all objects
User.prototype.magic = 60;
console.log("Jacob: " + Jacob.magic);
console.log("Rosie: " + Rosie.magic);

