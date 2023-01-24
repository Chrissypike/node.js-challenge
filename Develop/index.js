const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: An array of questions
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please enter a description of the purpose of the project as well as its functionality.",
        name: "Description",
    },
    {
        type: "input",
        message: "Please name the license applicable to this project.",
        name: "License",
    },
    {
        type: "input",
        message: "List any project dependencies here",
        name: "Dependencies",
    },
    {
        type: "input",
        message: "Name the languages or technologies associated with this project",
        name: "Usage",
    },
    {
        type: "input",
        message: "List the contributors here (if applicable)",
        name: "Contributors",
    },
    {
        type: "input",
        message: "Provide the following necessary commands in order to run this test",
        name: "Test",
    },
    {
        type: "input",
        message: "Type your GitHub username here",
        name: "Username",
    },
    {
        type: "input",
        message: "Type your full name here",
        name: "fullName",
    },
    {
        type: "input",
        message: "Provide your email address here",
        name: "Email",
    },

];

// TODO: The function to write README filepotential-enigma/Develop/index.js
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(error)
        } else {
            console.log("success")
        }
    })
}

// TODO: The function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile("README.Md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();