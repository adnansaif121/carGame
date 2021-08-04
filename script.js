const car = document.getElementById('car');
const cone = document.getElementById('cone');
const rock = document.getElementById('rock');
const rock1 = document.getElementById('rock1');
const rock2 = document.getElementById('rock2');
const track = document.getElementById('track');
const h1 = document.getElementById('h1');
const score = document.getElementById('score');

document.addEventListener('keydown', (e) => {
    if(e.key === "ArrowUp" ){
        moveUp();
    }
    else if(e.key === "ArrowDown") {
        moveDown();
    }
})

const trackSpeed = 10;
car.style.top = '64vh';
function moveUp(){
    console.log('clicked');
    if(car.style.top === '79vh'){
        car.style.top = '64vh';
    }else if(car.style.top === '64vh'){
        car.style.top = '48vh';
    }else if(car.style.top === '48vh'){
        car.style.top = '36vh';
    }
    else{
        return;
    } 
}
function moveDown(){
    console.log('clicked');
    if(car.style.top === '36vh'){
        car.style.top = '48vh';
    }else if(car.style.top === '48vh'){
        car.style.top = '64vh';
    }else if(car.style.top === '64vh'){
        car.style.top = '79vh';
    }
    else{
        return;
    } 
}

let points = 0;
const hurdles = setInterval(myHurdles, 10000);
const game1 = setInterval(myTimer, 20);

function myTimer() {
    points+=1;
    let carPos = car.getBoundingClientRect();
    let carX = carPos.x;
    let carY = carPos.y;

    let conePos = cone.getBoundingClientRect();
    let coneX = conePos.x;
    let coneY = conePos.y;
    let rockPos = rock.getBoundingClientRect();
    let rockX = rockPos.x;
    let rockY = rockPos.y;
    let rock1Pos = rock1.getBoundingClientRect();
    let rock1X = rock1Pos.x;
    let rock1Y = rock1Pos.y;
    let rock2Pos = rock2.getBoundingClientRect();
    let rock2X = rock2Pos.x;
    let rock2Y = rock2Pos.y;
 
    score.innerText = points;
    if(((coneY-carY < 40 && coneY-carY > 0) && (coneX-carX < 257 && coneX-carX > 200)) || 
    ((rockY-carY < 40 && rockY-carY > 0) && (rockX-carX < 257 && rockX-carX > 200)) ||
    ((rock1Y-carY < 40 && rock1Y-carY > 0) && (rock1X-carX < 257 && rock1X-carX > 200)) ||
    ((rock2Y-carY < 40 && rock2Y-carY > 0) && (rock2X-carX < 257 && rock2X-carX > 200))) {
        h1.innerText = 'GAME OVER';   
        track.style.animationPlayState = 'paused';
        grass.style.animationPlayState = 'paused';
        myStopFunction();
    }
}
const hurdleY = [-10, 3, 19, 34];
cone.style.top = '19vh';
cone.style.left = '100vw';
rock.style.top = '34vh';
rock.style.left = '200vw';
rock1.style.top = '-10vh';
rock1.style.left = '300vw';
rock2.style.top = '34vh';
rock2.style.left = '500vw';
function myHurdles() {

    cone.style.top = `${hurdleY[RandomX()]}vh`;
    cone.style.left = `${RandomY()}vw`;
    
    rock.style.top = `${hurdleY[RandomX()]}vh`;
    rock.style.left = `${RandomY()}vw`;

    rock1.style.top = `${hurdleY[RandomX()]}vh`;
    rock1.style.left = `${RandomY()}vw`;

    rock2.style.top = `${hurdleY[RandomX()]}vh`;
    rock2.style.left = `${RandomY()}vw`;

}
const RandomX = () => {
    return Math.floor(Math.random() * 4);
}
const RandomY = () => {
    return Math.floor(Math.random() * 200) + 185 ;
}
function myStopFunction() {
    clearInterval(game1);
    clearInterval(hurdles);
  }

// cone values 
// values of top : [-10, 3, 19, 34];vh
// values of left: [185 - 600]; vw