import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap';

@Component({
   templateUrl: './confirmation.component.html',
})
export class ConfirmationComponent {
 @ViewChild('confirmModal') public confirmModal:ModalDirective;
 @Output() result = new EventEmitter<any>();
  
  public show(){
      this.confirmModal.show();
  }
  public hide(){
    this.confirmModal.hide();
  }
  public delete():void {
    this.result.emit({
      confirm:true
    });
    this.hide();
  }
  public cancel():void {
    this.result.emit({
      confirm:false
    });
    this.hide();
  }
}