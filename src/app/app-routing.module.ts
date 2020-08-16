import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './components/start/start.component';
import { ExamComponent } from './components/exam/exam.component';
import { ResultComponent } from './components/result/result.component';
import { ExamLiveComponent } from './components/exam-live/exam-live.component';

const routes: Routes = [
 {path:'', component: StartComponent},
 {path:'take_exam', component: ExamComponent},
 {path:'final_results', component: ResultComponent},
 {path:'take_exam_live', component: ExamLiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
