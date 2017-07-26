import {Component} from '@angular/core';

@Component({
  selector: 'my-class',
template: `<h1>{{title}}</h1><h2>{{hero}} details!</h2>`
/*template: `<h1>{{title}}</h1><h2>{{hero1.name}} details!</h2>` */

})

/*export class Hero {
  id: number;
  name: string;
}*/

export class MyClass {
title = 'Tour of Heroes';
hero = 'Windstorm';
name = 'Neeraj';

}


/*
hero1: Hero = {
  id: 1,
  name: 'Neeraj'
}; */
