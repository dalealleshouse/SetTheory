import { expect } from 'chai';

describe('set operations', () => {
    it('calculate size', () => {
        const someSet = [1, 2, 3, 4, 5];
        var cardinality = someSet.length;
        // cardinality = 5;

        expect(cardinality).to.eql(5);
    });

    it('create a subset', () => {
        const animals = [
            { name: "Tom", type: "Cat" },
            { name: "Jerry", type: "Mouse" },
            { name: "Pluto", type: "Dog" },
            { name: "Scooby Doo", type: "Dog" }];

        const dogs = animals.filter(a => a.type == "Dog");
        // dogs = [{name: "Pluto", type: "Dog"}, {name: "Scooby Doo", type: "Dog"}]

        expect(dogs).to.eql([
            { name: "Pluto", type: "Dog" },
            { name: "Scooby Doo", type: "Dog" }]);
    });

    it('summation', () => {
        const someSet = [1, 2, 3];
        const sum = someSet.reduce((acc, x) => acc + x * 2, 0);
        // sum = 6

        expect(sum).to.eql(12);

        const users = [{ id: 1, email: "email@email.com" }, { id: 2, email: "email2@email2.com" }, { id: 3, email: "email3@email.com" }];
        const emails = users.map(u => u.email).reduce((acc, x) => `${acc};${x}`);
        // emails = "email@email.com;email2@email2.com;email3@email.com"

        expect(emails).to.eql("email@email.com;email2@email2.com;email3@email.com");
    });

    it('create a powerset', () => {
        const expected = [[], [0], [1], [1, 0], [2], [2, 0], [2, 1], [2, 1, 0]];

        const someSet = [0, 1, 2];
        const powerSet = someSet.reduce((acc, x) => [...acc, ...acc.map(y => [x, ...y])], [[]]);
        // powerSet = [[], [0], [1], [1,0], [2], [2,0], [2,1], [2,1,0]]

        expect(expected.length).to.eql(8);
        expect(powerSet).to.eql(expected);
    });


    it('power set step by step', () => {
        const expected = [[], [0], [1], [1, 0], [2], [2, 0], [2, 1], [2, 1, 0]];

        const ps = (acc, x) => [...acc, ...acc.map(y => [x, ...y])];

        let acc = ps([[]], 0);
        // acc = [[], [0]]

        acc = ps(acc, 1);
        //[[], [0], [1], [1,0]]

        acc = ps(acc, 2);
        // acc = [[], [0], [1], [1, 0], [2], [2, 0], [2, 1], [2, 1, 0]]

        expect(acc).to.eql(expected);
    });
});
