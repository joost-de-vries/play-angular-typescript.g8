import {bootstrap} from "@angular/platform-browser-dynamic"
import TodoAppComponent from "./app"
import {LocalStorageTodoStore} from "./services/store"
import {TodoStore} from "./services/todo.store"

bootstrap(TodoAppComponent, [
    {provide:TodoStore, useClass: LocalStorageTodoStore}
])
