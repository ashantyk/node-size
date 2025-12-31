/**
 * Size format constants for converting between human-readable and machine-readable sizes
 */
export declare const SIZE_FORMAT: {
    /** SI format: divides/multiplies by 1024 */
    SI: number;
    /** JEDEC format: same as SI, divides/multiplies by 1024 */
    JEDEC: number;
    /** IEC format: divides/multiplies by 1000 */
    IEC: number;
};

/**
 * Convert machine-readable sizes (integer) to human-readable sizes (string)
 *
 * @param size - The actual size in bytes
 * @param format - Optional format (IEC/SI) for the transformation. Defaults to SI format.
 * @returns A human-readable size string (e.g., '2.86 MB' or '3 MiB')
 *
 * @example
 * ```
 * humanReadableSize(3000000); // '2.86 MB' (using default SI format)
 * humanReadableSize(3000000, SIZE_FORMAT.IEC); // '3 MiB'
 * ```
 *
 * @throws {TypeError} When size parameter is not a number, or format is invalid
 */
export declare function humanReadableSize(size: number, format?: number): string;

/**
 * Convert human-readable sizes (string) to machine-readable sizes (integer)
 *
 * @param {string} size - The human-readable size string (e.g., '2.86MB' or '3MiB')
 * @param {number} [format] - Optional format (IEC/SI) for the transformation. Defaults to SI format.
 * @returns {number} A machine-readable size as a number in bytes
 *
 * @example
 * ```
 * machineReadableSize('2.86MB'); // 3000000 (using default SI format)
 * machineReadableSize('3MiB', SIZE_FORMAT.IEC); // 3000000
 * ```
 *
 * @throws {TypeError} When size parameter is not a string, or format is invalid
 */
export declare function machineReadableSize(size: string, format?: number): number;

/**
 * Sets the default format for the converting functions (IEC/SI)
 *
 * @param {number} format - The format to set as default (use SIZE_FORMAT.SI or SIZE_FORMAT.IEC)
 *
 * @example
 * ```
 * setDefaultSizeFormat(SIZE_FORMAT.IEC);
 * humanReadableSize(10120); // '10.12 KiB'
 * ```
 *
 * @throws {TypeError} When format parameter is invalid
 */
export declare function setDefaultSizeFormat(format: number): void;

