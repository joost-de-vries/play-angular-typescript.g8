
// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.6.1")

// provides server side compilation of typescript to ecmascript 5 or 3
addSbtPlugin("name.de-vries" % "sbt-typescript" % "2.4.1")

// checks your typescript code for error prone constructions
addSbtPlugin("name.de-vries" % "sbt-tslint" % "5.1.0")

addSbtPlugin("name.de-vries" % "sbt-jasmine" % "0.0.1SNAPSHOT")


addSbtPlugin("com.typesafe.sbt" % "sbt-digest" % "1.1.0")

addSbtPlugin("com.timushev.sbt" % "sbt-updates" % "0.1.10")
addSbtPlugin("net.virtual-void" % "sbt-dependency-graph" % "0.8.2")
