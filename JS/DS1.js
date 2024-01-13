
// http://darksouls.wikidot.com/soul-level

//0.02*x^3 + 3.06*x^2 + 105.6*x - 895

function soulCalc() {

    let numberPattern = /[0-9]+(\.[0-9]+)?/g; // this regex also includes floats but i forgot i only needed integers. Doesnt effect speed so we are fine
    
    let desiredSoulLevelInput  = document.getElementById("desiredSoulLevel").value;
   
    let soulsNeeded            = document.getElementById("soulsNeeded");

    let desiredSoulLevelMatch = desiredSoulLevelInput.match(numberPattern);
 
    let desiredSoulLevel = parseInt(desiredSoulLevelMatch.join(''))
   
    let soulsTo = parseInt((0.02 * (desiredSoulLevel ** 3)) + (3.06 * (desiredSoulLevel ** 2)) + ((105.6 * desiredSoulLevel) - 895)); // i don't know why, but I just dont trust precedence  
  
    soulsNeeded.innerText = `You need ${soulsTo} souls to level up`
  }