import {
    describe,
    it,
    inject,
    beforeEachProviders,
    TestComponentBuilder
} from "@angular/core/testing"
import { Todo } from "./app/services/store"

// class MockTodoStorage implements TodoStorage {}

// #docregion describeIt
describe("some component", () => {
    it("does something", () => {
        const todo = <Todo>{
            completed: true,
            editing: true,
            title: "bla"
        }
        // This is a test.
        console.log("running js test "+JSON.stringify(todo))
    })
})