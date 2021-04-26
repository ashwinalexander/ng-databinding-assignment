import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  //this event can be called from outside the component
  @Output() intervalFired = new EventEmitter<number>();

  //reference to the setInterval function
  interval;
  lastNumber=0;

onStartGame(){
this.interval = setInterval(()=> {
this.intervalFired.emit(this.lastNumber+1);
this.lastNumber +=1;
},1000);

}

onPauseGame(){
  clearInterval(this.interval);
}


  constructor() { }

  ngOnInit(): void {
  }

}
