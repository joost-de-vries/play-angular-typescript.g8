import {
    describe,
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    MockApplicationRef,
    TestComponentBuilder
} from "angular2/testing"
import { Todo } from "./app/services/store"
import {provide, ApplicationRef} from "angular2/core"

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