export const questions = [
    {
      type: "confirm",
      name: "includeTitle",
      message: " would you like to include a Title?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      when(answers) {
        return answers.includeTitle === true;
      },
      validate(input) {
        return input.trim() !== '' ? true : 'Please enter the title for your project';
      }
    },
    {
      type: "confirm",
      name: "includeLicense",
      message: "include license?",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL v3', 'AGPL v3', 'MPL 2.0', 'Boost 1.0', 'none'],
      when(answers) {
        return answers.includeLicense === true;
      },
    },
    {
      type: "confirm",
      name: "includeDescription",
      message: "would you like to include a description?",
    },
    {
      type: "input",
      name: "description",
      message: "Add the description of your project:",
      when(answers) {
        return answers.includeDescription === true;
      },
      validate(input) {
        return input.trim() !== '' ? true : 'Enter the description for your project';
      }
    },
    
      {
        type: "confirm",
        name: "includeContribution",
        message: "Would you like to include contributions?",
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Add your contributors',
        when(answers) {
          return answers.includeContribution === true;
        },
        validate(input) {
          return input.trim() !== '' ? true : 'Enter the contributors';
        }
      },
      {
        type: "confirm",
        name: "includeGithub",
        message: "Would you like to include your GitHub username?",
      },
      {
        type: 'input',
        name: 'github',
        message: 'Add your GitHub username:',
        when(answers) {
          return answers.includeGithub === true;
        },
        validate(input) {
          return input.trim() !== '' ? true : 'Enter your GitHub username';
        },
      },
      {
        type: "confirm",
        name: "includeEmail",
        message: "include E-Mail?",
      },
      {
        type: 'input',
        name: 'email',
        message: 'Add E-Mail:',
        when(answers) {
          return answers.includeEmail === true;
        },
        validate(input) {
          return input.trim() !== '' ? true : 'Enter your email';
        },
      },
    ];  
