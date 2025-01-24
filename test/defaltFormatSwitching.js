import assert from 'node:assert'
import { setDefaultSizeFormat, humanReadableSize, SIZE_FORMAT } from "../index.js";

describe('Size', function() {

    describe('#setDefaultSizeFormat(x)', function() {

        it('should convert using SI format when none was never specified', function() {
            assert.equal(humanReadableSize(2000), '1.95 kB');
        });

        it('should convert using IEC after default format was changed to IEC', function() {
            setDefaultSizeFormat(SIZE_FORMAT.IEC);
            assert.equal(humanReadableSize(2000), '2.00 KiB');
        });

        it('should convert using SI after default format was changed back to SI', function() {
            setDefaultSizeFormat(SIZE_FORMAT.SI);
            assert.equal(humanReadableSize(2000), '1.95 kB');
        });

    });

});
