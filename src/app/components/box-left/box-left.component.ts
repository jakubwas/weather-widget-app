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

  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
    this.weekDay = this.today.toLocaleString('default', { weekday: 'long' });

    const mm = this.today.toLocaleString('default', { month: 'short' });
    const dd = this.today.toLocaleString('default', { day: 'numeric' });
    const yyyy = this.today.toLocaleString('default', { year: 'numeric' });
    this.date = `${dd} ${mm} ${yyyy}`;
  }
}
