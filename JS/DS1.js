
// http://darksouls.wikidot.com/soul-level

//0.02*x^3 + 3.06*x^2 + 105.6*x - 895

function soulCalc() {

    let numberPattern = /[0-9]+(\.[0-9]+)?/g; // this regex also includes floats but i forgot i only needed integers. Doesnt effect speed so we are fine
    
    let currentSoulLevelInput  = document.getElementById("currentSoulLevel").value;
    let desiredSoulLevelInput  = document.getElementById("desiredSoulLevel").value;
    let soulsNeeded            = document.getElementById("soulsNeeded");

    let currentSoulLevelMatch = currentSoulLevelInput.match(numberPattern);
    let desiredSoulLevelMatch = desiredSoulLevelInput.match(numberPattern);

    let currentSoulLevel = parseInt(currentSoulLevelMatch.join(''))
    let desiredSoulLevel = parseInt(desiredSoulLevelMatch.join(''))

    let souls = 0;

    for(let i = 0; i < desiredSoulLevel - currentSoulLevel; i++){
        // i don't know why, but I just dont trust precedence  
        souls += parseInt((0.02 * ((currentSoulLevel + i) ** 3)) + (3.06 * ((currentSoulLevel + i) ** 2)) + ((105.6 * (currentSoulLevel + i)) - 895));
        
    }

    console.log(`You need ${souls} souls`)

    counting(souls,-1);




}


function counting(num,time){

    let start = 0;
    let interval = time/num;

    let counter = setInterval(function () {
        start += 1000;
        document.getElementById("number").textContent = `You need ${start} souls`;

        if (start >= num) {
            clearInterval(counter);
            document.getElementById("number").textContent = `You need ${num} souls`;
        }
    },interval);

    document.getElementById("number").textContent = `You need ${num} souls`;

}




