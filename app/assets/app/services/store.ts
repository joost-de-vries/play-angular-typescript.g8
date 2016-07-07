import {Injectable} from "@angular/core"
import {TodoStore} from "./todo.store"

export interface Todo {
    completed: Boolean
    editing: Boolean

    title: String
}
@Injectable()
export class LocalStorageTodoStore implements TodoStore {
    todos:Array<Todo>

    constructor() {
        this.todos = JSON.parse(localStorage.getItem("angular2-todos") || "[]")
    }

    private updateStore() {
        localStorage.setItem("angular2-todos", JSON.stringify(this.todos))
    }

    private getWithCompleted(completed:Boolean) {
        return this.todos.filter((todo:Todo) => todo.completed === completed)
    }

    allCompleted() {
        return this.todos.length === this.getCompleted().length
    }

    setAllTo(completed:Boolean) {
        this.todos.forEach((t:Todo) => t.completed = completed)
        this.updateStore()
    }

    removeCompleted() {
        this.todos = this.getWithCompleted(false)
        this.updateStore()
    }

    getRemaining() {
        return this.getWithCompleted(false)
    }

    getCompleted() {
        return this.getWithCompleted(true)
    }

    toggleCompletion(todo:Todo) {
        todo.completed = !todo.completed
        this.updateStore()
    }

    remove(todo:Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
        this.updateStore()
    }

    add(title:String) {
        const todo = <Todo>{
            completed: false,
            editing: false,
            title: title
        }
        this.todos.push(todo)
        this.updateStore()
    }
}
