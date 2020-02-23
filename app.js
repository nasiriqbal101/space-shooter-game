window.onload = () => {

// console.log("connected");

const heroElement = document.getElementById("hero");
// console.log(heroElement);
// const enemyElement = document.getElementsByClassName("enemy");
// console.log(enemyElement);
// const missilesElement = document.getElementById("missiles");
// console.log(missilesElement);


//to know where everysingle missile is 
let missile = [];

//in order to move the ship, it is important to know where the ship.
//so created an object  called hero, and given it the name and value.
//the given property would indicante the missile position
const hero = {
    left: 550,
    top: 450
};

// document is an object that is to do things like .onkeydown.
//below little block of code allows  to chekc this thing e., e is a varialble
//any key is pressed on keybaord this little block will run
//the onkeydown event is fired only once, when a key is pressed down.
// To get the pressed key, use the keyCode
document.onkeydown = e => {
    e.preventDefault();
    // console.log(e);

    if (e.keyCode === 37) {
        console.log("left");
        // console.log(heroElement.style.left);
        // remove the px from the .style.left when you get it
        // then - 20
        // then set it back with px on the end
        hero.left = hero.left -20;
        heroElement.style.left = hero.left + "px";
        moveHero();
    }
    else if (e.keyCode === 39) { 
        console.log("right");
        hero.left = hero.left +20;
        heroElement.style.left = hero.left + "px";
        moveHero();

    }
    else if (e.keyCode === 32) {
        console.log("fire")
        //addding an object to push method, so it will indicate position 
        //of missile when release
        //give the same location as hero but added 15 to left
        //so the missile draw and move from the begining of the hero position
        missiles.push({
            left: hero.left + 15,
            top: hero.top
           
        })
      
        drawMissiles()
        // console.log(missiles);
     }

    }

    const moveHero = () => {
        document.getElementById('hero').style.left = hero.left + "px";
    }

    const drawMissiles = () => {
        alert('drawMissles invoked');
    document.getElementById('missiles').innerHTML = "";
    for ( let missile = 0; missile < missiles.lenght; missile =
        missile + 1) {
            document.getElementById('missiles').innerHTML +=
            `<div class='missile' style='left:${missiles[missile].left}px;
            top:${missiles[missile].top}px;'> </div>`;
        }

     }


}