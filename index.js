import fs from "fs/promises";
import path from 'path'
import inquirer from "inquirer";
import { questions } from "./utils/questions.js";
import { generateMarkdown } from "./utils/generateMarkdown.js";

const writeToFile = async (fileName, data) => {
  const filePath = path.resolve("./utils", fileName); 

  try {
    await fs.writeFile(filePath, data);
    console.log("File written successfully:", filePath);
  } catch (err) {
    console.error("Error writing file:", err);
  }
};

const init = async () => {
  try {
    const answers = await inquirer.prompt(questions);
    const markdownContent = generateMarkdown(answers);

    await writeToFile("README.md", markdownContent); 

    console.log("Successfully generated!");
  } catch (error) {
    console.error("Error occurred:", error);
  }
};

init();
