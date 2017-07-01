import { Flight } from './models/flight-model';
import { Component, Input } from '@angular/core';
import { FlightDetail } from './models/flight-detail-model';

@Component({
    selector: 'flight-detail',
    templateUrl: './flight-detail.component.html',
    styleUrls: ['./flight-detail.component.css']
})
export class FlightDetailComponent {
    @Input() flightDetail: FlightDetail;
}
