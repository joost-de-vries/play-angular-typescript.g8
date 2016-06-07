package controllers

import models.Todo
import play.api.libs.json.{Json, _}
import play.api.mvc.{Action, _}

import play.api.cache._
import play.api.mvc._
import javax.inject.Inject

class Application @Inject() (cache: CacheApi) extends Controller {

  private val TodoCacheName = "todoCache"

  def index = Action {
    /** change the template here to use a different way of compilation and loading of the ts ng2 app.
      * index()  :    does no ts compilation in advance. the ts files are download by the browser and compiled there to js.
      * index1() :    compiles the ts files to individual js files. Systemjs loads the individual files.
      * index2() :    add the option -DtsCompileMode=stage to your sbt task . F.i. 'sbt ~run -DtsCompileMode=stage' this will produce the app as one single js file.
      */
    Ok(views.html.index1())
  }

  def todos = Action {
    val todosList = cache.getOrElse(TodoCacheName)(Seq.empty[Todo])
    Ok(Json.toJson(todosList))
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
      val newList = json.as[Seq[Todo]]
      cache.set(TodoCacheName, newList)
      Ok(Json.toJson(newList))
    }.getOrElse {
      BadRequest("Expecting application/json request body")
    }
  }

}
