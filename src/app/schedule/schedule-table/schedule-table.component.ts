import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-schedule-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent implements OnInit {
@Input() schedule: any
  constructor() { }

  ngOnInit() {
  }

}
