// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Whats your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your projects name?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'GPL 3.0', 'None']
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contribution'
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, fileName), data, function(err){
        if(err)throw err
        console.log('File Written');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log(answers);
        const data = generateMarkdown(answers);
        writeToFile('README.md', data);
    }).catch(err => console.log(err))
}

// Function call to initialize app
init();
