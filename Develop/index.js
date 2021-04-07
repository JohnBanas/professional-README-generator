const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/utils/generateMarkdown');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository?'
},
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do others install your application?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How may other people use your application?'
    
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'How may other developers contribute to your repository?'
  },
  {
    type: 'input',
    name: 'test',
    message: 'What testing is available and how is testing performed?'
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license, if you aren\'t sure, select none. You can always add a license later.',
    choices: ['none', 'GNU AGPLv3', 'GNU GPLv3',
      'GNU LGPLv3', 'Mozilla Public License 2.0',
      'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
    'The Unlicense']
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Any additional instructions for people with questions?'
  }];

// inquirer.prompt(questions)
//   .then(function (data) {
//     writeToFile('./index.txt',data);
//   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
