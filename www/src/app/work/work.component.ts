import { Component, OnInit } from '@angular/core';
import {
  Action,
  Figure,
  Manufacture,
  Operation,
  Special
} from '../../domain/types';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  private beforeManufacturing: Manufacture

  ngOnInit() {
  }
}
