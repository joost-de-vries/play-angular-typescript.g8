package controllers

import play.api._
import play.api.mvc._

class Application extends Controller {

  def index = Action {
    /** change the template here to use a different way of compilation and loading of the ts ng2 app.
      * index()  :    does no ts compilation in advance. the ts files are download by the browser and compiled there to js.
      * index1() :    compiles the ts files to individual js files. Systemjs loads the individual files.
      * index2() :    add the option -DtsCompileMode=stage to your sbt task . F.i. 'sbt ~run -DtsCompileMode=stage' this will produce the app as one single js file.
      */
    Ok(views.html.index1())
  }

  def notFound(notFound: String) = Default.notFound

  def other(others: String) = index
}
