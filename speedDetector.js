function theSpeedOfaCar(speed) {

    //checks the speed and prints out the speed

    if(speed < 70){
        return print = "ok"
    } else if (speed === 75){
        return print ="points:1"
    }else if (speed === 80){
        return print = "points:2"
    }else if (speed  === 85){
        return print = "points:3"
    }else if (speed ===90){
        return print = "points:4"
    }else if (speed ===95){
        return print = "points:5"
    }else if (speed ===100){
        return print = "points:6"
    }else if (speed ===105){
        return print = "points:7"
    }else if (speed===110){
        return print = "points:8"
    }else if (speed ===115){
        return print ="points:9"
    }else if (speed === 120){
        return print ="points:10"
    }else if (speed ===125){
        return print = "points:11"
    }else if (speed ===130){
        return print = "points:12"

        //if the speed surpasses 130 the Driver's license is suspended 

    }else if (speed >130){
        return print = "License suspended"

    }
}

console.log(theSpeedOfCar (125));