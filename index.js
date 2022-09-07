//Test: console.log('Hello Node');
const fs = require('fs'); 
const inquirer = require('inquirer'); 
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user input
const questions = () => {
    // prompt questions to user 
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project.',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false; 
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'GNU'],
        default: ["MIT"],
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please choose a license!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter steps required to install your project!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a usage description!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    }
]);
};


// Function to write README file
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};

// function call to initialize program
questions()
// getting user answers 
.then(answers => {
    return generatePage(answers);
})
// using data to display on page 
.then(data => {
    return writeFile(data);
})
// catching errors 
.catch(err => {
    console.log(err)
})