//validator -->A library of string validators and sanitizers
//npm i validator

const chalk = require('chalk')
const validator = require('validator')

const email = 'visheshta@outlookcom'
const response = validator.isEmail(email)

console.log(response ? chalk.blue(email) : chalk.red.inverse(response))