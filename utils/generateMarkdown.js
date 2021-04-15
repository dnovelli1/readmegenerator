// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else {
    var newLicense = license.split(' ').join('_');
    return `![Badge](https://img.shields.io/badge/license-${newLicense}-blue)`;
  } 
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None'){
    return '';
  } else {
    var newLicense = license.split(' ').join('-');
    // license.toLowerCase();
    return `https://choosealicense.com/licenses/${newLicense}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return '';
  }else{
    return `
## License

This project is currently licensed under the ${license} [License-Link](${renderLicenseLink(license).toLowerCase()})
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project}

${renderLicenseBadge(data.license)}

## Table of Contents

*[Description](#Description)

*[Installation](#Installation)

*[Personal-Links](#Personal)



## Description

  ${data.description}



## Personal Links for Business Inquiries

[GitHub](https://github.com/${data.github})

[Email-Me](${data.email})



${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
