const fs = reqiure('fs')
const inquirer = require('inquirer')
const employee = require('../lib/employee')
const engineer = require('../lib/engineer')
const intern = require('../lib/intern')
const manager = require('../lib/manager')
var fs = require('fs')

const teamList = [];



//manager prompt
const managerPrompt = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
        validate: answer =>{
            if(answer!==""){
                return true
            }else{
                return 'Please enter yout name'
            }
        },
    
    },
    {
        type: 'input',
        name: 'id',
        message:'What is your ID?',
        validate: answer =>{
            if(answer!==""){
                return true
            }else{
                return 'Please enter your ID'
            }
        },

    },
    {
        type: 'input',
        name: 'email',
        message:'What is your email?',
        validate: answer =>{
            if(answer!==""){
                return true
            }else{
                return 'Please enter your email'
            }
        },

    },
    {
        type: 'input',
        name: 'officeNumber',
        message:'What is your office number?',
        validate: answer =>{
            if(answer!==""){
                return true
            }else{
                return 'Please enter your office number'
            }
        },

    } 
];

//initialize app
function init() {
    return inquirer.prompt(managerQuestions);
}

init()
.then(data =>{
    return new Manager(data)

})
.then(data =>{
    const managerInput = data;
    console.log(data);

})