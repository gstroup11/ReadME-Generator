// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License

  This project is licensed under the ${license} license.`
    }
    return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)

  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributions](#contributions)

  *[Testing](#testing)

  *[Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributions}

  ## Testing

  To correctly test this application run:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions regarding this project, you can contact me directly at ${data.email}.

  You can see more of my work at [${data.github}](https://github.com/${data.github}/).

`;

}

module.exports = generateMarkdown;
