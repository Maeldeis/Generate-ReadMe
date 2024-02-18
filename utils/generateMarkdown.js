import { setLicense } from "./setLicense.js";
export const generateMarkdown = (data) => {
  const { title, description, license, contribution, github, email } = data;
  const titleSection = title ? `# ${title}\n` : "";
  const { badge: licenseBadge, notice: licenseNotice } = setLicense(license);
  const descriptionSection = description ? `## Description\n\n${description}\n` : "";
  const licenseSection = licenseBadge ? `## License\n\n${licenseNotice}\n` : "";
  const contributingSection = contribution ? `## Contributing\n\n${contribution}\n` : "";
  const questionsSection = github || email ? '## Questions\n' : ""
  const gitHub = github ? `Visit my [GitHub](https://github.com/${github}) profile\n` : "";
  const eMail = email ? `Feel free to [E-Mail](mailto:${email}) me\n` : "";
  const sections = [
    { title: "Description", content: descriptionSection },
    { title: "License", content: licenseSection },
    { title: "Contributing", content: contributingSection },
    { title: "Questions", content: questionsSection }
  ];
  const tableOfContents = sections.filter(section =>
    section.content).map(section => `- [${section.title}](#${section.title.toLowerCase()})`).join('\n');
    return (
    `${titleSection}
${licenseBadge}\n
${descriptionSection}
${tableOfContents ? `${tableOfContents}\n` : ''}
${licenseSection}
${contributingSection}
${questionsSection}
${gitHub}
${eMail}
`)
}
