import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataShareService } from '../data-share.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor(private _http: HttpClient, private _route: Router, private _sharedData: DataShareService) { }

  ngOnInit() {
    this._sharedData.currUpldData.subscribe(files => this.fileUpload = files)
  }

  files: any = [];

  fileUpload: any = {}

  selectedFile: File = null

  prevPage() {
    this._route.navigate(['/home']);
  }

  getFile(event) {
    this.selectedFile = <File>event.target.files[0];
    const input = event.target;
    const inputName = document.createElement('span');
    inputName.className = 'file-name';
    inputName.textContent = this.selectedFile.name;
    input.parentNode.append(inputName);
    console.log(this.selectedFile);
    console.log(this.selectedFile.name);
    this.selectedFile['finalName'] = event.target.name;
    this.files.push(this.selectedFile);
    console.log(this.files)
  }

  uploadFile() {
    console.log('uploads', this.files);
    this._sharedData.changeUpldData(this.files);
    for(const file of this.files) {
      const fd = new FormData();
      fd.append('file' , file);
      this._http.post('http://localhost:3000/file-upload', fd)
      .subscribe(
        res => { console.log(res) },
        err => { console.log(err) }
      )
    }
    this._route.navigate(['/preview']);
  }

}
