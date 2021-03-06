import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ScheduleComponent } from './schedule.component';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleRoutingModule } from './schedule-routing.module';
import { ScheduleTableComponent } from './schedule-table/schedule-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    ScheduleRoutingModule
  ],
  declarations: [
    ScheduleComponent,
    ScheduleTableComponent
  ],
  exports: [
    ScheduleComponent
  ],
  providers: [
  ]
})
export class ScheduleModule { }