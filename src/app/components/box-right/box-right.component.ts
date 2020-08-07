import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-box-right',
  templateUrl: './box-right.component.html',
  styleUrls: ['./box-right.component.scss'],
})
export class BoxRightComponent implements OnInit {
  @Input() weather: any;
  @Output() updateDataEmiter = new EventEmitter<boolean>();
  didVote = false;

  constructor() {}

  ngOnInit(): void {}
  updateData() {
    this.updateDataEmiter.emit();
  }
}
