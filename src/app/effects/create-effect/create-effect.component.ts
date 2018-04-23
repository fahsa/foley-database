import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileUpload } from '../fileupload'
import { UploadFileService } from '../upload-file.service';
import { Effect } from '../effect';
import { EffectService } from '../effect.service';

import * as firebase from 'firebase';

@Component({
  selector: 'create-effect',
  templateUrl: './create-effect.component.html',
  styleUrls: ['./create-effect.component.css']
})
export class CreateEffectComponent implements OnInit {

  effect: Effect = new Effect();
  categories: any;
  default_category: "";
  submitted = false;
  selectedFiles: FileList
  currentFileUpload: FileUpload
  progress: {percentage: number} = {percentage: 0}

  constructor(
    private effectService: EffectService,
    private uploadService: UploadFileService
  ) {}

  ngOnInit() {
    this.categories = this.effectService.getCategories();
    // this.effect.category = 'Aeronautics'
  }

  newEffect(): void {
    this.submitted = false;
    this.effect = new Effect();
  }

  save() {
    this.effectService.createEffect(this.effect);
    this.effect = new Effect();
  }

  onSubmit() {
    if (this.upload()) {
      var copy = this.effect;
      var list = this.effect.tag.split(',');
      for (let i of list) {
        var tag = i.trim();
        this.effect = copy;
        this.effect.tag = tag;
        this.save();
      };
      this.submitted = true;
    }
  }

   selectFile(event) {
     this.selectedFiles = event.target.files;
   }

   onChange(selected_category) {
    this.effect.category = selected_category;
    console.log(selected_category)
   }

   upload() {
     var user = firebase.auth().currentUser;
     if (!user) {
       alert("Please login to upload")
       return false;
     }
     const file = this.selectedFiles.item(0)
     this.currentFileUpload = new FileUpload(file);
     this.uploadService.pushFileToStorage(this.effect.category, this.effect.name, this.currentFileUpload)
     return true;
   }
}
