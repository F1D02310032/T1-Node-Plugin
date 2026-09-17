const chalk = require('chalk').default || require('chalk');
const cowsay = require('cowsay');
const figlet = require('figlet');

function parseStudentInput() {
  const args = process.argv.slice(2).join(' ');
  const fallbackName = 'Aditya';
  const fallbackNim = 'F1D02310032';

  if (!args.trim()) {
    return { name: fallbackName, nim: fallbackNim };
  }

  const match = args.match(/(.+?)\s*-\s*(.+)/);
  if (match) {
    return {
      name: match[1].trim() || fallbackName,
      nim: match[2].trim() || fallbackNim,
    };
  }

  return { name: args.trim() || fallbackName, nim: fallbackNim };
}

const { name, nim } = parseStudentInput();

const identity = [
  `${chalk.bold.red('Nama lengkap:')} ${chalk.gray(name)}`,
  `${chalk.bold.white('NIM:')} ${chalk.white(nim)}`,
].join('\n');

const message = cowsay.say({
  text: 'Rebahan itu Hak, Sukses itu Kewajiban: Nggak apa-apa rehat sejenak, yang penting jangan kebablasan sampai lupa nama sendiri pas bangun.',
  e: 'oo',
  T: 'U ',
  r: true,
});

const asciiName = figlet.textSync(name, {
  font: 'Standard',
  horizontalLayout: 'default',
  verticalLayout: 'default',
  width: 80,
});

console.log(chalk.bold.red('========================================'));
console.log(chalk.bold.gray('TUGAS 1 - Node.js Plugins'));
console.log(chalk.bold.red('========================================'));
console.log(identity);
console.log('');
console.log(chalk.bgHex('#374151')(chalk.white(message)));
console.log('');
console.log(chalk.bold.white('ASCII Art Nama:'));
console.log(chalk.red(asciiName));
