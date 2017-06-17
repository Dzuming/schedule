import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScheduleComponent } from './schedule.component';
export const scheduleRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'schedule', component: ScheduleComponent
    },
]);
@NgModule({
    imports: [scheduleRouting],
    exports: [RouterModule]
})
export class ScheduleRoutingModule { }