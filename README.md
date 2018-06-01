<h1 align="center">
	<br>
	<img width="100" src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/a05c0f976c588639a19259049a2cc9dab8513d8e/github/uec/logo.png" alt="unicode-escape-convert">
	<br>
	<a href="https://travis-ci.org/CodeDotJS/unicode-escape-convert"><img src="https://travis-ci.org/CodeDotJS/unicode-escape-convert.svg?branch=master"></a>
	<img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg">
	<br>
	<p align="center">Convert local and remote files containing unicode escapes to characters!</p>
</h1>

## Install

```sh
$ npm install --global unicode-escape-convert
```
__OR__
```sh
$ sudo npm install --global unicode-escape-convert
```

## Preview

<p align="center">
	<img src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/a05c0f976c588639a19259049a2cc9dab8513d8e/github/uec/preview.gif">
</p>

## Usage

```
 Usage : uec <command> [file/text] <option> [arg]

 Commands : <Conversion - Unicode escapes to characters>

  -l, --local   Convert local files
  -r, --remote  Convert remote files
  -t, --text    Convert and print oneline text

 Options :
  --read    Read the content of a local file
  --save    Save the local or remote file with a desirable name

 NOTE : <options> works with command --local and --remote

 Files will get saved with a random name if --save is not provided!

```

## Details

- Suppose you've an unescaped unicode like `\ud83d\ude01` and you can want to convert it into the character, which is 😁. You can simply do -

```sh
$ uec -t "\ud83d\ude01"
```

Data will always be under single or double quotes!

- For locally saved file filled with unescaped unicodes. Suppose you've a file called `unicorn.txt` or `unicorn.json` and you want to convert it. Just do -

```sh
$ uec -l unicorn.txt
```

- Alternatively, you can provide `--save` flag to save the file, which can be followed by another flag as a name of the file, for example -

```sh
$uec -l unicorn.txt --save somename
```

But, by default, the files will be saved with names like `somename-unicorn.txt` or `somename-unicorn.json`.

- In case you just want to print the output without saving it as a new file, you can do the following -

```
$ uec -l unicorn.json --read
```

__`NOTE :`__ Currently, there is no support to add path of the file in order to do the conversion, `--local` command works only if the file is in same directory!

- For remote files, there is a condition - The requsted data should be in the form of `txt/json`. For the sake of testing, I've uploaded two files to check the functionality
	- [`json`](https://goo.gl/19PySg)
	- [`txt`](https://goo.gl/hGqMFu)

Now, to read the remote files, you can do -
```sh
$ uec -r https://goo.gl/19PySg
```
You don't need `--read` flag in order to do so. For saving the online file, You just need to -

```sh
$ uec -r https://goo.gl/19PySg --save <optional-name>
```

__`NOTE :`__ I just made this for personal use. I hope other find it helpful too!

## Related

- __[`unicodechar-string`](https://github.com/CodeDotJS/unicodechar-string)__ `:` `Convert unicode escapes to characters!`

## License

MIT &copy; [Rishi Giri](rishigiri.ml)
