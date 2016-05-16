import {bootstrap} from "angular2/platform/browser"
import TodoAppComponent from "./app"
import {LocalStorageTodoStore} from "./services/store"
import {TodoStore} from "./services/todo.store"
import {provide} from "angular2/core"

bootstrap(TodoAppComponent, [ provide(TodoStore, {useClass: LocalStorageTodoStore}) ])
