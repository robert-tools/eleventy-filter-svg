import fn from './index';
import mock from 'mock-fs';

describe('svg filter', () => {
    const FN = fn;
    beforeEach(() => {
        mock({
            './src/frontend/assets/logo.svg': '<svg width="100"></svg>',
            'other-logo.svg': '<svg width="200"></svg>',
            'base.svg': '<svg></svg>',
            'assets/image.svg': '<svg id="assets"></svg>',
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('should return the svg if defined', () => {
        const result = FN('base.svg');
        const EXPECTED = '<svg></svg>'; // no extra css, different dimension
        expect(result).toEqual(EXPECTED);
    });
    it('should return the svg if defined', () => {
        const result = FN('image.svg');
        const EXPECTED = '<svg id="assets"></svg>'; // no extra css, different dimension
        expect(result).toEqual(EXPECTED);
    });
    it('should return the svg if defined', () => {
        // const result = FN('image.svg');
        const result = FN('/assets/image.svg');
        const EXPECTED = '<svg id="assets"></svg>'; // no extra css, different dimension
        expect(result).toEqual(EXPECTED);
    });
    it('should return the svg if defined', () => {
        const result = FN('logo.svg', [50, 80], '', {}); // no extra css, different dimension
        expect(result).toContain('width="50" height="80"');
    });
    it('should return the svg if defined', () => {
        const result = FN('logo.svg', [25], 'my-class', {}); // extra css, single dimension
        expect(result).toContain('width="25" height="25"');
    });
    it('should return the svg if defined', () => {
        const result = FN('other-logo.svg', 20, '', {}); // single dimension, other-logo
        expect(result).toContain('width="20" height="20"');
    });

    it('should return the svg if defined', () => {
        const options = { ariaHidden: true, focusable: false };
        const EXPECTED =
            '<svg width="50" height="50" class="my-class" aria-hidden="true" focusable="false"></svg>';
        const result = FN('logo.svg', [50, 50], 'my-class', options);
        expect(result).toEqual(EXPECTED);
    });
    it('should return nothing if the svg is not defined', () => {
        const result = FN('not-existing.svg', [50, 50], 'my-class', {});
        expect(result).toEqual('');
    });
});
