window.onload = () => {

    const heroElement = document.getElementById("hero");
    
    //to know where everysingle missile is 
    let missiles = [];

    let enemies = [
        { left: 300, top: 50 },
        { left: 400, top: 50 },
        { left: 500, top: 50 },
        { left: 600, top: 50 },
        { left: 700, top: 50 },
        { left: 300, top: 110 },
        { left: 400, top: 110 },
        { left: 500, top: 110 },
        { left: 600, top: 110 },
        { left: 700, top: 110 },
    ]

    const hero = {
        left: 550,
        top: 450
    };

    document.onkeydown = e => {
        e.preventDefault();
        // console.log(e);

        if (e.keyCode === 37) {
            hero.left -= 20;
            heroElement.style.left = hero.left + "px";
            moveHero();
        }
        else if (e.keyCode === 39) {
            // console.log("right");
            hero.left += 20;
            heroElement.style.left = hero.left + "px";
            moveHero();

        }
        else if (e.keyCode === 32) {
            // console.log("fire")
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
        document.getElementById('missiles').innerHTML = "";
        for (let missile = 0; missile < missiles.length; missile += 1) {

            document.getElementById('missiles').innerHTML +=
                `<div class='missile' style='left:${missiles[missile].left}px;
            top:${missiles[missile].top}px;'> </div>`;
        }
    }

    moveMissiles = () => {
        for (let missile = 0; missile < missiles.length; missile = missile + 1) {
            missiles[missile].top = missiles[missile].top - 5;
        }
    }

    drawEnemies = () => {
        document.getElementById('enemies').innerHTML = "";
        for (let enemy = 0; enemy < enemies.length; enemy =
            enemy + 1) {
            document.getElementById('enemies').innerHTML +=
                `<div class='enemy' style='left:${enemies[enemy].left}px;
            top:${enemies[enemy].top}px;'> </div>`;
        }
    }

    moveEnemies = () => {
        let value = 5
        if (enemies[0].top >= 300) {
            value = 0
        }
        for (let enemy = 0; enemy < enemies.length; enemy += 1) {
            enemies[enemy].top = enemies[enemy].top + value;
        }
    }

    collisionDetection = () => {
        for (let enemy = 0; enemy < enemies.length; enemy += 1) {
            for (let missile = 0; missile < missiles.length; missile += 1) {
                // alert("hay")
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
    //mili seconds, 100
    gameLoop = () => {
        setTimeout(gameLoop, 50)
        //  console.log("Game loop")
        drawMissiles();
        moveMissiles();
        drawEnemies();
        moveEnemies();
        collisionDetection();
    }
    gameLoop();
}
