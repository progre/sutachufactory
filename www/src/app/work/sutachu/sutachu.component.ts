import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Action, Figure, Operation, Special } from '../../../domain/types';

@Component({
  selector: 'app-sutachu',
  templateUrl: './sutachu.component.html',
  styleUrls: ['./sutachu.component.css']
})
export class SutachuComponent implements OnInit, OnChanges {
  @Input() special: Special;
  @Input() defaultProne: 'true' | 'false';
  @Input() actions: string; // comma separeted Actions
  state: { prone: boolean; tail: 'notail' | 'tail' | 'wrongtail' };

  ngOnChanges(changes: SimpleChanges) {
    this.state = getState(
      this.special,
      this.defaultProne === 'true',
      <Action[]>this.actions.split(',').filter(x => x.length > 0)
    );
  }

  ngOnInit() {
  }
}

function getState(special: Special, defaultProne: boolean, actions: Action[]) {
  let prone = defaultProne;
  let tail: 'notail' | 'wrongtail' | 'tail' = 'notail';
  actions.forEach((action) => {
    switch (action) {
      case 'flip':
        if (special === 'udon') {
          return;
        }
        prone = !prone;
        return;
      case 'attach':
        if (tail !== 'notail') {
          tail = 'notail';
          return;
        }
        tail = prone ? 'wrongtail' : 'tail';
        return;
      default:
        throw new Error(action);
    }
  });
  return { prone, tail };
}
