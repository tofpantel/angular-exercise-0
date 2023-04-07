import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-exercise-0';
  
  evenLen: string[]=[]
  oddLen: string[]=[]
  onButtonClicked(text: string){
    const words = text.trim().split(' ')
    this.evenLen = words.filter( w => w.length%2 === 0)
    this.oddLen = words.filter( w => w.length%2)
  }
}
