name := """play-angular2-typescript"""
version := "0.2.0-beta.0"
lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.8"
incOptions := incOptions.value.withNameHashing(true)
updateOptions := updateOptions.value.withCachedResolution(cachedResoluton = true)

libraryDependencies ++= {
  val ngVersion="2.0.0-rc.4"
  Seq(
    cache,

    //angular2 dependencies
    "org.webjars.npm" % "angular__common" % ngVersion,
    "org.webjars.npm" % "angular__compiler" % ngVersion,
    "org.webjars.npm" % "angular__core" % ngVersion,
    "org.webjars.npm" % "angular__platform-browser-dynamic" % ngVersion,
    "org.webjars.npm" % "angular__platform-browser" % ngVersion,
    "org.webjars.npm" % "systemjs" % "0.19.31",
    "org.webjars.npm" % "todomvc-common" % "1.0.2",
    "org.webjars.npm" % "rxjs" % "5.0.0-beta.9",
    "org.webjars.npm" % "es6-promise" % "3.1.2",
    "org.webjars.npm" % "es6-shim" % "0.35.1",
    "org.webjars.npm" % "reflect-metadata" % "0.1.3",
    "org.webjars.npm" % "zone.js" % "0.6.12",
    "org.webjars.npm" % "core-js" % "2.4.0",
    "org.webjars.npm" % "symbol-observable" % "1.0.1",

    "org.webjars.npm" % "typescript" % "2.0.0-dev.20160707",

    //tslint dependency
    "org.webjars.npm" % "tslint-eslint-rules" % "1.2.0",
    "org.webjars.npm" % "codelyzer" % "0.0.19",
    "org.webjars.npm" % "types__jasmine" % "2.2.26-alpha" % "test"

    //test
    //  "org.webjars.npm" % "jasmine-core" % "2.4.1"
  )
}
dependencyOverrides += "org.webjars.npm" % "minimatch" % "3.0.0"

// the typescript typing information is by convention in the typings directory
// It provides ES6 implementations. This is required when compiling to ES5.
typingsFile := Some(baseDirectory.value / "typings" / "index.d.ts")

// use the webjars npm directory (target/web/node_modules ) for resolution of module imports of angular2/core etc
resolveFromWebjarsNodeModulesDir := true

// use the combined tslint and eslint rules plus ng2 lint rules
(rulesDirectories in tslint) := Some(List(
  tslintEslintRulesDir.value  //,    disable codelyzer until it supports ts 2.0
//  ng2LintRulesDir.value
))

routesGenerator := InjectedRoutesGenerator
