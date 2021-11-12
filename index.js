// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs =require("fs");
// const { title } = require("process");

// TODO: Create an array of questions for user input
const questions = [];
inquirer.prompt(
    [
        {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    }, {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    }, {
        type: "input",
        message: "What does your user need to install to use your project?",
        name: "install",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    }, {
        type: "input",
        message: "What is the use of your project?",
        name: "usage",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    }, {
        type: "input",
        message: "What is the license for your project?",
        name: "license",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    },
       {
        type: "input",
        message: "What tests did you run on this title?",
        name: "test",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "git",
        validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    },{

          //    List of licenses
type:'list',
messgae:'what license did you use?',
name: 'license',
choices:['The MIT License','The GPL License','Apache license','GNU license'],
validate:(value)=>{if(value){return true}else {return 'Need a value'}}
    },
    ]).then(({
        title,
        description,
        install,
        usage,
        license,
        test,
        git
        
})=>{
const template = `# ${title}
*[title](#title)
*[description](#description)
*[install](#install)
*[usage](#usage)
*[license](#license)
*[test](#test)
##project
${title}
##description
${description}
##install
${install}
##usage
${usage}
##license
${license}
##test
${test}

#Contact
*Github :${git}`;


        // Function to create readme// 
        createNewFile(title,template);
}
        
    );
   function createNewFile(myFirstReadme,template){
       fs.writeFile(`./${myFirstReadme.toLowerCase().split(' ').join('')}.md`,template,(err)=>{
           if(err){
               console.log(err)
           }
           console.log('Your README has been generated');
       })
   }




