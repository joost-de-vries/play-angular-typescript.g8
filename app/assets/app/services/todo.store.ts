import {Todo} from "./store"

export abstract class TodoStore {

    abstract allCompleted():boolean

    abstract setAllTo(completed:Boolean):void

    abstract removeCompleted():void

    abstract getRemaining():Array<Todo>

    abstract getCompleted():Array<Todo>

    abstract toggleCompletion(todo:Todo):void

    abstract remove(todo:Todo):void

    abstract add(title:String):void
}
