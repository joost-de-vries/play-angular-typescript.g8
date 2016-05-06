import {bootstrap} from "angular2/platform/browser"
import TodoAppComponent from "./app"
import {TodoStore} from "./services/store"

bootstrap(TodoAppComponent, [TodoStore])
