import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';
import { Center } from '../center';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  studentRegData = {
    fname: "",
    mname: "",
    lname: "",
    fathersName: "",
    mothersName: "",
    dob: "",
    gender: "",
    nationality: "",
    caste: "",
    address: "",
    city: "",
    state: "",
    country: "",
    ssExamination: "",
    ssBoard: "",
    ssSubject: "",
    ssYear: "",
    ssPercentage: "",
    hsExamination: "",
    hsBoard: "",
    hsSubject: "",
    hsYear: "",
    hsPercentage: "",
    applyFor: "",
    stream: "",
    medium: "",
    centerCity: "",
    centerName: ""
  }

  uploadedFiles: any = {}

  studentInfo: any = [];

  centers: any = []

  constructor(private _studentRegService: StudentRegistrationService, private _http: HttpClient, private _route: Router, private _sharedData: DataShareService) { }

  ngOnInit() {
    this.getCenter();
    console.log(this.centers);
    // this._sharedData.changeStudData.subscribe(stuData => this.studentRegData = stuData);
    this._sharedData.currStudData.subscribe(stuData => this.studentInfo = stuData);
    this._sharedData.currUpldData.subscribe(files => this.uploadedFiles = files);
  }

  selectedFile: File = null

  nextPage() {
    if (confirm('Have you save the data?')) {
      this._route.navigate(['/file-upload']);
    } else {
      return;
    }
  }

  getFile(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    console.log(this.selectedFile.name);
  }

  studentRegistration() {
    console.log(this.studentRegData);
    // const fd = new FormData();
    // fd.append('file', this.selectedFile, this.selectedFile.name)
    // this._http.post('http://localhost:3000/fileUpload', fd)
    // .subscribe(
    //   res => { console.log(res) },
    //   err => { console.log(err) }
    // )

    this._sharedData.changeStudData(this.studentRegData)
    
    this._studentRegService.studentReg(this.studentRegData)
      .subscribe(
        (err) => console.log(err),
        (res) => {
          console.log(res);
          alert('Your data has been submitted sucessfully');
        }
                
      )
  }
 
  getCenter(){
    this._studentRegService.getCenterData()
    .subscribe(
      res => { this.centers = res as Center[];
                  console.log(res); 
                },
      err => { console.log(err)}          
    )
  }

}
