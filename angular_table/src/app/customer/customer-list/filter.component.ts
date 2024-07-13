import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-filter',
  imports: [FormsModule],
  template: `Filter: <input type="text" [(ngModel)]="filter">`,
})
export class FilterComponent implements OnInit {
  private _filter: string = '';

  @Input()
  get filter(): string {
    return this._filter;
  }

  set filter(val: string) {
    this._filter = val;
    this.changed.emit(this.filter);
  }

  @Output() changed: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
