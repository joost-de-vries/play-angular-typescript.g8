package models

import play.api.libs.json.Json

case class Todo(title: String, completed: Boolean = false, editing: Boolean = false)

object Todo {
  implicit val formats = Json.reads[Todo]
}