const fs = reqiure('fs')
const inquirer = require('inquirer')
const employee = require('../lib/employee')
const engineer = require('../lib/engineer')
const intern = require('../lib/intern')
const manager = require('../lib/manager')

//manager prompt
const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    
    },
    {
        type: 'input',
        name: 'id',
        message:'What is your ID?',

    },
    {
        type: 'input',
        name: 'email',
        message:'What is your email?',

    }
]