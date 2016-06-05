import {bootstrap} from "angular2/platform/browser"
import TodoAppComponent from "./app"
import {LocalStorageTodoStore} from "./services/store"
import {RemoteStorageTodoStore} from "./services/remoteStore"
import {TodoStore} from "./services/todo.store"
import {provide} from "angular2/core"
import {HTTP_PROVIDERS} from "angular2/http"

// To use local storage swap RemoteStorageTodoStore to be LocalStorageTodoStore
bootstrap(
    TodoAppComponent,
    [
        provide(TodoStore, {useClass: RemoteStorageTodoStore}),
        HTTP_PROVIDERS
    ]
)
