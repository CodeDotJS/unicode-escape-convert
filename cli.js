#!/usr/bin/env node

'use strcit';

const fs = require('fs');
const isUrl = require('is-url');
const online = require('is-online');
const got = require('got');
const chalk = require('chalk');
const logUpdate = require('log-update');
const ora = require('ora');
const utc = require('unicodechar-string');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({pkg}).notify();

const spinner = ora();
const arg = process.argv[2];
const opt = process.argv[3];
const ext = process.argv[4];
const end = process.exit;
const randomString = Math.random().toString(15).substr(2, 6);
const bse = process.argv[5] || randomString;
const rand = process.argv[5] || `${randomString}-${opt}`;

if (!arg || arg === '-h' || arg === '--help') {
	console.log(`
 Usage : uec ${chalk.green('<command>')} ${chalk.blue('[file/text]')} ${chalk.yellow('<option>')} ${chalk.magenta('[arg]')}

 Commands : ${chalk.dim('<Conversion - Unicode escapes to characters>')}

  -l, ${chalk.dim('--local')}   Convert local files
  -r, ${chalk.dim('--remote')}  Convert remote files
  -t, ${chalk.dim('--text')}    Convert and print oneline text

 Options :
  --read    Read the content of a local file
  --save    Save the local or remote file with a desirable name

 NOTE : <options> works with command ${chalk.cyan('--local')} and ${chalk.cyan('--remote')}

 ${chalk.dim('Files will get saved with a random name if')} ${chalk.yellow('--save')} ${chalk.dim('is not provided!')}
		`);
}

const showOpt = () => {
	if (!opt) {
		logUpdate(`\n Please provide an argument! \n`);
		end(1);
	}
};

if (arg === '-t' || arg === '--text') {
	showOpt();
	logUpdate(`\n ${utc(opt)}\n`);
}

const saveFile = (str, pfx) => {
	fs.writeFile(str, utc(pfx), err => {
		if (err) {
			logUpdate(err);
		}
		logUpdate(`\n File saved as - ${str} \n`);
	});
};

if (arg === '-l' || arg === '--local') {
	showOpt();
	fs.readFile(opt, 'utf-8', (err, data) => {
		if (err) {
			logUpdate(err);
		}

		const wip = data.toString().trim().replace(/\\n/g, '\n');

		if ((arg === '-l' || arg === '--local') && ext === '--read') {
			logUpdate(`\n${utc(wip)} \n`);
			end(1);
		}

		saveFile(rand, wip);
	});
}

if (arg === '-r' || arg === '--remote') {
	showOpt();

	logUpdate();
	spinner.text = 'Please wait';
	spinner.start();

	online().then(res => {
		if (res === false) {
			logUpdate(`\n Network out of reach! \n`);
			end(1);
		}
	});

	if (isUrl(opt) === false) {
		logUpdate('\n Please provide a valid url! \n');
		end(1);
	}

	got(opt).then(res => {
		const dbs = res.body;
		logUpdate(`\n${utc(dbs)}`);
		spinner.stop();

		if ((arg === '-r' || arg === '--remote') && ext === '--save') {
			saveFile(bse, dbs);
		}
	});
}
