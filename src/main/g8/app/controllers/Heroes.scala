package controllers

import javax.inject.Inject

import play.api.libs.json.{JsObject, JsValue, Json, Writes}
import play.api.mvc.{Action, Controller}
import services.HeroesService

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class Heroes @Inject()(heroesService: HeroesService) extends Controller {
  def all = Action.async {
    heroesService.all.map { s => Ok(toDataField(s)) }
  }

  private def toDataField[A](value: A)(implicit writes: Writes[A]): JsValue = {
    JsObject(Seq("data" -> Json.toJson(value)))
  }

  def delete(id: Int) = Action.async {
    heroesService.delete(id).map { _ => Ok("") }
  }

  def create = Action.async(parse.json) { implicit request =>
    (request.body \ "name").asOpt[String]
      .map { name =>
        heroesService
          .create(name)
          .map(s => Ok(toDataField(s)))
      }.getOrElse(Future.successful(BadRequest("expected 'name'")))
  }

  def update(id: Int) = Action.async(parse.json) { implicit request =>
    (request.body \ "name").asOpt[String]
      .map { name =>
        heroesService.update(id, name)
          .map(s => Ok(toDataField(s)))
      }.getOrElse(Future.successful(BadRequest("expected 'name'")))
  }
}
