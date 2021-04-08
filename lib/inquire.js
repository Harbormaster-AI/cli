const inquirer   	= require('inquirer');
const constants		= require('./constants');

let self = module.exports = {

  askCredentials: () => {
    const questions = [
      {
        name: 'tokenInput',
        type: 'input',
        message: 'Enter your token, available from your Harbormaster install\n or your account at ' + constants.HARBORMASTER_DOMAIN + ':',
        validate: function( value ) {
        	return value ? true : false;
        }
      },
      {
          name: 'hostUrl',
          type: 'input',
          message: 'Enter host url or leave empty to use realMethods SaaS Platform:',
          validate: function( value ) {
          	return true;
          }
        },
      
    ];
    return inquirer.prompt(questions);
  },

  confirmation: (quiet) => {
    if ( quiet == 'true' )
       return {query: true};
    else
        return self.confirmationHelper();
  },
  
  confirmationHelper: () => {
    const confirm = [
      {
        name: 'query',
        type: 'confirm',
        message: 'Are you sure you?',
        validate: function( value ) {
        	return value ? true : false;
        }
      }
    ];
    return inquirer.prompt(confirm);
  }
}