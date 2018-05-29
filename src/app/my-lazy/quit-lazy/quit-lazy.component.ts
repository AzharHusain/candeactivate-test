import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-quit-lazy',
  templateUrl: './quit-lazy.component.html',
  styleUrls: ['./quit-lazy.component.css']
})
export class QuitLazyComponent implements OnInit {

  subject: Subject<boolean>;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  action(value: boolean) {
    this.bsModalRef.hide();
    this.subject.next(value);
    this.subject.complete();
  }

}
