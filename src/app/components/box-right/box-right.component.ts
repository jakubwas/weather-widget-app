import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-right',
  templateUrl: './box-right.component.html',
  styleUrls: ['./box-right.component.scss'],
})
export class BoxRightComponent implements OnInit {
  @Input() weather: any;

  constructor() {}

  ngOnInit(): void {}
}
