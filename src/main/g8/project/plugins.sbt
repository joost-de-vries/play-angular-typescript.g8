
// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.6.6")

// provides server side compilation of typescript to ecmascript 5 or 3
addSbtPlugin("name.de-vries" % "sbt-typescript" % "2.5.2-1")

// checks your typescript code for error prone constructions
addSbtPlugin("name.de-vries" % "sbt-tslint" % "5.7.0")

// runs jasmine tests
//addSbtPlugin("name.de-vries" % "sbt-jasmine" % "0.0.3")


addSbtPlugin("com.timushev.sbt" % "sbt-updates" % "0.3.2")
resolvers += "sonatype snapshots" at "https://oss.sonatype.org/content/repositories/snapshots/"
addSbtPlugin("net.virtual-void" % "sbt-dependency-graph" % "0.8.3-SNAPSHOT")
