import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';

import { FileUpload } from './fileupload';

@Injectable()
export class UploadFileService {

  constructor(private db: AngularFireDatabase) {}

  pushFileToStorage(category: string, name: string, fileUpload: FileUpload) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(category + '/' + name).put(fileUpload.file);

    // uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //   (snapshot) => {
    //     // in progress
    //     const snap = snapshot as firebase.storage.UploadTaskSnapshot
    //     progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
    //   },
    //   (error) => {
    //     // fail
    //     console.log(error)
    //   },
    //   () => {
    //     console.log(uploadTask.snapshot.downloadURL)
    //   }
      // ,
      // () => {
      //   // success
      //   fileUpload.url = uploadTask.snapshot.downloadURL
      //   fileUpload.name = fileUpload.file.name
      //   this.saveFileData(fileUpload)
      // }
    // );
  }

  // private saveFileData(fileUpload: FileUpload) {
  //   this.db.list(`${this.basePath}/`).push(fileUpload);
  // }
}
