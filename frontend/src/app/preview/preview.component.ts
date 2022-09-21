import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {

  constructor(private _sharedData: DataShareService) { }

  studentData;
  uploadedFiles;

 

  ngOnInit() {
    // this._sharedData.changeStudData.subscribe(studData => this.studentData);
    this._sharedData.currStudData.subscribe(stuData => this.studentData = stuData);
    console.log(this.studentData);
    this._sharedData.currUpldData.subscribe(files => this.uploadedFiles = files);
    console.log(this.uploadedFiles);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // const photoUrl = URL.createObjectURL(this.uploadedFiles[1]);
    // const signUrl = URL.createObjectURL(this.uploadedFiles[2]);
    for(const file of this.uploadedFiles) {
      let reader = new FileReader();
      reader.onload = (function(theFile) {
        return function(e) {
          const span = document.createElement('span');
          span.innerHTML = `<img src="${e.target.result}" alt="uploaded-image" width="124px">`;
          if(file.finalName === 'photo') {
            document.getElementById('photo').appendChild(span);
          } else if (file.finalName === 'signature') {
            document.getElementById('signature').appendChild(span);
          }
        }
       })(file);
       reader.readAsDataURL(file)
    }
  }

  print() {
    window.print();
  }

}
