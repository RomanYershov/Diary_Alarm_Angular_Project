import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { DiaryComponent } from './diary/diary.component';
import { HttpClientModule } from '@angular/common/http';
import { DiaryService } from './services/diary.service';
import { DateService } from './services/date.service';
import { TimerComponent, SecondomerComponent } from './timer/timer.component';
import { AlarmComponent } from './alarm/alarm.component';
import { ClockComponent } from './clock/clock.component';


const appRoutes: Routes = [
  { path: 'diary', component: DiaryComponent  },
  { path: 'clock', component: ClockComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DiaryComponent,
    TimerComponent,
    AlarmComponent,
    ClockComponent,
    SecondomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DiaryService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
