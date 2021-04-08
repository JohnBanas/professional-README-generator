const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the title of your repository? (Required)',
  //validate to make sure there is a value there
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your repository title.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'What is the description of your repository? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter a description of the repository.');
      return false;
    }
  }
  },
//confirm whether or not there is a installation process first
{
  type: 'confirm',
  name: 'confirmInstallation',
  message: 'Is there an installation process?'
  },
{
  type: 'input',
  name: 'installation',
  message: 'Please list installation instructions.',
  // the <when> = if the person selects a installation process allow them to input steps
  when: ({ confirmInstallation }) => {
    if (confirmInstallation) {
      return true;
    } else {
      return false;
    }
  }
},

{ //confirm
  type: 'confirm',
  name: 'confirmUsage',
  message: 'Would you like to give instructions for using your application?'
},
{ //if confirmed
  type: 'input',
  name: 'instructions',
  message: 'Please list instructions for using your application. It is recommended to add descriptive images later as well.',
  when: ({ confirmUsage }) => {
    if (confirmUsage) {
      return true;
    } else {
      return false;
    }
  }
},

{
  type: 'confirm',
  name: 'confirmContribution',
  message: 'May other developers contribute to your repository?'
},
{
  type: 'input',
  name: 'contribution',
  message: 'Please explain how other developers may contribute to your project.',
  when: ({ confirmContribution }) => {
    if (confirmContribution) {
      return true;
    } else {
      return false;
    }
  }
},
{
  type: 'confirm',
  name: 'testConfirm',
  message: 'Is testing available?'
},
{
  type: 'input',
  name: 'testing',
  message: 'Please explain how users may test your application.',
  when: ({ testConfirm }) => {
    if (testConfirm) {
      return true;
    } else {
      return false;
    }
  }
},
{ //checkbox that allows license choice
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
  message: 'What is your GitHub username? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your GitHub username.');
      return false;
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email address? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your email.');
      return false;
    }
  }
},
{
  type: 'confirm',
  name: 'questionsConfirm',
  message: 'May individuals contact you with questions?'
},
{
  type: 'input',
  name: 'questions',
  message: 'Please list instructions for those who wish to contact you.',
  when: ({ questionsConfirm }) => {
    if (questionsConfrim) {
      return true;
    } else {
      return false;
    }
  }
}]; //end of questions array

//this function uses the questions array to 
//prompt the questions through the terminal and console logs the person's respsonses
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
function init() { }

// Function call to initialize app
init();
