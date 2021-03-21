import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyRoomComponent } from './study-room/study-room.component';
import { SearchComponent } from './search/search.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CitingComponent } from './citing/citing.component';


const routes: Routes = [
  {
    path: '', component: MainPageComponent
  },
  {
    path: 'app-study-room', component: StudyRoomComponent
  },
  {
    path: 'app-search', component: SearchComponent
  },
  {
    path: 'app-attendance', component: AttendanceComponent
  },
  {
    path: 'app-citing', component: CitingComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
