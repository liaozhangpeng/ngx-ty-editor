import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyEditorComponent } from './my-editor/my-editor.component';



@NgModule({
  declarations: [
    MyEditorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyEditorComponent
  ]
})
export class MyEditorModule { }
