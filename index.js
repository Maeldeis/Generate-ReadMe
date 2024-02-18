import fs from "fs/promises";
import path from 'path'
import inquirer from "inquirer";
import { questions } from "./utils/questions.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";


const writeToFile = (fileName, data) => {

  const filePath = path.resolve("./generatedMarkdown", fileName); 

  fs.writeFile(filePath, data, err => {
    if (err) throw err;
  });
}

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);

    writeToFile("README.md", markdownContent); 

    console.log("Successfully generated!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}


init();
