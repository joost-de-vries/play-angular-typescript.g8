import { Hero } from './app/hero';

// class MockTodoStorage implements TodoStorage {}

// #docregion describeIt
describe('some component', () => {
    it('does something correctly', () => {
        const hero = {
            id: 1,
            name: 'Hejlsberg',
        } as Hero;
        expect(true).toBe(true);
        // This is a test.
        console.log('running js test ' + JSON.stringify(hero));
    });
    it('does something else also correctly', () => {
        expect(true).toBe(true);
    });
});
