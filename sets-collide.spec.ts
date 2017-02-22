import { expect } from 'chai';

const A = [1, 2, 3];
const B = [3, 4, 5];

const Aset = new Set([1,2,3]);
const Bset = new Set([3,4,5]);

describe('union should', () => {
    function union(a, b) {
        // return [...new Set([...a, ...b])];
        // return [...a, ...b].filter((x, index, array) => array.indexOf(x) == index);
        return [...a, ...b].filter((x, index, array) => {
            var temp = array.indexOf(x) == index;
            console.log(`x = ${x}, index = ${index}, array = ${array}, result = ${temp}`);
            return array.indexOf(x) == index;
        });
    }

    function setUnion(a, b) {
        return new Set([...a, ...b]);
    }

    it('combine two set objects', () => {
        const expected = new Set([1,2,3,4,5]);
        const result = setUnion(Aset, Bset);

        expect(result).to.eql(expected);
    });

    it('combine two sets', () => {
        const expected = [1,2,3,4];
        const result = union([1,2], [3,4]);

        expect(result).to.eql(expected);
    });

    it('return distinct items', () => {
        const expected = [1,2,3,4,5];
        const result = union(A, B);

        expect(result).to.eql(expected);
    });

    it.only('return distinct items', () => {
        const expected = [1,2,3,4,5];
        const result = union([1,2,3,4,5,5], [5,4,3,2,1]);

        expect(result).to.eql(expected);
    });
});
