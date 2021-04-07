const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('../Develop/utils/generateMarkdown');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository? (Required)'
},
  {
    type: 'input',
    name: 'description',
    message: 'What is the description of your repository? (Required)'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'If there is an installation process, please list the steps for installation here.'
  },
  {
    type: 'confirm',
    name: 'usage',
    message: 'This section contains instructions on how to use your application. You may also include examples of your application in use. (Pictures, gif, etc)'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'May other developers contribute to your repository? If so, list those steps here.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Is testing available and how is testing performed?'
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
    message: 'What is your GitHub username? (Required)'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Any additional instructions for people with questions?'
  }];

const userPrompts = () => {
  inquirer.prompt(questions)
    .then(function (data) {
      console.log(data);
  });
}
userPrompts();

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
