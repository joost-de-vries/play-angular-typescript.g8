import {Component} from "@angular/core"
import {Todo} from "./services/store"
import {TodoStore} from "./services/todo.store"

@Component({
    selector: "todo-app",
    templateUrl: "assets/app/app.html"
})
export default class TodoAppComponent {
    newTodoText = ""

    constructor(private todoStore:TodoStore) {
        this.todoStore = todoStore
    }

    stopEditing(todo:Todo, editedTitle:string) {
        todo.title = editedTitle
        todo.editing = false
    }

    cancelEditingTodo(todo:Todo) {
        todo.editing = false
    }

    updateEditingTodo(todo:Todo, editedTitle:string) {
        editedTitle = editedTitle.trim()
        todo.editing = false

        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo)
        }

        todo.title = editedTitle
    }

    editTodo(todo:Todo) {
        todo.editing = true
    }

    removeCompleted() {
        this.todoStore.removeCompleted()
    }

    toggleCompletion(todo:Todo) {
        this.todoStore.toggleCompletion(todo)
    }

    remove(todo:Todo) {
        this.todoStore.remove(todo)
    }

    addTodo() {
        if (this.newTodoText.trim().length) {
            this.todoStore.add(this.newTodoText)
            this.newTodoText = ""
        }
    }
}
