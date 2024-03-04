import { Component, OnInit } from '@angular/core';


interface Business {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  items: Business[] = [
    {
      id: '1',
      name: 'Pizzeria',
      price: 5,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'Pizzeria'
    },
    {
      id: '2',
      name: 'WorkHub',
      price: 15,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'WorkHub'
    },
    {
      id: '2',
      name: 'WorkHub',
      price: 15,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'WorkHub'
    },
    {
      id: '2',
      name: 'WorkHub',
      price: 15,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'WorkHub'
    },
    {
      id: '2',
      name: 'WorkHub',
      price: 15,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'WorkHub'
    },
    {
      id: '2',
      name: 'WorkHub',
      price: 15,
      image:'https://ionicframework.com/docs/img/demos/card-media.png',
      description: 'WorkHub'
    },
    ];

  constructor() { }

  ngOnInit() {
  }

}
