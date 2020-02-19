let hero = {
    top: 470,
    left: 500
}

var missiles = [];

var enemies = [
    { left: 200, top: 20 },
    { left: 300, top: 20 },
    { left: 400, top: 20 },
    { left: 500, top: 20 },
    { left: 600, top: 20 },
    { left: 700, top: 20 },
    { left: 800, top: 20 },
    { left: 900, top: 20 },
    { left: 200, top: 85 },
    { left: 300, top: 85 },
    { left: 400, top: 85 },
    { left: 500, top: 85 },
    { left: 600, top: 85 },
    { left: 700, top: 85 },
    { left: 800, top: 85 },
    { left: 900, top: 85 }

];

document.onkeydown = function (e) {
    console.log(e.keyCode);

    if (e.keyCode === 37) {
        // console.log("LEFT");
        hero.left = hero.left - 15;
        moveHero();
    }
    else if (e.keyCode === 39) {
        // console.log("RIGHT");
        hero.left = hero.left + 15;
        moveHero();
    }
    else if (e.keyCode === 38) {
        // console.log("FIRE");
        missiles.push({
            left: hero.left + 20,
            top: hero.top
        })

        drawMissiles();
    }

    function moveHero() {
        // if style.left is < 0 
        // left = 0
        // else if style.left > window.width
        // left = window.width
        document.getElementById('hero').style.left = hero.left + "px";

    }

}
function drawMissiles() {

    document.getElementById('missiles').innerHTML = "";
    for (var missile = 0; missile < missiles.length; missile = missile + 1) {
        document.getElementById('missiles').innerHTML +=
            `<div class='missile' style='left:${missiles[missile].left}px; top:${missiles
            [missile].top}px;'></div>`;
        // missiles[missile].top
        // missiles[missile].left
    }
}

function moveMissiles() {
    for (var missile = 0; missile < missiles.length; missile =
        missile + 1) {
        missiles[missile].top = missiles[missile].top - 5;
    }
}

function drawEnemies() {
    document.getElementById('enemies').innerHTML = "";
    for (var enemy = 0; enemy < enemies.length; enemy = enemy + 1) {
        document.getElementById('enemies').innerHTML +=
            `<div class='enemy' style='left:${enemies[enemy].left}px; top:${enemies
            [enemy].top}px;'></div>`;
    }
}

function moveEnemies() {
    for (var enemy = 0; enemy < enemies.length; enemy =
        enemy + 1) {
        enemies[enemy].top = enemies[enemy].top + 2;
    }
}

function collisionDetection() {
    for (var enemy = 0; enemy < enemies.length; enemy =
        enemy + 1) { 
            for (var missile = 0; missile < missiles.length; missile =
            missile + 1) {
                console.log("enemies[enemy].top", enemies[enemy].top);
                if (
                    (missiles[missile].top <= enemies[enemy].top + 50) &&
                    (missiles[missile].top >= enemies[enemy].top) &&
                    (missiles[missile].left >= enemies[enemy].left) &&
                    (missiles[missile].left <= enemies[enemy].left + 50)

                    ) {
                    enemies.splice(enemy, 1);
                    missiles.splice(missile, 1);

                }
            }
        
    }

}
function gameLoop() {
    setTimeout(gameLoop, 50)
    moveMissiles();
    drawMissiles();
    moveEnemies();
    drawEnemies();
    collisionDetection();
 
}

gameLoop();

//move hero top/down
//move enemies left/right as they move down
//use different missiles
//add score

//overflown