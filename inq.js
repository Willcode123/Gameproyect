import inquirer from "inquirer";

export async function getName() {
    let { userInput } = await inquirer.prompt({
        // type of question
        type: "input",
        // user answer store
        name: 'userInput',
        // question to ask user
        message: 'what is your name?'
    })
    // return the answer
    return userInput
}

export let weapon = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: "list",
        name: 'userAnswer',
        message: 'choose your weapon',
        choices: ['Sword', 'Bow', 'Daggers', 'Shield']
    })
    return userAnswer
}

export let quest1 = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: "list",
        name: 'userAnswer',
        message: 'Would you like to go on a quest to kill Goblins or Slimes?',
        choices: ['Goblins', 'Slimes']
    })
    return userAnswer
}

export let attack1 = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: "list",
        name: 'userAnswer',
        message: 'Choose how you want to fight!',
        choices: ['Attack Head On', 'Ambush']
    })
    return userAnswer
}

export let loot1 = async () => {
    let { userAnswer } = await inquirer.prompt({
        type: "list",
        name: 'userAnswer',
        message: 'Materials and a new weapon has dropped.',
        choices: ['Pick up weapon', 'Leave it']
    })
    return userAnswer
}