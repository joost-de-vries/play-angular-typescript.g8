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
    todos:Array<Todo> = []
    private toDoUrl: string = "todos"
    errorMessage: string

    constructor(private http: Http) {
        let parent: RemoteStorageTodoStore = this
        this.getTodos()
            .subscribe(
                todos => parent.todos = todos,
                error =>  parent.errorMessage = <any>error)
    }

    getTodos (): Observable<Todo[]> {
        return this.http.get(this.toDoUrl)
            .map(this.extractData)
            .catch(this.handleError)
    }

    private extractData(res: Response) {
        let body = res.json()
        return body || []
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : "Server error"
        console.error(errMsg) // log to console instead
        return Observable.throw(errMsg)
    }

    private updateStore() {
        return this.http.post(this.toDoUrl, JSON.stringify(this.todos))
            .map(this.extractData)
            .catch(this.handleError)
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
