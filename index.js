const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const { questions } = require('./utils/questions');
const generateMarkdown = require("./utils/generateMarkdown");
const { setLicense } = require('./utils/setLicense');

function promptUser() {
    return inquirer.prompt(questions);
}


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error("Error writing README file:", err);
        } else {
            console.log("README file written successfully!");
        }
    });
}


function init() {
    
    promptUser()
        .then(answers => {
       
            const selectedLicense = answers.license;

            
            const { badge, notice } = setLicense(selectedLicense);

           
            answers.licenseBadge = badge;
            answers.licenseNotice = notice;

          
            const readmeContent = generateMarkdown(answers);

         
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error("Error occurred:", error);
        });
}

init();
