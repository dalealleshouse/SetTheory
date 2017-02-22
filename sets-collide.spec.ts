import { expect } from 'chai';

describe('union', () => {
    it('union using Sets and primative types', () => {
        const expected = new Set([1, 2, 3, 4, 5]);
        
        const A = new Set([1, 2, 3]);
        const B = new Set([3, 4, 5]);
        const union = new Set([...A, ...B]);
        // union = [1,2,3,4,5];

        expect(union).to.eql(expected);
    });

    it('convert sets to arrays and back', () => {
        const setDataStructure = new Set([1, 2, 3]);
        const arrayDataStrcture = Array.from(setDataStructure);
        
        expect(setDataStructure).to.eql(new Set([1,2,3]));
        expect(arrayDataStrcture).to.eql([1,2,3]);
    });

    it('union of complex objects', () => {
        const teamABugs = [
            {id: 1, name: "Screen Explodes"},
            {id: 2, name: "Keyboard Burts into Flames"},
            {id: 3, name: "Submit button off by 1 pixel"}];
        const teamBBugs = [
            {id: 5, name: "Randomly Dials Russian Hackers"},
            {id: 6, name: "Publishes CC info to the www"},
            {id: 3, name: "Submit button off by 1 pixel"}];

        const union = [...teamABugs, ...teamBBugs]
            .filter((x, index, array) => array.findIndex(y => y.id == x.id) == index);

        const expected = [
            {id: 1, name: "Screen Explodes"},
            {id: 2, name: "Keyboard Burts into Flames"},
            {id: 3, name: "Submit button off by 1 pixel"},
            {id: 5, name: "Randomly Dials Russian Hackers"},
            {id: 6, name: "Publishes CC info to the www"}];

        expect(expected).to.eql(union);
    });
});

describe('intersect', () => {

});
