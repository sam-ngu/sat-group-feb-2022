

function generateBadgeUrl(license){
    return `https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue`;
}


function generateReadme(answers){

    // main logic to generate read


    return `
# ${answers.title}

![License](${generateBadgeUrl(answers.license)})


## Description

${answers.desc}


## Table of Contents 

- [Installation](#installation-notes)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation Notes

${answers.installation}


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

This project is licensed under ${answers.license}

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.


## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
  
`;



}

module.exports = {
    generateReadme
}

