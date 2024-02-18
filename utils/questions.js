export const questions = [
    {
      type: "confirm",
      name: "includeTitle",
      message: "include Title?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      when(answers) {
        return answers.includeTitle === true;
      },
      validate(input) {
        return input.trim() !== '' ? true : 'Please enter a title for your project';
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
      message: "include description?",
    },
    {
      type: "editor",
      name: "description",
      message: "Add description of your project:",
      when(answers) {
        return answers.includeDescription === true;
      },
      validate(input) {
        return input.trim() !== '' ? true : 'Please enter a description for your project';
      }
    },
    {
      type: "confirm",
      name: "includeInstallation",
      message: "include installation guidelines?",
    },
  
    