import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuitLazyComponent } from '../quit-lazy/quit-lazy.component';
import { Subject } from 'rxjs/Subject';
import { BsModalService } from 'ngx-bootstrap';
import { merge } from 'rxjs/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-slow',
  templateUrl: './slow.component.html',
  styleUrls: ['./slow.component.css']
})
export class SlowComponent implements OnInit, OnDestroy {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

    canDeactivate() {

    // const confirmation = window.confirm('Are you sure?');
    // return Observable.of(confirmation);

    const subject = new Subject<boolean>();

    const modal = this.modalService.show(QuitLazyComponent);
    modal.content.subject = subject;
    const onHideObservable = this.modalService.onHide.map(() => false);
    return merge(
      subject.asObservable(),
      onHideObservable
    );
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
