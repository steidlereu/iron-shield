const chalk = require('chalk');
const fs = require('fs');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let securityConfig = {
  grype: true
};

console.log(chalk.green('security smith installer'));
console.log(chalk.yellow('Please choose your vulnerability scanners:'));

readline.question(`Install grype? (yes/no)`, answer => {

  if (answer === 'yes') {
    console.log(`Hi `);
  }

  securityConfig.grype = false;

  let data = JSON.stringify(securityConfig);
  fs.writeFileSync('config/custom/security.json', data);

  readline.close();
});

