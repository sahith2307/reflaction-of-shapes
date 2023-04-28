import { Component } from '@angular/core';

@Component({
  selector: 'app-sahpes',
  templateUrl: './sahpes.component.html',
  styleUrls: ['./sahpes.component.scss'],
})
export class SahpesComponent {
  gamers: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18],
  ];
  original: number[][] = [
    [3, 2, 1],
    [6, 5, 4],
    [9, 8, 7],
    [12, 11, 10],
    [15, 14, 13],
    [18, 17, 16],
  ];
  shades: Array<any> = [];
  clickShades: Array<any> = [];
  stamp: any = [];
  clickCount = 0;
  time: number = 0;
  submit: boolean = false;
  results: boolean = false;
  interval: any;
  constructor() {
    this.onStartReset();
  }
  onStartReset() {
    for (let i = 0; i < 8; i++) {
      let randomNumber = Math.floor(Math.random() * 18) + 1;
      while (this.shades.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * 18) + 1;
      }
      this.shades.push(randomNumber);
    }
    this.interval = setInterval(() => {
      this.time += 1;
    }, 1000);
  }
  onClickShades = (index: number) => {
    if (this.clickShades.includes(index)) {
      this.clickShades.splice(this.clickShades.indexOf(index), 1);
      this.stamp.push('removed by click on: ' + this.time + ' sec');
    } else {
      this.clickShades.push(index);
      this.stamp.push('added by click on: ' + this.time + ' sec');
    }
  };
  onClickSubmit = () => {
    this.submit = true;
    clearInterval(this.interval);
    const wrong = [];
    this.clickShades.forEach((each: number) => {
      if (!this.shades.includes(each)) {
        wrong.push(each);
      }
    });
    if (this.clickShades.length === this.shades.length) {
      if (wrong.length === 0) {
        this.results = true;
      } else {
        this.results = false;
      }
    } else {
      this.results = false;
    }
  };
  onClickReset = () => {
    this.clickCount = 0;
    this.clickShades = [];
    this.stamp = [];
    this.shades = [];
    this.time = 0;
    this.submit = false;
    clearInterval(this.interval);
    this.onStartReset();
  };
}
