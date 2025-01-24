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
import { humanReadableSize } from 'node-size';

let input = 10362;
let output = humanReadableSize(input);
console.log(output); // prints '10.12 kB'
```

IEC standard usage:
```js
import { humanReadableSize, SIZE_FORMAT } from 'node-size';

let input = 10120;
let output = humanReadableSize(input, SIZE_FORMAT.IEC);
console.log(output); // prints '10.12 KiB'
```

Changing default format:
```js
import { setDefaultSizeFormat, humanReadableSize, SIZE_FORMAT } from 'node-size';

setDefaultSizeFormat(SIZE_FORMAT.IEC);

let input = 10120;
let output = humanReadableSize(input);
console.log(output); // prints '10.12 KiB'
```

Machine-readable usage:
```js
import { machineReadableSize, SIZE_FORMAT } from 'node-size';

let input = "1 MiB";
let output = size.machineReadableSize(input, SIZE_FORMAT.IEC);
console.log(output); // prints '10000000' (number)
```

Available values for SIZE_FORMAT:
* SI - divides/multiplies by 1024
* JEDEC - same as SI
* IEC - divides/multiplies by 1000