// console.log("connected");

const heroElement = document.getElementById("hero");
// console.log(heroElement);
const enemyElement = document.getElementById("enemy");
// console.log(enemyElement);
const missileElement = document.getElementById("missile");
// console.log(missilesElement);

let missile = [];

//in order to move the ship, it is important to know where the ship.
//so created an object  called hero, and given it the name and value.
const hero = {
    left: 550,
    top: 450
};

// document is an object that is to do things like .onkeydown.
//below little block of code allows  to chekc this thing e., e is a varialble
//any key is pressed on keybaord this little block will run
document.onkeydown = e => {
    e.preventDefault();
    console.log(e);

    if (e.keyCode === 37) {
        console.log("left");
        console.log(heroElement.style.left);
        // remove the px from the .style.left when you get it
        // then - 20
        // then set it back with px on the end
        hero.left = hero.left -20;
        heroElement.style.left = hero.left + "px";
    }
    else if (e.keyCode === 39) { 
        console.log("right");
        hero.left = hero.left +20;
        heroElement.style.left = hero.left + "px";

    }
    else if (e.keyCode === 32) {
        console.log("fire")
        missile.push({
            left: hero.left + 20,
            top: hero.top
        });
    }

}
