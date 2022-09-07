// If there is no license, return an empty string

// Function to generate markdown for README
const generateMarkdown = data => {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)

    ## Installation
    ${data.install}

    ## Usage
    ${data.usage}

    ## License
    This project is license under ${data.license}

    ## Contributions
    ${data.contributors}

    ## Tests
    ${data.test}

    ## Additional information/Questions
    Feel free to contact me at ${data.email}. 
    You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;