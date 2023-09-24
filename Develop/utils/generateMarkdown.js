// function that renders the license badge at the top of the readme, will not return one if none is selected
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// returns the license link in the table of contents if one is selected, nothing is none is selected
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n*[License](#license)\n`;
  }
  return '';
}

// generates the license section if it is selected,  wont if none is selected
function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License

  This project is licensed under the ${license} license.`;
    }
    return ``;
}

// main function to generate readme
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

`; //inputs from data field and text that is input here will also appear on the readme

}

//exports to the index
module.exports = generateMarkdown;
