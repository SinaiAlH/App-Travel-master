import { dayDiffCheck } from '../client/js/dayDiffChecker';

describe('Test: check for day difference at client side' , () => {
    it('should to be valid', () => {
        expect(dayDiffCheck('2020-01-01', '2020-01-31')).toBe(30);
        expect(dayDiffCheck('2020-01-01', '2020-01-31')).not.toBe(31);
    });
});