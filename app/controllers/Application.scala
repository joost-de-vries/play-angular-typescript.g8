package controllers

import models.Todo
import play.api.libs.json.{Json, _}
import play.api.mvc.{Action, _}

class Application extends Controller {

  def index = Action {
    /** change the template here to use a different way of compilation and loading of the ts ng2 app.
      * index()  :    does no ts compilation in advance. the ts files are download by the browser and compiled there to js.
      * index1() :    compiles the ts files to individual js files. Systemjs loads the individual files.
      * index2() :    add the option -DtsCompileMode=stage to your sbt task . F.i. 'sbt ~run -DtsCompileMode=stage' this will produce the app as one single js file.
      */
    Ok(views.html.index1())
  }

  val t = List(Todo("Foo"), Todo("Bar"), Todo("Frog"))

  def todos = Action {
    Ok(Json.toJson(t))
  }

  /**
    * This is not the most efficient way of doing things. In a real environment
    * one wouldn't update the entire list every time. This should be taken as an
    * example of how to write a route but not as an example of good architecture
   */
  def updateTodos() = Action { request =>
    val body: AnyContent = request.body
    val jsonBody: Option[JsValue] = body.asJson

    // Expecting json body
    jsonBody.map { json =>
      Ok(Json.toJson(t))
    }.getOrElse {
      BadRequest("Expecting application/json request body")
    }
  }

}
