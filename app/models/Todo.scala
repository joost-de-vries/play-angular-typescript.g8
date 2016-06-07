package models

import play.api.libs.json.Json



case class Todo(title: String, completed: Option[Boolean] = None, editing: Option[Boolean] = None)
object Todo {
  implicit val reads = Json.reads[Todo]
  implicit val writes = Json.writes[Todo]
}