import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// import { QuitModalComponent } from '../quit-modal/quit-modal.component';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // canDeactivate() {

  //   // const confirmation = window.confirm('Are you sure?');
  //   // return Observable.of(confirmation);

  //   const subject = new Subject<boolean>();

  //   const modal = this.modalService.show(QuitModalComponent);
  //   modal.content.subject = subject;

  //   return subject.asObservable();
  // }

}
