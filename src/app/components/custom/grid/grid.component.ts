import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  numbers: number[] = []
  dumymData: any[] = []
  popup: boolean = false;
  selectedDummyObj: any = {}

  constructor(private modalService: NgbModal) {
    this.numbers = Array(128).fill(1, 0, 128).map((x,i)=>i); 
    for (let i = 0; i < this.numbers.length; i++) {
      this.dumymData[i] = { name: i + 1,
                            value: i * Math.random() * 100,
                            disk: i * Math.random() * 50}
    }
  }

  ngOnInit(): void {
  }

  open(content, index) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    this.selectedDummyObj = this.dumymData[index];

  }

}
