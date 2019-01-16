import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Modal} from "./modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  @Input() modal: Modal;
  @Input() edited: boolean;
  @Output() editChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  // Closes Modal
  closeModal() {
    this.edited = false;
    this.editChange.emit(this.edited); // Here we are telling the child component to emit the edited value to the parent
  }
}
