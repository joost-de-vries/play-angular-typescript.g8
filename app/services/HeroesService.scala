package services

import javax.inject.Singleton

import play.api.libs.json.Json

import scala.concurrent.Future

case class Hero(id: Int, name: String)

object Hero{
  implicit val format = Json.format[Hero]
}

@Singleton
class HeroesService {
  @volatile private var heroes = Map(
      11 -> Hero(id = 11, name = "Mr. Nice"),
      12 -> Hero(id = 12, name = "Narco"),
      13 -> Hero(id = 13, name = "Bombasto"),
      14 -> Hero(id = 14, name = "Celeritas"),
      15 -> Hero(id = 15, name = "Magneta"),
      16 -> Hero(id = 16, name = "RubberMan"),
      17 -> Hero(id = 17, name = "Dynama"),
      18 -> Hero(id = 18, name = "Dr IQ"),
      19 -> Hero(id = 19, name = "Magma"),
      20 -> Hero(id = 20, name = "Tornado")
  )

  def all: Future[List[Hero]] = Future.successful(heroes.values.toList.sortBy(_.id))

  def delete(id: Int):Future[Option[Hero]] = {
    val answer = heroes.get(id)
    heroes = heroes - id
    Future.successful(answer)
  }

  def create(name: String): Future[Hero] = Future.successful {
    val id = heroes.keys.max + 1
    heroes = heroes + (id -> Hero(id, name))
    Hero(id, name)
  }

  def update(id: Int, name: String): Future[Hero] = Future.successful {
    heroes = heroes + (id -> Hero(id, name))
    Hero(id, name)
  }
}
