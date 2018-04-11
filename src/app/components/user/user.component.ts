import { Component, OnInit } from '@angular/core';

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
