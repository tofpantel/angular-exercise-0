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
    const ev = words.filter( w => w.length%2 === 0)
    const od = words.filter( w => w.length%2)
    this.evenLen.push(...ev)
    this.oddLen.push(...od)
  
    

  }
}
