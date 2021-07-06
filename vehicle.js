class Vehicle {
    //Properties
    constructor(color, direction, currentSpeed, topSpeed, engineStarted){
        this._color = color;
        this._direction = direction;
        this._currentSpeed = currentSpeed;
        this._topSpeed = topSpeed;
        this._engineStarted = true;
    }
    set direction(newDirection){
        if (newDirection >= 0  && newDirection < 360){
            this._direction = newDirection;
        } else {
            console.log("Direction must be between 0 and 359.");
        }
    }
    set currentSpeed(newSpeed){
        if (newSpeed >= 0){
            this._currentSpeed = newSpeed;
        } else {
            console.log("Speed must be at least zero.");
        }
    }
    
    //Methods: 
    accelerate(){
        
        if (this._engineStarted){
            if (this._currentSpeed >= this._topSpeed - 10){
                this._currentSpeed = this._topSpeed;
                console.log("Top speed of the " + `${this._color}` + " vehicle has been reached at " + `${this._currentSpeed}` + " MPH.");
            } else {
            if (this._currentSpeed >= 0 && this._currentSpeed + 10 <= this._topSpeed){
                this._currentSpeed = this._currentSpeed + 10;
                console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
            }
            }
        } else {
        console.log("The engine must be started first.");
        }
    }

    brake(){
            if (this._currentSpeed < 10){
                this._currentSpeed = 0;
                console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
            } else {
            if (this._currentSpeed >= 10){
                this._currentSpeed = this._currentSpeed - 10;
                console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
            }    
        }   
    }
    turnOn(){
        if (this._engineStarted = !this._engineStarted){
            this._engineStarted = true;
            this._currentSpeed = 0;
            console.log("The engine of the " + `${this._color}` + " vehicle is now running.");
        } else {
            console.log("The engine of the " + `${this._color}` + " vehicle is already running.");  
        }
    }

    turnOff(){
        if (this._engineStarted != true){
            console.log("The engine of the " + `${this._color}` + " vehicle is already off.");
            
        } else {
            this._engineStarted = !this._engineStarted;
            this._currentSpeed = 0;
            console.log("The engine of the " + `${this._color}` + " vehicle has been shut off.");
        }
    }

    turnLeft(){
        if (this._currentSpeed <=15){
            if (this._direction >= 90){
                this._direction = this._direction - 90;
                console.log("The direction of the " + `${this._color}` + " vehicle is " + `${this._direction}` + " degrees.");
            } else if (this._direction < 90){
                this._direction + 270;
                console.log("The direction of the " + `${this._color}` + " vehicle is " + `${this._direction}` + " degrees.");
            }
        } else {
            console.log("The " + `${this._color}` + " vehicle is traveling too fast. Please apply the brakes.");
        }    
    }

    turnRight(){
        if (this._currentSpeed > 15){
                console.log("The " + `${this._color}` + " vehicle is traveling too fast. Please apply the brakes.");
            } else {
            if (this._direction <= 269){
                this._direction = this._direction + 90;
                console.log("The direction of the " + `${this._color}` + " vehicle is " + `${this._direction}` + " degrees.");
            } else if (this._direction >= 270) {
                this._direction = this._direction - 270;
                console.log("The direction of the " + `${this._color}` + " vehicle is " + `${this._direction}` + " degrees.");
            }
        } 
    }

    boost(){
        
        if (this._engineStarted){
            if (this._currentSpeed >= this._topSpeed - 50){
                this._currentSpeed = this._topSpeed;
                console.log("Top speed of the " + `${this._color}` + " vehicle has been reached at " + `${this._currentSpeed}` + " MPH.");
            } else {
            if (this._currentSpeed >= 0 && this._currentSpeed + 50 <= this._topSpeed){
                this._currentSpeed = this._currentSpeed + 50;
                console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
            }
            }
        } else {
        console.log("The engine of the " + `${this._color}` + " vehicle must be started first.");
        }
    }

    hardBrake(){
        if (this._currentSpeed < 50){
            this._currentSpeed = 0;
            console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
        } else {
        if (this._currentSpeed >= 50){
            this._currentSpeed = this._currentSpeed - 50;
            console.log("Current speed of the " + `${this._color}` + " vehicle is " + `${this._currentSpeed}` + " MPH.");
        }    
    }   
}

    info(){
        if (this._engineStarted){
            const info = `${this._color}` + " vehicle is headed " +  `${this.direction}` + " degrees at " `${this.currentSpeed}` + "MPH. Its top speed is " + `${topSpeed}` + "MPH.";
            return info;
        } else {
            const info = "The " + `${this._color}` + " vehicle is not running.";
            return info;
        }
    }
}

class Bus extends Vehicle{
    constructor(color, direction, currentSpeed, topSpeed, engineStarted, numberOfSeats){
        super(color, direction, currentSpeed, topSpeed, engineStarted);
            this._numberOfSeats = numberOfSeats;
    }

}

class Ambulance extends Vehicle{
    constructor(color, direction, currentSpeed, topSpeed, engineStarted) {
        super(color, direction, currentSpeed, topSpeed, engineStarted);
    }    
    sirenOn(){
        console.log("The siren of the " + `${this._color}` + " vehicle is now on.");
    }
    sirenOff(){
        console.log("The siren of the " + `${this._color}` + " vehicle is now off.");
    }
}