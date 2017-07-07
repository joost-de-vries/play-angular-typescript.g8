This is a [Giter8](http://www.foundweekends.org/giter8/) template for a Play Angular starter application with incremental Typescript compilation.

## Installation
Run `sbt new joost-de-vries/play-angular-typescript.g8` and you'll have a local application.  
Or you can just clone this repo and move the contents of `src/main/g8` to the root.  

**NB**: Make sure you don't have `typescript` installed globally. If you do have a global npm installation of `typescript` that version will be picked up. And then all bets are off.
A symptom of having an older global `typescript` installation is that you get a `JsTaskFailure` / `TypeError` that the function `convertCompilerOptionsFromJson` can't be found. See [this issue](https://github.com/joost-de-vries/play-angular2-typescript/issues/1)


## Getting started
The NG2 application is the standard Heroes app. 
This Play project shows 3 ways of loading that app in the browser using Play.  
1. let the browser load the typescript files and have them compiled in the browser itself. This is easy to setup. But it makes greater computation demands on the client device. And it is really hard to find out about compilation errors. Which rather defies the added value of typed programming that typescript provides. This is implemented in [this html file](https://github.com/joost-de-vries/play-angular2-typescript/blob/master/app/views/index.scala.html). This template hasn't been ported to Angular RC4 yet.  
2. let the Play framework compile the typescript files when they're changed. The browser will load all the resulting individual js files individually. That can quickly lead to slow initial loading as the number of ts files of your application increases. This is implemented in [this html file](https://github.com/joost-de-vries/play-angular2-typescript/blob/master/app/views/index1.scala.html)  
3. let the Play framework compile the typescript files into one single javascript file. This will load much quicker. Currently this is not shown in this sample project.

For a lot of production applications option 3 will be required. While option 2 is nicer for development. 
We can do both without changing our source code by using `sbt ~run` for the former and `sbt stage -DtsCompileMode=stage` for the latter. So to get option 3 to work you'll have to provide that `-DtsCompileMode=stage` jvm argument.


## History

### v0.2.1
- upgrades to play 2.6.1
- upgrades to typescript 2.4.1

### migrate to giter8

### v0.2.0-beta.7
- upgrades to sbt-typescript 0.3.0-beta.11 and hence typescript 2.3.0

### v0.2.0-beta.6
- uses tslint 4.0.2

### v0.2.0-beta.5
- replace todomvc with tour of heroes as demo ng2 application. tx [Isammoc](https://github.com/Isammoc)
- use 'tslint:reommended' as a basis for tslint rules. Downgrade typescript to a supported version by tslint 3.x
