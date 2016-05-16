import {
    describe,
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    MockApplicationRef,
    TestComponentBuilder
} from "angular2/testing"
import {provide, ApplicationRef} from "angular2/core"

// class MockTodoStorage implements TodoStorage {}

// #docregion describeIt
describe("some component", () => {
    it("does something", () => {
        // This is a test.
        console.log("running js test")
    })
})