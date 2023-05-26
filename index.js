import { add, subtract } from './functions.js'
import { getName, weapon, quest1, attack1, loot1 } from './inq.js'

let start = async () => {
    let answer = await getName()
    console.log(answer)
    console.log('Ahhh a good name, you must now select a weapon')
    chooseWeapon()
}

let chooseWeapon = async () => {
    console.log('Be careful what you choose, i know what i would pick')
    let answer = await weapon()
    console.log(answer)
    if(answer === 'Sword'){
        console.log('Great!')
    }else {
        console.log('A fine choice')
    }
    onQuest1()
}

let onQuest1 = async () => {
    console.log('Choose your first quest!')
    let answer = await quest1()
    console.log(answer)
    if(answer === 'Goblins'){
        console.log('You enter the forest to find the Goblins')
    } else {
        console.log('You enter the forest to complete the quest')
    }
    firstAttack()
}

let firstAttack = async () => {
    console.log('Choose your first quest!')
    let answer = await attack1()
    console.log(answer)
    if(answer === 'Attack Head On'){
        console.log('You rushed straight at them')
    } else {
        console.log('You silently got close to attack')
    }
    firstLoot()
}

let firstLoot= async () => {
    console.log('You attacked the monster and defeated it!')
    let answer = await loot1()
    console.log(answer)
    if(answer === 'Pick up weapon'){
        console.log('You have picked up a new and better weapon')
    } else {
        console.log('You leave the weapon behind')
    }
}

start()