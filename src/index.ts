import { FS } from '@robert.tools/fs';
import type { SIZE } from './index.d';

/**
 * 🎯 Get SVG attribute string based on the provided options and keys.
 * @param opts ➡️ The options object containing potential attributes.
 * @param key ➡️ The key to check within the options object.
 * @param attrKey ➡️ Optional attribute key to use in the SVG.
 * @returns {string} 📤 The formatted attribute string if the key exists, otherwise an empty string.
 */
const getAttr = (opts: any, key: string, attrKey?: string) => {
    const attr = attrKey || key;
    const hasAttr = opts && opts.hasOwnProperty(key) === true;
    return hasAttr ? `${attr}="${opts[key]}"` : '';
};

/**
 * 🎯 Calculate the size for the SVG based on the provided dimensions.
 * @param dimension ➡️ The dimensions for the SVG (width and height).
 * @returns {SIZE} 📤 The calculated size for the SVG (width and height).
 */
const getSize = (dimension: number[] | number): SIZE => {
    const isArray = Array.isArray(dimension);
    const v0 = isArray ? (dimension[0] as number) : (dimension as number);
    const hasSingle = isArray && dimension.length === 1;
    const hasDual = isArray && dimension.length === 2;
    return hasDual ? (dimension as SIZE) : hasSingle ? [v0, v0] : [v0, v0];
};

/**
 * 🎯 Get SVG content with optional dimensions, CSS class, and attributes
 * @param {string} file ➡️ The SVG file name to retrieve.
 * @param {number[] | number | undefined} dimension ➡️ The dimensions for the SVG (width and height).
 * @param {string} css ➡️ Optional CSS class to apply to the SVG.
 * @param {any} opts ➡️ Additional attributes for the SVG (e.g., ariaHidden, focusable).
 * @returns {string} 📤 The SVG content with applied dimensions, CSS class, and attributes.
 */
const fn = (
    file: string,
    dimension: number[] | number | undefined = undefined,
    css: string = '',
    opts: any = {}
) => {
    let content: string = '';
    let filePath = file.replace(/^\//, '');
    const FOLDERS = [
        './src/frontend/assets/',
        './',
        'assets/',
        './src/frontend/',
    ];
    // get file content
    for (const folder of FOLDERS) {
        if (FS.hasFile(`${folder}${filePath}`)) {
            content = FS.readFile(`${folder}${filePath}`) as string;
            break;
        }
    }
    // get attributes
    const ariaHidden = getAttr(opts, 'ariaHidden', 'aria-hidden');
    const focusable = getAttr(opts, 'focusable');
    const _css = css ? `class="${css}"` : '';
    const size = dimension ? getSize(dimension) : undefined;
    let dimensions = '';
    if (size) {
        content = content.replace(/width="[^"]+"/, '');
        content = content.replace(/height="[^"]+"/, '');
        dimensions = `width="${size[0]}" height="${size[1]}"`;
    }
    // replace SVG tag with updated attributes
    const attrs = `${dimensions} ${_css} ${ariaHidden} ${focusable}`;
    content = content.replace('<svg ', `<svg ${attrs.trim()}`);
    return content;
};
export default fn;
