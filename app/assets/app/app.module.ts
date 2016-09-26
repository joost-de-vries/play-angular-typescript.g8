import { NgModule }      from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule }   from "@angular/forms"

import TodoAppComponent from "./app"
import { LocalStorageTodoStore } from "./services/store"
import { TodoStore } from "./services/todo.store"

@NgModule({
    imports: [
      BrowserModule
      , FormsModule
    ],
    declarations: [TodoAppComponent],
    bootstrap: [TodoAppComponent],
    providers: [
      {provide: TodoStore, useValue: new LocalStorageTodoStore()}
    ]
})
export class TodoAppModule { }

