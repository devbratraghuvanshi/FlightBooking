import { Injectable } from '@angular/core';

import { FlightSearch } from './../models/flight-search-model';
import { data } from './../data/search-ressult-data';

@Injectable()
export class FlightService {
    search(): Promise<FlightSearch> {
        return Promise.resolve(data);
    };
    slowSearch(): Promise<FlightSearch> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.search()), 2000);
        });
    };
}
