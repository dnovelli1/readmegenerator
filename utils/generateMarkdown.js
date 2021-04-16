// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Returns an empty string if none selected by user
  if (license == 'None') {
    return '';
  } else {
    // creates new license in order to make link function correctly, plugs in template literal
    var newLicense = license.split(' ').join('_');
    return `
![Badge](https://img.shields.io/badge/license-${newLicense}-blue)
  `;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Returns an empty string if none selected by user
  if(license == 'None'){
    return '';
  } else {
    // creates new license in order to make link function correctly, plugs in template literal
    var newLicense = license.split(' ').join('-');
    return `https://choosealicense.com/licenses/${newLicense}/`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None'){
    return '';
  }else{
    // Returns string with name of the license and link to more information on the license.
    return `
## License

This project is currently licensed under the ${license} [License](${renderLicenseLink(license).toLowerCase()})
  `;
  }
}

// TODO: Create a function to generate markdown for README
// Creates the template for the MD file. Inserting template literals where the user input should be.
function generateMarkdown(data) {
  return `
# ${data.project}

${renderLicenseBadge(data.license)}

## Description

${data.description}


## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contribute](#contribute)

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
