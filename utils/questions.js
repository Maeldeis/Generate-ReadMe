n
function createConfirmationQuestion(name, message) {
    return {
        type: "confirm",
        name,
        message,
    };
}


function createInputQuestion(name, message, whenCondition, validationMessage) {
    return {
        type: "input",
        name,
        message,
        when: whenCondition,
        validate(input) {
            return input.trim() !== '' ? true : validationMessage;
        }
    };
}


function createEditorQuestion(name, message, whenCondition, validationMessage) {
    return {
        type: "editor",
        name,
        message,
        when: whenCondition,
        validate(input) {
            return input.trim() !== '' ? true : validationMessage;
        }
    };
}


function createListQuestion(name, message, choices, whenCondition) {
    return {
        type: "list",
        name,
        message,
        choices,
        when: whenCondition,
    };
}


function createGithubQuestion(name, message, whenCondition) {
    return {
        type: 'input',
        name,
        message,
        when: whenCondition,
        validate(input) {
            const githubUsernameRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            return githubUsernameRegex.test(input) ? true : 'Please enter a valid GitHub username';
        },
    };
}


function createEmailQuestion(name, message, whenCondition) {
    return {
        type: 'input',
        name,
        message,
        when: whenCondition,
        validate(input) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(input) ? true : 'Please enter a valid email address';
        },
    };
}


export const questions = [
    createConfirmationQuestion("includeTitle", "Include Title?"),
    createInputQuestion("title", "What is the title of your project?", (answers) => answers.includeTitle === true, "Please enter a title for your project"),
    createConfirmationQuestion("includeLicense", "Include License?"),
    createListQuestion("license", "Choose a license:", ['MIT', 'Apache 2.0', 'GPL v3', 'AGPL v3', 'MPL 2.0', 'Boost 1.0', 'none'], (answers) => answers.includeLicense === true),
    createConfirmationQuestion("includeDescription", "Include Description?"),
    createEditorQuestion("description", "Add description of your project:", (answers) => answers.includeDescription === true, "Please enter a description for your project"),
    createConfirmationQuestion("includeInstallation", "Include Installation Guidelines?"),
    createEditorQuestion("installation", "Add installation guidelines:", (answers) => answers.includeInstallation === true, "Please enter an installation guide for your project"),
    createConfirmationQuestion("includeUsage", "Include Usage Guidelines?"),
    createEditorQuestion("usage", "Add usage guidelines:", (answers) => answers.includeUsage === true, "Please enter a usage guide for your project"),
    createConfirmationQuestion("includeContribution", "Include Contribution Guidelines?"),
    createEditorQuestion("contribution", "Add contributing guidelines:", (answers) => answers.includeContribution === true, "Please enter a contribution guide for your project"),
    createConfirmationQuestion("includeTest", "Include Test Guidelines?"),
    createEditorQuestion("tests", "Add test guidelines:", (answers) => answers.includeTest === true, "Please enter a tests guide for your project"),
    createConfirmationQuestion("includeGithub", "Include GitHub Username?"),
    createGithubQuestion("github", "Add GitHub username:", (answers) => answers.includeGithub === true),
    createConfirmationQuestion("includeEmail", "Include E-Mail?"),
    createEmailQuestion("email", "Add E-Mail:", (answers) => answers.includeEmail === true),
];
