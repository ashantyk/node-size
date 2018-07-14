node-size
=========

Convert byte/bit numbers to human-readable format and reverse.
This modules supports both IEC and SI/JEDEC formats (1000 and 1024 divisions).

Installation
------------

In order to install it you can run:

```sh
$ npm install node-size --save
```

Usage
-----

Simple usage:
```js
const size = require('node-size');

let input = 10362;
let output = size.humanReadable(input);
console.log(output); // prints '10.12 kB'
```

IEC standard usage:
```js
const size = require('node-size');

let input = 10120;
let output = size.humanReadable(input, size.FORMAT.IEC);
console.log(output); // prints '10.12 KiB'
```

Changing default format:
```js
const size = require('node-size');

size.setDefaultFormat(size.FORMAT.IEC);

let input = 10120;
let output = size.humanReadable(input);
console.log(output); // prints '10.12 KiB'
```

Machine-readable usage:
```js
const size = require('node-size');

let input = "1 MiB";
let output = size.machineReadable(input, size.FORMAT.IEC);
console.log(output); // prints '10000000' (number)
```
