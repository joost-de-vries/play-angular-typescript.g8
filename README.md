#Play Angular2 Typescript sample application [![Build Status](https://travis-ci.org/joost-de-vries/play-angular2-typescript.png?branch=master)](https://travis-ci.org/joost-de-vries/play-angular2-typescript)

This is an activator template that generates a sample Play Angular2 Typescript 1.8 application with a tutorial.

As mentioned it features an Angular2 application with Typescript compilation integrated with the continuous compilation of Play Scala code. The Typescript code is linted with `tslint`.

Once you have [activator](https://www.typesafe.com/community/core-tools/activator-and-sbt) installed you can run `activator new play-angular2-typescript` and you'll have a local application with a tutorial. Or you can just clone this repo and run `sbt ~run`.

**NB**: Make sure you don't have `typescript` installed globally. If you do have a global npm installation of `typescript` that version will be picked up. And then all bets are off obviously.
A symptom of having an older global `typescript` installation is that you get a `JsTaskFailure` / `TypeError` that the function `convertCompilerOptionsFromJson` can't be found. See [this issue](https://github.com/joost-de-vries/play-angular2-typescript/issues/1)

If you want to explore the upcoming typescript 2.0 you can find that in branch `ts-20-preview`. Specifically the resolution of webjar modules is done by core ts module resolution. Which should be more robust.

##what to do if

"I've created the application through activator and it runs fine in activator but it hangs when I try to run it through sbt"  
This is a [known problem](https://github.com/typesafehub/activator/issues/1036) with activator. Activator generates a file `project\play-fork-run.sbt` that causes this. If you remove it or comment out its contents the application will run in sbt.

