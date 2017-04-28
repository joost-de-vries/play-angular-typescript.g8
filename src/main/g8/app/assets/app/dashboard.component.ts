import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
//  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'assets/app/dashboard.component.html',
  styleUrls: [ 'assets/app/dashboard.component.css' ],
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  public ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
