import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilesInfo } from './filesInfo';

import { StudentInfo } from './studentInfo';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  private stuData = new BehaviorSubject(new StudentInfo());
  private upldData = new BehaviorSubject(new FilesInfo());

  currStudData = this.stuData.asObservable();
  currUpldData = this.upldData.asObservable();

  constructor() { }

  changeStudData(studentData) {
    this.stuData.next(studentData);
  }

  changeUpldData(uploadedData) {
    this.upldData.next(uploadedData);
  }
}
