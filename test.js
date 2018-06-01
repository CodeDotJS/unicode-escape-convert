import childProcess from 'child_process';
import test from 'ava';

test.cb('--text', t => {
	const cp = childProcess.spawn('./cli.js', ['--text', '\uD83D\uDE00'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('-l --read', t => {
	const cp = childProcess.spawn('./cli.js', ['--local', 'unicorn.txt', '--read'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 1);
		t.end();
	});
});

test.cb('-l --save', t => {
	const cp = childProcess.spawn('./cli.js', ['--local', 'unicorn.txt'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('-l --name', t => {
	const cp = childProcess.spawn('./cli.js', ['--local', 'unicorn.txt', '--save', 'output.txt'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('--remote', t => {
	const cp = childProcess.spawn('./cli.js', ['--remote', 'https://goo.gl/19PySg'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

test.cb('--remote --save', t => {
	const cp = childProcess.spawn('./cli.js', ['--remote', 'https://goo.gl/19PySg', '--save'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});
