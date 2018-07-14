const assert = require('assert');
const size = require('./../index.js');

describe('Size', function() {

    describe('#machineReadable(x, IEC)', function() {

        let tests = {
            '0b': 0,
            '1b': 1,
            '2KiB': 2000,
            '3MiB': 3000000,
            '4GiB': 4 * Math.pow(10,9),
            '5TiB': 5 * Math.pow(10,12),
            '6PiB': 6 * Math.pow(10,15),
            '7EiB': 7 * Math.pow(10,18),
            '8ZiB': 8 * Math.pow(10,21),
            '9YiB': 9 * Math.pow(10,24)
        };

        for(let input in tests){

            if(!tests.hasOwnProperty(input)){
                continue;
            }

            let result = tests[input];

            it('should return ' + result + ' when params are: ' + input + ", IEC", function() {
                assert.equal(size.machineReadable.call(size, input, size.FORMAT.IEC), result);
            });

        }

    });

    describe('#machineReadable(x, SI)', function() {

        let tests = {
            '0B': 0,
            '1B': 1,
            '2kB': 2048,
            '3MB': 3145728,
            '4GB': 4 * Math.pow(2,30),
            '5TB': 5 * Math.pow(2,40),
            '6PB': 6 * Math.pow(2,50),
            '7EB': 7 * Math.pow(2,60),
            '8ZB': 8 * Math.pow(2,70),
            '9YB': 9 * Math.pow(2,80)
        };

        for(let input in tests){

            if(!tests.hasOwnProperty(input)){
                continue;
            }

            let result = tests[input];

            it('should return ' + result + ' when params are: ' + input + ", SI", function() {
                assert.equal(size.machineReadable.call(size, input, size.FORMAT.SI), result);
            });

        }

    });

    // TODO: negative/crash tests

});
