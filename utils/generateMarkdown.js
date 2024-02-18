// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}\n\n`;

  // Description section
  if (data.includeDescription && data.description) {
      markdown += `## Description\n${data.description}\n\n`;
  }

  // License section
  if (data.includeLicense && data.licenseBadge && data.licenseNotice) {
      markdown += `## License\n${data.licenseBadge}\n${data.licenseNotice}\n\n`;
  }

  // Installation section
  if (data.includeInstallation && data.installation) {
      markdown += `## Installation\n${data.installation}\n\n`;
  }

  // Usage section
  if (data.includeUsage && data.usage) {
      markdown += `## Usage\n${data.usage}\n\n`;
  }

  // Contribution section
  if (data.includeContribution && data.contribution) {
      markdown += `## Contribution\n${data.contribution}\n\n`;
  }

  // Tests section
  if (data.includeTest && data.tests) {
      markdown += `## Tests\n${data.tests}\n\n`;
  }

  // Questions section
  if (data.includeGithub || data.includeEmail) {
      markdown += `## Questions\n`;
      if (data.includeGithub && data.github) {
          markdown += `- GitHub: [@${data.github}](https://github.com/${data.github})\n`;
      }
      if (data.includeEmail && data.email) {
          markdown += `- Email: ${data.email}\n`;
      }
      markdown += '\n';
  }

  return markdown;
}

module.exports = generateMarkdown;
