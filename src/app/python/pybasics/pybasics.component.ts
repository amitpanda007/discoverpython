import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, switchMap, map } from 'rxjs';

@Component({
  selector: 'pybasics',
  templateUrl: 'pybasics.component.html',
  styleUrls: ['pybasics.component.scss'],
})
export class PyBasicsComponent implements OnInit {
  courseTitle: string = 'Python Basics';
  step: number = 0;
  courseComplete: boolean = false;
  totalSteps: number = 5;
  percentComplete: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.step = parseInt(sessionStorage.getItem('step') || '0');
    this.calculatePercentageComplete();
    this.checkCourseComplete();
  }

  setStep(index: number) {
    this.step = index;
    sessionStorage.setItem('step', JSON.stringify(this.step));
    this.calculatePercentageComplete();
    this.checkCourseComplete();
  }

  nextStep($event: any) {
    this.step++;
    sessionStorage.setItem('step', JSON.stringify(this.step));
    this.calculatePercentageComplete();
    this.checkCourseComplete();
  }

  prevStep() {
    this.step--;
    sessionStorage.setItem('step', JSON.stringify(this.step));
    this.calculatePercentageComplete();
    this.checkCourseComplete();
  }

  resetLearning() {
    this.setStep(0);
    sessionStorage.removeItem('step');
    this.calculatePercentageComplete();
    this.checkCourseComplete();
  }

  calculatePercentageComplete() {
    this.percentComplete = Math.floor((this.step / this.totalSteps) * 100);
  }

  checkCourseComplete() {
    if (this.percentComplete == 100) {
      this.courseComplete = true;
    } else {
      this.courseComplete = false;
    }
  }
}
