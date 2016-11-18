package controllers

import javax.inject.Inject

import play.api.libs.json.{Json, Writes}
import play.api.mvc.{Action, BodyParser, Controller}
import services.{Hero, HeroesService}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

class Heroes @Inject() (heroesService: HeroesService) extends Controller {
  def all = Action.async {
    heroesService.all.map { s => Ok(Json.toJson(Map(("data" , Json.toJson(s)(Writes.list(Json.writes[Hero]))))))}
  }

  def delete(id: String) = Action.async {
    heroesService.delete(id.toInt).map { _ => Ok("") }
  }

  def create = Action.async { implicit request =>
    request.body
      .asJson
      .flatMap( json => (json \ "name").asOpt[String])
      .map {name =>
        heroesService
          .create(name)
          .map(hero => Json.toJson(hero)(Json.writes[Hero]))
          .map(s => Ok(Json.toJson(Map(("data" , s)))))
      }.getOrElse(Future.successful(BadRequest("")))
  }

  def update(id: String) = Action.async { implicit request =>
    request.body
      .asJson
      .map(_ \ "name")
      .flatMap(_.asOpt[String])
      .map{ name =>
        heroesService.update(id.toInt, name)
          .map(hero => Json.toJson(hero)(Json.writes[Hero]))
          .map(s => Ok(Json.toJson(Map("data" -> s))))
      }.getOrElse(Future.successful(BadRequest))
  }
}
