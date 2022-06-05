var running = false;


function increaseTime(time){
    var tempstr = "0"

    var intTime = parseInt(time)
    if(intTime == 60){
        return intTime
    }
    intTime++
    intTime = (intTime > 10) ? intTime.toString() : tempstr + intTime.toString();
    
    return intTime.toString()

}

function decreaseTime(time){
    var tempstr = "0"

    var intTime = parseInt(time)
    if(intTime == 0){
        return intTime
    }
    intTime--
    intTime = (intTime > 10) ? intTime.toString() : tempstr + intTime.toString();

    return intTime.toString()

}


function editTime(time,slot,manip){
    var newStr = ""

    time[slot] = (manip == 1) ? increaseTime(time[slot]) : decreaseTime(time[slot])
    for(let i = 0; i < time.length;i++){
        newStr += time[i]
        if(i == 2){
            break
        }
        newStr += ":"
    }
    document.getElementById("Time").innerHTML = newStr
    
}


function ParseTime(id){
    if(running){return}
    var elem = document.getElementById("Time").innerHTML
    var time =  elem.split(":")

    console.log(time)

    switch(id){

        case "plusS":
            editTime(time,2,1)
            break;
        case "plusM":
            editTime(time,1,1)
                break;
        case "plusH":
            editTime(time,0,1)
            break;
        case "minusS":
            editTime(time,2,0)
            break;
        case "minusM":
            editTime(time,1,0)
            break;
        case "minusH":
            editTime(time,0,0)
            break;
    }
}



function TimeProcess(){ // broken atm

    running = true;
    const today = new Date()
    const timeToAdd = document.getElementById("Time").innerHTML
    const [hoursToAdd,minutesToAdd,secondsToAdd] = timeToAdd.split(":")
    console.log(hoursToAdd,minutesToAdd,secondsToAdd)

    if(hoursToAdd == "00" && minutesToAdd == "00" && secondsToAdd == "00"){
        running = false;
        return;
    } 

    const countDownTimeStamp = new Date()
    countDownTimeStamp.setHours(today.getHours()+parseInt(hoursToAdd))
    countDownTimeStamp.setMinutes(today.getMinutes()+parseInt(minutesToAdd))
    countDownTimeStamp.setSeconds(today.getSeconds()+parseInt(secondsToAdd))
    countDownTimeStamp.getTime()

    var timer = setInterval(() => {
    

        var now = new Date().getTime()

        var time = countDownTimeStamp - now
        var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60)) / 1000);

        seconds = (seconds > 9) ? seconds.toString() : "0" + seconds.toString() 
        minutes = (minutes > 9) ? minutes.toString() : "0" + minutes.toString() 
        hours = (hours > 9) ? hours.toString() : "0" + hours.toString() 


        if(hours <= 0 && minutes <= 0  && seconds <= 0){
            // alert("Timer done!")
            running = false
            document.title = "TIMER IS DONE ⏰⏰⏰⏰⏰⏰⏰"
            window.open("https://www.youtube.com/watch?v=XCMiU4Tacpw", '_blank').focus();
            clearInterval(timer)
            return
        }

        document.getElementById("Time").innerHTML = `${hours}:${minutes}:${seconds}`
        document.title =  `${hours}:${minutes}:${seconds}`

    
    }, 1000);
}