import { Component, OnInit } from '@angular/core';
import { emit } from 'cluster';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string;
  passcode:string;
  messageText:string;
  constructor() { 
    this.name="owsaldo"
  }

  ngOnInit() {
  }
  onClickMe() {  
    if(this.passcode && this.name)
    {   
        alert("gg");
    }
    else
    {
      alert("lulz")
    }
}  

}
