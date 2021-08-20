import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.scss']
})
export class DigitalClockComponent implements OnInit {

  private daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  private date = new Date();
  
  public hour: any;
  public minute: any;
  public second: any;
  public ampm: any;
  public day: any;
  constructor() { }

  ngOnInit() {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
  },1000); 

  this.day = this.daysArray[this.date.getDay()];
  }

  private updateDate(date: Date){
    const hours = date.getHours();

    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours % 12;
    this.hour = this.hour ? this.hour : 12;
    this.hour = this.hour < 10 ? '0' + this.hour : this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0' + minutes : minutes.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();

  }

}
