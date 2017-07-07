
import { Todo } from './app/services/store';

// class MockTodoStorage implements TodoStorage {}

// #docregion describeIt
describe('some component', () => {
    it('does something', () => {
        const todo = {
            completed: true,
            editing: true,
            title: 'bla',
        } as Todo;
        // This is a test.
        console.log('running js test ' + JSON.stringify(todo));
    });
});
