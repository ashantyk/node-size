const FORMAT_SI  = 1024;
const FORMAT_IEC = 1000;

const UNITS_SI  = ['B','kB','MB','GB','TB','PB','EB','ZB','YB'];
const UNITS_IEC = ['b','KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];

const REGEX_SI  = "([0-9\.]+)\s*([a-zA-Z]{1,2})";
const REGEX_IEC = "([0-9\.]+)\s*([a-zA-Z]{1,3})";

let DECIMALS = 2;
let DEFAULT_FORMAT = FORMAT_SI;

/**
 * Convert machine-readable sizes (integer) to human-readable sizes (string)
 *
 * Examples:
 *     3000000 to '2.86 MB' (using FORMAT.SI)
 *     3000000 to '3 MiB' (using FORMAT.IEC)
 *
 * @param {number} size The actual size in bytes
 * @param {?number} format The format in which to make the transformation (IEC/SI)
 * @return {string}
 */
export function humanReadableSize(size, format= undefined){

    if(typeof size !== 'number'){
        throw new TypeError("Invalid `size` parameter");
    }

    if(typeof format !== 'number' || [FORMAT_SI, FORMAT_IEC].indexOf(format) === -1){
        format = DEFAULT_FORMAT;
    }

    let units = (format === FORMAT_IEC) ? UNITS_IEC : UNITS_SI;
    let unitSize = format;

    if(Math.abs(size) < format) {
        return size.toFixed(DECIMALS) + ' ' + units[0];
    }

    let divisions = 0;
    do {
        size /= unitSize;
        ++divisions;
    } while(Math.abs(size) >= unitSize && divisions < units.length);

    return size.toFixed(DECIMALS) + ' ' + units[divisions];

}

/**
 * Convert human-readable sizes (string) to machine-readable sizes (integer)
 *
 * Examples:
 *    '2.86MB' to 3000000 to (using FORMAT.SI)
 *    '3MiB' to 3000000 (using FORMAT.IEC)
 *
 * @param {string} size The human-readable size
 * @param {?number} format The format in which to make the transformation (IEC/SI)
 * @return {number}
 */
export function machineReadableSize(size, format = undefined){

    if(typeof size !== 'string'){
        throw new TypeError("Invalid `size` parameter");
    }

    if(typeof format !== 'number' || [FORMAT_SI, FORMAT_IEC].indexOf(format) === -1){
        format = DEFAULT_FORMAT;
    }

    let unitSize = format, units, regex;
    if(format === FORMAT_IEC){
        regex = REGEX_IEC;
        units = UNITS_IEC;
    } else {
        regex = REGEX_SI;
        units = UNITS_SI;
    }
    let matches = size.match(regex);
    if(!matches) {
        throw new TypeError("Invalid `size` parameter");
    }

    let foundSize = matches[1];
    let unit = matches[2];
    let unitIndex = units.indexOf(unit);

    if(unitIndex === -1){
        throw new TypeError("Invalid `size` parameter");
    }

    let multiplier = Math.pow(unitSize, unitIndex);
    let computedSize = parseFloat(foundSize) * multiplier;
    return Number.isSafeInteger(computedSize) ? parseInt(computedSize) : computedSize;

}

/**
 * Sets the default format for the converting functions (IEC/SI)
 *
 * @param {number} format
 */
export function setDefaultSizeFormat(format){

    if(typeof format !== 'number' || [FORMAT_SI, FORMAT_IEC].indexOf(format) === -1){
        throw new TypeError("Invalid `format` parameter");
    }

    DEFAULT_FORMAT = format;

}

export const SIZE_FORMAT = {
    "SI"    : FORMAT_SI,
    "JEDEC" : FORMAT_SI,
    "IEC"   : FORMAT_IEC
}
