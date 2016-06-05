import {Injectable} from "angular2/core"
import {TodoStore} from "./todo.store"
import { Http, Response } from "angular2/http"
import { Observable } from "rxjs/Observable"
import { Observer } from "rxjs/Observer"

import "rxjs/add/operator/map"
import "rxjs/add/operator/catch"

export interface Todo {
    completed: Boolean
    editing: Boolean
    title: String
}
@Injectable()
export class RemoteStorageTodoStore implements TodoStore {
    todos:Array<Todo>
    private toDoUrl: String = "app/todo"
    errorMessage: String

    constructor(private http: Http) {
        this.getTodos()
            .subscribe(
                todos => this.todos = todos,
                error =>  this.errorMessage = <any>error)

        this.todos = JSON.parse(localStorage.getItem("angular2-todos") || "[]")
    }

    getTodos (): Observable<Todo[]> {
        return this.http.get(this.toDoUrl)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json()
        return body.data || { }
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error"
        console.error(errMsg) // log to console instead
        return Observable.throw(errMsg)
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
            title: title
        }
        this.todos.push(todo)
        this.updateStore()
    }
}
