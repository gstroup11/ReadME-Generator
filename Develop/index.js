// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const markdownGenerator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username!',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email for the questions section.',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your projects title.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Insert a description for your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Insert installation instructions for the user here.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter a descriptive message on the usage of your application for the user.',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter your contribution guidelines for the users.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter your testing instructions for the user here.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you be using for your project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); //From reference
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README.md.....');
        writeToFile('README.md', markdownGenerator({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
