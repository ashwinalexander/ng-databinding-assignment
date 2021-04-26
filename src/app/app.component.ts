import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(newNumber: number){
    newNumber % 2 === 0 ? this.evenNumbers.push(newNumber) : this.oddNumbers.push(newNumber);
    
  }

}
