import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  title:string = 'Tour of Heroes';
  heroes:string[] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero:string = this.heroes[3];
}
