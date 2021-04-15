// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'None') {
    return '';
  } else {
    var newLicense = license.split(' ').join('_');
    return `
![Badge](https://img.shields.io/badge/license-${newLicense}-blue)
  `;
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

This project is currently licensed under the ${license} [License](${renderLicenseLink(license).toLowerCase()})
  `;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.project}

${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Making](#making)

* [Questions](#questions)


## Installation

In order to run this application, you will need to install the following:

  - ${data.install}

## Usage

In order to use this app, you will need to understand the following langauges:

  - ${data.usage}

## Contribute 
    
In order to contribute, you will need to know the following languges:
    
  - ${data.contribution}

## Tests

To run tests, please use the following command:

  - ${data.test}


## Making

How was it made? Take a look here!


## Questions

Please click the link to see my Full GitHub profile:

[GitHub](https://github.com/${data.github})

If you have any questions, please see the following links to best get in contact with me:

[Email Me](${data.email})


${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
