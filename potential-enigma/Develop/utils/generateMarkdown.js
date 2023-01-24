
// TODO: The function to generate markdown for README
  
function generateMarkdown(data) {
    return `
  # ${data.Title} ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  https://github.com/Chrissypike/node.js-challenge
  # Description
  This github repository was created by ${data.fullName}, for the sole purpose
  ${data.Description}
  # Table of Contents 
  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#Questions)
  # Installation
  In order for the application to run correctly, the neccessary dependencies must be installed: ${data.Dependencies}
  # Usage
  In order to use this app, ${data.Usage}, must be implemented.
  # License
  This project is licensed under the ${data.License} license. 
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  # Contributors
  ​Contributors: ${data.Contributors}
  # Test
  Provide the following necessary commands in order to run this test: ${data.Test}
  # Questions
  Github userame: ${data.Username}.
  Link to Github: https://github.com/Chrissypike
  If there are any questions or concerns about the repository you might have, contact: ${data.Email}
  `
  }
  
  
  module.exports = generateMarkdown;