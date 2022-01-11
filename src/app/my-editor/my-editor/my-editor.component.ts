import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-editor',
  templateUrl: './my-editor.component.html',
  styleUrls: ['./my-editor.component.scss']
})
export class MyEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }


  mouseUp(){
    console.log("mouseUp", window.getSelection());
  }

  keyPress(e: KeyboardEvent){
    if(e.key === 'Enter'){
      
    }
  }

}
