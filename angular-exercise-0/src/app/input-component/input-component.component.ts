import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {
  userInput:  string = '';
  @Output() submitInput = new EventEmitter<string>()

  onSubmit(){
    this.submitInput.emit(this.userInput);
    this.userInput=''
  }
}
