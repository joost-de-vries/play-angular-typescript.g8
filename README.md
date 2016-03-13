#Play Angular2 Typescript sample application [![Build Status](https://travis-ci.org/joost-de-vries/play-angular2-typescript.png?branch=master)](https://travis-ci.org/joost-de-vries/play-angular2-typescript)

This is an activator template that generates a sample Play Angular2 Typescript 1.8 application with a tutorial.

As mentioned it features an Angular2 application with Typescript compilation integrated with the continuous compilation of Play Scala code. The Typescript code is linted with `tslint`.

Once you have [activator](https://www.typesafe.com/community/core-tools/activator-and-sbt) installed you can run `activator new play-angular2-typescript` and you'll have a local application with a tutorial. Or you can just clone this repo and run `sbt ~run`.

Currently the tutorial is still being written. 


##what to do if

"I've created the application through activator and it runs fine in activator but it hangs when I try to run it through sbt"  
This is a [known problem](https://github.com/typesafehub/activator/issues/1036) with activator. Activator generates a file `project\play-fork-run.sbt` that causes this. If you remove it or comment out its contents the application will run in sbt.

"I get an error saying that a javascript function is not found"  
Do you have a version of typescript installed globally through npm? If you make sure typescript is not installed globally the sbt plugin should find the correct typescript version that comes with it.
