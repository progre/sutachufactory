import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {
  Action,
  Figure,
  Manufacture,
  Operation,
  Special
} from '../../../domain/types';

@Component({
  selector: 'app-production-line',
  templateUrl: './production-line.component.html',
  styleUrls: ['./production-line.component.css']
})
export class ProductionLineComponent implements OnInit {
  @Input() beforeManufacturing: Manufacture | null;
  @Input() manufacturing: Manufacture | null;
  @Input() afteaManufacture: Manufacture | null;

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }
}
