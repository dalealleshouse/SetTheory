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

        expect(setDataStructure).to.eql(new Set([1, 2, 3]));
        expect(arrayDataStrcture).to.eql([1, 2, 3]);
    });

    it('union of complex objects', () => {
        const teamABugs = [
            { id: 1, name: "Screen Explodes" },
            { id: 2, name: "Keyboard Burts into Flames" },
            { id: 3, name: "Submit button off by 1 pixel" }];
        const teamBBugs = [
            { id: 5, name: "Randomly Dials Russian Hackers" },
            { id: 6, name: "Publishes CC info to the www" },
            { id: 3, name: "Submit button off by 1 pixel" }];

        const union = [...teamABugs, ...teamBBugs]
            .filter((x, index, array) => array.findIndex(y => y.id == x.id) == index);

        const expected = [
            { id: 1, name: "Screen Explodes" },
            { id: 2, name: "Keyboard Burts into Flames" },
            { id: 3, name: "Submit button off by 1 pixel" },
            { id: 5, name: "Randomly Dials Russian Hackers" },
            { id: 6, name: "Publishes CC info to the www" }];

        expect(expected).to.eql(union);
    });
});

describe('intersect', () => {
    it('intersect using Sets and primative types', () => {
        const expected = [3];

        const A = new Set([1, 2, 3]);
        const B = new Set([3, 4, 5]);
        const intersect = [...A].filter(x => B.has(x));
        // intersect = [3];

        expect(intersect).to.eql(expected);
    });

    it('intersect of roles without access', () => {
        const resourceRoles = [{ id: 1, name: "Administrator" }, { id: 2, name: "Super User" }];
        const user = { id: 314, name: "Edsger Dijkstra", roles: [{ id: 1, name: "Administrator" }, { id: 2, name: "User" }] }

        const hasAccess = resourceRoles.filter(x => user.roles.find(y => y.name == x.name)).length > 0;

        expect(hasAccess).to.be.true;
    });

    it('intersect of roles with access', () => {
        const resourceRoles = [{ id: 1, name: "Player" }, { id: 2, name: "Super User" }];
        const user = { id: 314, name: "Donald Knuth", roles: [{ id: 1, name: "Administrator" }, { id: 2, name: "User" }] }

        const hasAccess = resourceRoles.filter(x => user.roles.find(y => y.name == x.name)).length > 0;

        expect(hasAccess).to.be.false;
    });
});

describe('differance', () => {
    it('differance using Sets and primative types', () => {
        const expected = [4, 5];

        const A = new Set([1, 2, 3]);
        const B = new Set([3, 4, 5]);
        const differance = [...B].filter(x => !A.has(x));
        // differance = [3];

        expect(differance).to.eql(expected);
    });

    it('differance of actions', () => {
        const requiredActions = [{ id: 1, name: "Electronic Signing" }, { id: 2, name: "Submission Form" }, { id: 3, name: "Payment" }];
        const userActions = [{ id: 1, name: "Electronic Signing" }, { id: 2, name: "Submission Form" }];

        const complete = requiredActions.filter(x => !userActions.find(y => y.name == x.name)).length <= 0;

        expect(complete).to.be.false;
    });

    it('differance of actions when all are complete', () => {
        const requiredActions = [{ id: 1, name: "Electronic Signing" }, { id: 2, name: "Submission Form" }, { id: 3, name: "Payment" }];
        const userActions = [{ id: 1, name: "Electronic Signing" }, { id: 2, name: "Submission Form" }, { id: 3, name: "Payment" }, { id: 4, name: "Email Confirmation" }];;

        const complete = requiredActions.filter(x => !userActions.find(y => y.name == x.name)).length <= 0;

        expect(complete).to.be.true;
    });
});

describe('Cartesian Product', () => {
    it('Cartesian product with simple objects', () => {
        const suits = ['Diamond', 'Spade', 'Heart', 'Club'];
        const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

        const cards = suits.reduce((acc, x) => [...acc, ...values.map(y => [x, y])], []);
        // Alternatively, it’s possible to return the ordered pair as an object instead of an array
        // const cards = suits.reduce((acc, x) => [...acc, ...values.map(y => { return { suit: x, value: y } })], []);

        expect(cards.length).to.eql(52);

    });
});