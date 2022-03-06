const chalk = require('chalk');
const fs = require('fs');
const { exec } = require('child_process');

let securityConfig = {
  grype: false,
};

console.log(chalk.green('Irone Shield installer'));
console.log(chalk.yellow('Please choose your vulnerability scanners:'));

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Install grype? (yes/no)`, answer => {

  if (answer === 'yes') {

    exec('curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sh -s -- -b /usr/local/bin', (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    });

    securityConfig.grype = true;

  }

  let data = JSON.stringify(securityConfig);
  fs.writeFileSync('config/custom/security.json', data);

  readline.close();
});

