package models

import play.api.libs.json.Json



case class Todo(title: String, completed: Boolean = false, editing: Boolean = false)
object Todo {
  implicit val reads = Json.reads[Todo]
  implicit val writes = Json.writes[Todo]

//  implicit val seqTodoWrites = Json.writes[Seq[Todo]]
}