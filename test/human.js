import assert from 'node:assert'
import { humanReadableSize, SIZE_FORMAT } from "../index.js";

describe('Size', function() {

    describe('#humanReadable(x, IEC)', function() {

        let tests = {
            '0.00 b': 0,
            '1.00 b': 1,
            '2.00 KiB': 2000,
            '3.00 MiB': 3000000,
            '4.00 GiB': 4 * Math.pow(10,9),
            '5.00 TiB': 5 * Math.pow(10,12),
            '6.00 PiB': 6 * Math.pow(10,15),
            '7.00 EiB': 7 * Math.pow(10,18),
            '8.00 ZiB': 8 * Math.pow(10,21),
            '9.00 YiB': 9 * Math.pow(10,24),
            '10.12 KiB': 10120
        };

        for(let output in tests){

            if(!tests.hasOwnProperty(output)){
                continue;
            }

            let input = tests[output];

            it('should return ' + output + ' when params are: ' + input + ", IEC", function() {
                assert.equal(humanReadableSize(input, SIZE_FORMAT.IEC), output);
            });

        }

    });

    describe('#humanReadable(x, SI)', function() {

        let tests = {
            '0.00 B': 0,
            '1.00 B': 1,
            '2.00 kB': 2048,
            '3.00 MB': 3145728,
            '4.00 GB': 4 * Math.pow(2,30),
            '5.00 TB': 5 * Math.pow(2,40),
            '6.00 PB': 6 * Math.pow(2,50),
            '7.00 EB': 7 * Math.pow(2,60),
            '8.00 ZB': 8 * Math.pow(2,70),
            '9.00 YB': 9 * Math.pow(2,80),
            '10.12 kB': 10362
        };

        for(let output in tests){

            if(!tests.hasOwnProperty(output)){
                continue;
            }

            let input = tests[output];

            it('should return ' + output + ' when params are: ' + input + ", SI", function() {
                assert.equal(humanReadableSize(input, SIZE_FORMAT.SI), output);
            });

        }

    });

    // TODO: negative/crash tests

});
