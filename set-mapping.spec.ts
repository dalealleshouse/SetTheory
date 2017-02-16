import { expect } from 'chai';

describe('set mapping should', () => {
    it('convert whole numbers to even numbers', () => {
        const wholeNumbers = [1, 2, 3];
        
        // evenNumbers = [2, 4, 6]
        const evenNumbers = wholeNumbers.map(n => n * 2);

        expect(evenNumbers).to.eql([2,4,6]);
    });

    it('convert complex object to strings', () => {
        const people = [{id: 1, name: "Ada Lovelace"}, {id:2, name: "Charles Babbage"}];

        // names = ["Ada Lovelace", "Charles Babbage"]
        const names = people.map(p => p.name);

        expect(names).to.eql(["Ada Lovelace", "Charles Babbage"]);
    });
});
