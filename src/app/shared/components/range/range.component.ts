import { Component, EventEmitter, Output } from "@angular/core";
import { RangeCustomEvent, RangeValue } from "@ionic/core";


@Component({
    selector: 'app-range',
    templateUrl: 'range.component.html',
    styleUrls: ['range.component.scss'],
  })
  export class RangeComponent {
    lastEmittedValue: RangeValue = 0;

    onIonChange(ev: Event) {
      this.lastEmittedValue = (ev as RangeCustomEvent).detail.value;
    }
  }