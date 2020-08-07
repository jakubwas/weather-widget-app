import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-left',
  templateUrl: './box-left.component.html',
  styleUrls: ['./box-left.component.scss'],
})
export class BoxLeftComponent implements OnInit {
  @Input() weather: any;

  today: any;
  weekDay: string;
  date: string;
  timeOfTheDay: number;
  morning: boolean;
  afternoon: boolean;
  evening: boolean;

  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
    this.timeOfTheDay = this.today.getHours();
    this.weekDay = this.today.toLocaleString('default', { weekday: 'long' });

    const mm = this.today.toLocaleString('default', { month: 'short' });
    const dd = this.today.toLocaleString('default', { day: 'numeric' });
    const yyyy = this.today.toLocaleString('default', { year: 'numeric' });
    this.date = `${dd} ${mm} ${yyyy}`;

    this.checkDayTime();
  }

  checkDayTime() {
    if (this.timeOfTheDay >= 20 || this.timeOfTheDay < 4) {
      this.afternoon = false;
      this.evening = true;
      console.log(this.timeOfTheDay);
    } else if (this.timeOfTheDay >= 4 && this.timeOfTheDay < 12) {
      this.evening = false;
      this.morning = true;
      console.log(this.timeOfTheDay);
    } else {
      this.morning = false;
      this.afternoon = true;
    }
  }
}
