export class Monster {
    constructor(){
        this.health = 100
    }
}
 
export class Slime extends Monster {
    constructor (){
        super(strength, speed)
        this.strength = 4
        this.speed = 2
   }
}
 
export class Goblin extends Monster {
    constructor (){
        super(strength, speed)
        this.strength = 7
        this.speed = 4
   }
}