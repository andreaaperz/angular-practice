import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { IUSer } from '../app.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  //Recibe y envía variables del componente
  @Input() user: IUSer;
  @Output() outUser: EventEmitter<IUSer> = new EventEmitter<IUSer>();

  constructor() { }

  ngOnInit(): void {
  }

  //Emit
  onSendData(): void{
    this.outUser.emit(this.user);
  }

}
